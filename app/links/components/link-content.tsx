import { LinkItem } from '@/app/actions/link';

export default function LinkContent({ link }: Readonly<{ link: LinkItem }>) {
  return (
    <a href={link.url} target="_blank">
      {link.name}
    </a>
  );
}
