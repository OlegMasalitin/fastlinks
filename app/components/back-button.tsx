'use client'; // required if using Next.js App Router

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="px-4 py-2 bg-gray-200 rounded">
      Back
    </button>
  );
}
