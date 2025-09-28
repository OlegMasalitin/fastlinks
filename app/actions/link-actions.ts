import { MongoClient, ServerApiVersion } from 'mongodb';

import { LinkItem } from './link';
import { resolve } from 'path';

const uri =
  'mongodb+srv://massaoleg_db_user:6FwlJiDikU3Df3Fo@cluster0.wrw6e8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function loadLinks(): Promise<LinkItem[]> {
  try {
    await client.connect();
    const db = await client.db('fastlinks');
    const linksCollection = db.collection('links');
    const links = await linksCollection.find().toArray();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return links.map((link) => {
      return {
        id: link._id.toString(),
        name: link.name,
        url: link.url,
        tags: link.tags,
        visible: link.visible,
        isNew: link.isNew,
        state: link.state,
        archived: link.archived,
      };
    });
  } finally {
    await client.close();
  }
}
