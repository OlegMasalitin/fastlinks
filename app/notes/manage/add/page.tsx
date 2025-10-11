import BackButton from '@/app/components/back-button';
import { CommonNote } from '@/app/actions/Note';
import { notFound } from 'next/navigation';

export default async function AddNote() {
  const link = {
    id: null,
    text: '',
    description: '',
    year: new Date().getFullYear(),
  } as CommonNote;

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
