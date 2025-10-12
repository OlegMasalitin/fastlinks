import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { ConfidentialNote } from '@/app/actions/allnote';
import ConfidentialNoteContent from './confidential-note-content';
import Link from 'next/link';
import classes from './notes-container.module.css';

export default function ConfidentialNotesContainer({ notes }: Readonly<{ notes: ConfidentialNote[] }>) {
  return (
    <div className="">
      {notes.length > 0 && (
        <ol className={`${classes.threecolumns} !list-decimal`}>
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex flex-row justify-between items-start line-clamp-2 overflow-hidden hover:bg-gray-100 px-2 border-b border-sky-100"
            >
              <ConfidentialNoteContent note={note} />
            </li>
          ))}
        </ol>
      )}
      {notes.length === 0 && (
        <div className="max-w-md mx-auto mt-10">
          <Alert>
            <AlertTitle>NO NOTES</AlertTitle>
            <AlertDescription>
              <div className="whitespace-nowrap">
                Please add new
                <Link href="/notes/manage/confidential/add" className="ml-1 nixie-one-regular">
                  note
                </Link>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
