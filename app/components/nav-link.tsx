'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? 'text-sky-600 underline' : ''}>
      {children}
    </Link>
  );
}
