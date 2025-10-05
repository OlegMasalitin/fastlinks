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
    <Link
      href={href}
      className={path === href ? 'text-amber-800 nixie-one-regular text-lg' : 'nixie-one-regular text-xl'}
    >
      {children}
    </Link>
  );
}
