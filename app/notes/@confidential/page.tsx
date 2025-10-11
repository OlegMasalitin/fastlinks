import Link from 'next/link';
import { getAvailableConfidentialYears } from '@/app/actions/note-actions';

export default async function ConfidentialNotes() {
  const years = await getAvailableConfidentialYears();
  return (
    <div className="">
      <ul>
        {years.map((year) => (
          <li key={year}>
            <Link href={`/notes/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
