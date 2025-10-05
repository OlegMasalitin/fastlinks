import Link from 'next/link';
import Logo from './logo';
import LogoutButton from './logout-button';
import NavLink from './nav-link';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

export default async function Header() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log('Session exist...');
  } else {
    console.log('Session NOT exist...');
  }

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
        <NavLink href="/about">About</NavLink>

        {!session && (
          <>
            <span className="inline-block mx-2">|</span>
            <NavLink href="/auth">Login</NavLink>
          </>
        )}
        {session && (
          <>
            <span className="inline-block mx-2">|</span>
            <LogoutButton />
          </>
        )}
      </div>
    </header>
  );
}
