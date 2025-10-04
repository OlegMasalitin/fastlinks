import AddLinkForm from '../../components/link-form';
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
      <AddLinkForm link={link} isEdit={true} />
    </div>
  );
}
