'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { CommonNote } from '@/app/actions/Note';
import Link from 'next/link';
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function CommonNoteContent({ note }: Readonly<{ note: CommonNote }>) {
  const router = useRouter();
  const { data: session } = useSession();

  const handleDelete = async (id: string | null) => {
    const res = await fetch(`/api/notes/manage/${id}`, { method: 'DELETE' });
    if (res.ok) {
      startTransition(() => {
        router.refresh();
      });
    }
  };
  return (
    <>
      <div>
        <div className="break-all">{note.text}</div>
        <div className="break-all text-xs">{note.description}</div>
      </div>

      <div className="flex flex-row flex-nowrap items-center">
        <Link className="orbitron ml-2 text-sky-700" href={`/notes/manage/${note.id}/view`}>
          View
        </Link>

        {session && (
          <Link className="orbitron ml-2 text-sky-700" href={`/notes/manage/${note.id}/edit`}>
            Edit
          </Link>
        )}

        {session && (
          <Popover>
            <PopoverTrigger>
              <span className="orbitron ml-2 text-sky-700 cursor-pointer">Delete</span>
            </PopoverTrigger>
            <PopoverContent>
              <div>Are you sure you want to delete this note?</div>
              <div className="w-full flex flex-row justify-end">
                <button className="ml-2 text-sky-700" onClick={() => handleDelete(note.id)}>
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
