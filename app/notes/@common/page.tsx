import Link from 'next/link';
import { getAvailableCommonYears } from '@/app/actions/note-actions';

export default async function CommonNotes() {
  const years = await getAvailableCommonYears();
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
