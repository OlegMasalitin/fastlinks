import LinksContainer from '../../components/links-container';
import LinksNavigationPanel from '../../components/links-navigation-panel';
import { loadLinks } from '@/app/actions/link-actions';

interface LinksProps {
  searchParams: Promise<{ tags?: string; search?: string }>;
}

export default async function Links({ searchParams }: Readonly<LinksProps>) {
  const { tags, search } = await searchParams;
  const filter = tags || '';
  const tagsFilter = filter.split(',').filter((f) => !!f);
  const links = await loadLinks(null, false, null, tagsFilter, search);

  return (
    <div className="">
      <LinksNavigationPanel searchUrl={'/links/hidden'} filterTags={filter} filterName={search || ''} />
      <LinksContainer links={links} />
    </div>
  );
}
