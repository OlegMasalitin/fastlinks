import LinksConteiner from './components/links-container';
import { loadLinks } from '../actions/link-actions';

export default async function Links() {
  const links = await loadLinks();

  return (
    <div className="">
      <LinksConteiner links={links} />
    </div>
  );
}
