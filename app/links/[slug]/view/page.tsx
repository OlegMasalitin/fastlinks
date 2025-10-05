import BackButton from '../../components/back-button';
import { loadLink } from '@/app/actions/link-actions';
import { notFound } from 'next/navigation';

interface ViewLinkProps {
  params: Promise<{ slug: string }>;
}

export default async function ViewLink({ params }: Readonly<ViewLinkProps>) {
  const { slug } = await params;
  const link = await loadLink(slug);

  if (link == null) {
    notFound();
  }

  const timestamp = link.timestamp ? new Date(link.timestamp).toString() : '';

  return (
    <>
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <div className="max-w-md mx-auto mt-10">
        <div className="font-bold">Name: </div>
        <div className="mb-3 ml-5 text-sky-500">{link.name}</div>
        <div className="font-bold">Url: </div>
        <div className="mb-3 ml-5 text-sky-500">{link.url}</div>
        <div className="font-bold">Visible: </div>
        <div className="mb-3 ml-5 text-sky-500">{link.visible.toString()}</div>
        <div className="font-bold">Is new: </div>
        <div className="mb-3 ml-5 text-sky-500">{link.isNew.toString()}</div>
        <div className="font-bold">Archived: </div>
        <div className="mb-3 ml-5 text-sky-500">{link.archived.toString()}</div>
        <div className="font-bold">Tags: </div>
        <div className="mb-8 ml-5 text-sky-500">{link.tags.join(', ')}</div>
        <div className="font-bold">Timestamp: </div>
        <div className="mb-8 ml-5 text-sky-500">{timestamp}</div>
        <div>
          <a href={link.url} target="_blank" className="underline">
            Navigate
          </a>
        </div>
      </div>
    </>
  );
}
