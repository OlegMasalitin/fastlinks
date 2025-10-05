import AddLinkForm from '../components/link-form';
import BackButton from '../components/back-button';
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
      <div className="flex flex-row justify-end">
        <BackButton />
      </div>
      <AddLinkForm link={link} isEdit={false} />
    </div>
  );
}
