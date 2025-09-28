import LinkContent from './link-content';
import { LinkItem } from '@/app/actions/link';

export default function LinksConteiner({ links }: Readonly<{ links: LinkItem[] }>) {
  return (
    <div className="">
      <ul>
        {links.map((link) => (
          <LinkContent link={link} key={link.id} />
        ))}
      </ul>
    </div>
  );
}
