import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import Link from 'next/link';
import LinkContent from './link-content';
import { LinkItem } from '@/app/actions/link';
import classes from './links-container.module.css';

export default function LinksContainer({ links }: Readonly<{ links: LinkItem[] }>) {
  return (
    <div className="">
      {links.length > 0 && (
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
      )}
      {links.length === 0 && (
        <div className="max-w-md mx-auto mt-10">
          <Alert>
            <AlertTitle>NO ITEMS</AlertTitle>
            <AlertDescription>
              <div className="whitespace-nowrap">
                Please add new
                <Link href="/links/add" className="ml-1 nixie-one-regular">
                  link
                </Link>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
