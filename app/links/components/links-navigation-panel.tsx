import LinksNavigationPanelSearch from './links-navigation-panel-search';
import NavLink from '@/app/components/nav-link';

export default function LinksNavigationPanel({
  searchUrl,
  filterTags,
  filterName,
}: Readonly<{ searchUrl: string; filterTags: string; filterName: string }>) {
  return (
    <div className="flex flex-row pb-3 items-center">
      <NavLink href="/links">All</NavLink>
      <span className="inline-block mx-2">|</span>
      <NavLink href="/links/new">New</NavLink>
      <span className="inline-block mx-2">|</span>
      <NavLink href="/links/hidden">Hidden</NavLink>
      <span className="inline-block mx-2">|</span>
      <NavLink href="/links/archived">Archived</NavLink>
      <div className="mx-2">
        <LinksNavigationPanelSearch searchUrl={searchUrl} filterTags={filterTags} filterName={filterName} />
      </div>
    </div>
  );
}
