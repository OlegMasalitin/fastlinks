import AddCommonNoteForm from '@/app/notes/components/common-note-form';
import BackButton from '@/app/components/back-button';
import { loadCommonNote } from '@/app/actions/note-actions';
import { notFound } from 'next/navigation';

interface EditNoteProps {
  params: Promise<{ slug: string }>;
}

export default async function EditCommonNote({ params }: Readonly<EditNoteProps>) {
  const { slug } = await params;
  const note = await loadCommonNote(slug);

  if (note == null) {
    notFound();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <AddCommonNoteForm note={note} isEdit={true} />
    </div>
  );
}
