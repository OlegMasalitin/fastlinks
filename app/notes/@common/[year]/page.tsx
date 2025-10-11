import CommonNotesContainer from '@/app/notes/components/common-notes-container';
import Link from 'next/link';
import { getYearCommonNotes } from '@/app/actions/note-actions';
import { notFound } from 'next/navigation';

interface CommonNoteProps {
  params: Promise<{ year: string }>;
}

export default async function CommonYearNotes({ params }: Readonly<CommonNoteProps>) {
  const { year } = await params;
  const numYear = parseInt(year);

  if (isNaN(numYear)) {
    notFound();
  }

  const notes = await getYearCommonNotes(numYear);

  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-between absolute top-[-38px] left-[200px] right-0">
        <span>Selected year: {year}</span>
        <Link className="" href={`/notes`}>
          <button className="px-4 py-2 bg-gray-200 rounded">Go Back</button>
        </Link>
      </div>
      <div className="pt-3">
        <CommonNotesContainer notes={notes} />
      </div>
    </div>
  );
}
