import { client, getLinksCollection } from './mongodb';

import { LinkItem } from './link';
import { ObjectId } from 'mongodb';

export async function loadLinks(
  isNew: boolean | null,
  visible: boolean | null,
  archived: boolean | null,
  tags: string[] = [],
  search: string | null = null
): Promise<LinkItem[]> {
  try {
    const filter = {} as { isNew: boolean; visible: boolean; archived: boolean };
    if (isNew !== null) {
      filter.isNew = isNew;
    }
    if (visible !== null) {
      filter.visible = visible;
    }
    if (archived !== null) {
      filter.archived = archived;
    }

    const linksCollection = await getLinksCollection();
    const links = await linksCollection.find(filter).toArray();

    const searchLowerCase = search?.toLowerCase();
    const filteredLinksBySearch = !search
      ? links
      : links.filter((link) => {
          return link.name.toLowerCase().indexOf(searchLowerCase) > -1;
        });
    const filteredLinks =
      tags.length === 0
        ? filteredLinksBySearch
        : filteredLinksBySearch.filter((link) => {
            return tags.some((tag) => (link.tags || []).some((t: string) => t.toLowerCase() === tag.toLowerCase()));
          });

    return filteredLinks.map((link) => {
      return {
        id: link._id.toString(),
        name: link.name,
        url: link.url,
        tags: link.tags,
        visible: link.visible,
        isNew: link.isNew,
        state: link.state,
        archived: link.archived,
        timestamp: link.timestamp,
      };
    });
  } finally {
    await client.close();
  }
}

export async function loadLink(id: string): Promise<LinkItem | null> {
  try {
    const linksCollection = await getLinksCollection();
    const link = await linksCollection.findOne({ _id: new ObjectId(id) });

    return link == null
      ? null
      : {
          id: link._id.toString(),
          name: link.name,
          url: link.url,
          tags: link.tags,
          visible: link.visible,
          isNew: link.isNew,
          state: link.state,
          archived: link.archived,
          timestamp: link.timestamp,
        };
  } catch (_) {
    return null;
  } finally {
    await client.close();
  }
}
