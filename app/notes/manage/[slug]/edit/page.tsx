import BackButton from '@/app/components/back-button';
import { loadCommonNote } from '@/app/actions/note-actions';
import { notFound } from 'next/navigation';

interface EditNoteProps {
  params: Promise<{ slug: string }>;
}

export default async function EditNote({ params }: Readonly<EditNoteProps>) {
  const { slug } = await params;
  const link = await loadCommonNote(slug);

  if (link == null) {
    notFound();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
    </div>
  );
}
