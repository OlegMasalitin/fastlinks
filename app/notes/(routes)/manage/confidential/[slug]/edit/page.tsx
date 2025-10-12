import AddConfidentialNoteForm from '@/app/notes/components/confidential-note-form';
import BackButton from '@/app/components/back-button';
import { loadConfidentialNote } from '@/app/actions/note-actions';
import { notFound } from 'next/navigation';

interface EditNoteProps {
  params: Promise<{ slug: string }>;
}

export default async function EditConfidentialNote({ params }: Readonly<EditNoteProps>) {
  const { slug } = await params;
  const note = await loadConfidentialNote(slug);

  if (note == null) {
    notFound();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <AddConfidentialNoteForm note={note} isEdit={true} />
    </div>
  );
}
