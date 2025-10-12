import AddCommonNoteForm from '@/app/notes/components/common-note-form';
import BackButton from '@/app/components/back-button';
import { CommonNote } from '@/app/actions/allnote';
import { notFound } from 'next/navigation';

export default async function AddCommonNote() {
  const note = {
    id: null,
    text: '',
    description: '',
    year: new Date().getFullYear(),
  } as CommonNote;

  if (note == null) {
    notFound();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <AddCommonNoteForm note={note} isEdit={false} />
    </div>
  );
}
