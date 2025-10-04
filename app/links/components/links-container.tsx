import LinkContent from './link-content';
import { LinkItem } from '@/app/actions/link';
import classes from './links-container.module.css';

export default function LinksContainer({ links }: Readonly<{ links: LinkItem[] }>) {
  return (
    <div className="">
      <ol className={`${classes.threecolumns} !list-decimal`}>
        {links.map((link) => (
          <li
            key={link.id}
            className="flex flex-row justify-between items-start line-clamp-2 overflow-hidden hover:bg-gray-100 px-2 border-b border-sky-100"
          >
            <LinkContent link={link} />
          </li>
        ))}
      </ol>
    </div>
  );
}
