import Link from 'next/link';
import Logo from './logo';
import NavLink from './nav-link';

export default function Header() {
  return (
    <header className="h-[64px] p-[8px] flex flex-row justify-between items-center border-b border-gray-500">
      <Link href="/">
        <Logo />
      </Link>
      <div>
        <NavLink href="/links/add">Add Link</NavLink>
        <span className="inline-block mx-2">|</span>
        <NavLink href="/links">Links</NavLink>
        <span className="inline-block mx-2">|</span>
        <NavLink href="/notes">Notes</NavLink>
        <span className="inline-block mx-2">|</span>
        <NavLink href="/about">About Us</NavLink>
      </div>
    </header>
  );
}
