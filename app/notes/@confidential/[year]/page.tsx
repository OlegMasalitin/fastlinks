import ConfidentialNotesContainer from '../../components/confidential-notes-container';
import Link from 'next/link';
import { getYearConfidentialNotes } from '@/app/actions/note-actions';
import { notFound } from 'next/navigation';

interface ConfidentialNoteProps {
  params: Promise<{ year: string }>;
}

export default async function ConfidentialYearNotes({ params }: Readonly<ConfidentialNoteProps>) {
  const { year } = await params;
  const numYear = parseInt(year);

  if (isNaN(numYear)) {
    notFound();
  }

  const notes = await getYearConfidentialNotes(numYear);
  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-between absolute top-[-38px] left-[200px] right-0">
        <span>Selected year: {year}</span>
        <Link className="" href={`/notes`}>
          <button className="px-4 py-2 bg-gray-200 rounded">Go Back</button>
        </Link>
      </div>
      <div className="pt-3">
        <ConfidentialNotesContainer notes={notes} />
      </div>
    </div>
  );
}
