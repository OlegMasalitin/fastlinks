import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-row flex-wrap p-5 w-full items-center justify-center">
        <Link className="" href={`/links/add`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            Add Link
          </div>
        </Link>
        <Link className="" href={`/links`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            Links
          </div>
        </Link>
        <Link className="" href={`/links/new`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            New Links
          </div>
        </Link>
        <Link className="" href={`/links/hidden`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            Hidden Links
          </div>
        </Link>
        <Link className="" href={`/links/archived`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            Archived Links
          </div>
        </Link>
        <Link className="" href={`/notes/manage/add`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            Add Note
          </div>
        </Link>
        <Link className="" href={`/notes`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            Notes
          </div>
        </Link>
        <Link className="" href={`/about`}>
          <div className="orbitron w-44 p-5 mb-5 mr-5 rounded-sm  border border-gray-500 flex flex-row flex-nowrap items-center justify-center text-sky-700">
            About
          </div>
        </Link>
      </main>
      <footer className=""></footer>
    </div>
  );
}
