import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { CommonNote } from '@/app/actions/allnote';
import CommonNoteContent from './common-note-content';
import Link from 'next/link';
import classes from './notes-container.module.css';

export default function CommonNotesContainer({ notes }: Readonly<{ notes: CommonNote[] }>) {
  return (
    <div className="">
      {notes.length > 0 && (
        <ol className={`${classes.threecolumns} !list-decimal`}>
          {notes.map((note) => (
            <li key={note.id} className="overflow-hidden hover:bg-gray-100 px-2 border-b border-sky-100">
              <CommonNoteContent note={note} />
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
                <Link href="/notes/manage/common/add" className="ml-1 nixie-one-regular">
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
