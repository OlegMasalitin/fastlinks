import AddConfidentialNoteForm from '@/app/notes/components/confidential-note-form';
import BackButton from '@/app/components/back-button';
import { ConfidentialNote } from '@/app/actions/allnote';
import { notFound } from 'next/navigation';

export default async function AddConfidentialNote() {
  const note = {
    id: null,
    login: '',
    password: '',
    description: '',
    year: new Date().getFullYear(),
  } as ConfidentialNote;

  if (note == null) {
    notFound();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <AddConfidentialNoteForm note={note} isEdit={false} />
    </div>
  );
}
