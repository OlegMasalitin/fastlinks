'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button className="cursor-pointer nixie-one-regular text-xl" onClick={() => signOut({ callbackUrl: '/auth' })}>
      Logout
    </button>
  );
}
