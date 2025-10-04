import AddLinkForm from '../components/link-form';
import { LinkItem } from '@/app/actions/link';
import { notFound } from 'next/navigation';

export default async function EditLink() {
  const link = {
    id: null,
    name: '',
    url: '',
    tags: [] as string[],
    visible: true,
    isNew: true,
    archived: false,
    state: 0,
  } as LinkItem;

  if (link == null) {
    notFound();
  }

  return (
    <div className="">
      <AddLinkForm link={link} isEdit={false} />
    </div>
  );
}
