import BackButton from '@/app/components/back-button';
import { loadCommonNote } from '@/app/actions/note-actions';
import { notFound } from 'next/navigation';

interface ViewCommonNoteProps {
  params: Promise<{ slug: string }>;
}

export default async function ViewCommonNote({ params }: Readonly<ViewCommonNoteProps>) {
  const { slug } = await params;
  const note = await loadCommonNote(slug);

  if (note == null) {
    notFound();
  }

  const timestamp = note.timestamp ? new Date(note.timestamp).toString() : '';

  return (
    <>
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <div className="max-w-md mx-auto mt-10">
        <div className="font-bold">Text: </div>
        <div className="mb-3 ml-5 text-sky-500">{note.text}</div>
        <div className="font-bold">Description: </div>
        <div className="mb-3 ml-5 text-sky-500">{note.description}</div>
        <div className="font-bold">Year: </div>
        <div className="mb-3 ml-5 text-sky-500">{note.year.toString()}</div>
        <div className="font-bold">Timestamp: </div>
        <div className="mb-8 ml-5 text-sky-500">{timestamp}</div>
      </div>
    </>
  );
}
