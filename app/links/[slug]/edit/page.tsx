import AddLinkForm from '../../components/link-form';
import BackButton from '../../components/back-button';
import { loadLink } from '@/app/actions/link-actions';
import { notFound } from 'next/navigation';

interface EditLinkProps {
  params: Promise<{ slug: string }>;
}

export default async function EditLink({ params }: Readonly<EditLinkProps>) {
  const { slug } = await params;
  const link = await loadLink(slug);

  if (link == null) {
    notFound();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <AddLinkForm link={link} isEdit={true} />
    </div>
  );
}
