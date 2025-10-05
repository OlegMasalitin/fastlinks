'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import Link from 'next/link';
import { LinkItem } from '@/app/actions/link';
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function LinkContent({ link }: Readonly<{ link: LinkItem }>) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleDelete = async (id: string | null) => {
    const res = await fetch(`/api/links/${id}`, { method: 'DELETE' });
    if (res.ok) {
      startTransition(() => {
        router.refresh();
      });
    }
  };
  return (
    <>
      <a href={link.url} target="_blank" className="break-all" style={{ width: 'calc(100% - 160px)' }}>
        {link.name}
      </a>
      <div className="flex flex-row flex-nowrap items-center" style={{ width: '160px' }}>
        <Link className="orbitron ml-2 text-sky-700" href={`/links/${link.id}/view`}>
          View
        </Link>

        {session && (
          <Link className="orbitron ml-2 text-sky-700" href={`/links/${link.id}/edit`}>
            Edit
          </Link>
        )}

        {session && (
          <Popover>
            <PopoverTrigger>
              <span className="orbitron ml-2 text-sky-700 cursor-pointer">Delete</span>
            </PopoverTrigger>
            <PopoverContent>
              <div>Are you sure you want to delete this link?</div>
              <div className="w-full flex flex-row justify-end">
                <button className="ml-2 text-sky-700" onClick={() => handleDelete(link.id)}>
                  Confirm
                </button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </>
  );
}
