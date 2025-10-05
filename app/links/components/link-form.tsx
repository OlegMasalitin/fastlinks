'use client';

import { useActionState, useState } from 'react';

import { AddLinkState } from '@/app/actions/add-link-state';
import { LinkItem } from '@/app/actions/link';
import { addLinkAction } from '@/app/actions/link-add-action';

export default function AddLinkForm({ link, isEdit }: Readonly<{ link: LinkItem; isEdit: boolean }>) {
  const [state, action, isPending] = useActionState<AddLinkState, FormData>(addLinkAction, {
    success: false,
    error: null,
    message: null,
  });
  const [errors, setErrors] = useState<{ name?: string; url?: string; tags?: string }>({});

  function handleClientValidation(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const url = (form.elements.namedItem('url') as HTMLInputElement).value;

    const newErrors: typeof errors = {};

    if (name == null || name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (url == null || url.trim() === '') {
      newErrors.url = 'Url is required';
    }

    const tagsEl = form.elements.namedItem('tags') as HTMLSelectElement;
    const tagsValues = Array.from(tagsEl.selectedOptions).map((o) => o.value);
    if (tagsValues.length === 0) newErrors.tags = 'Select at least one tag';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  }

  return (
    <div className="max-w-md mx-auto mt-1">
      <h1 className="text-xl font-bold mb-4">{isEdit ? 'Edit link' : 'Add link'}</h1>

      <form action={action} onSubmit={handleClientValidation} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm">
            Name:
          </label>
          <input type="text" id="name" name="name" defaultValue={link.name} className="border p-2 w-full rounded" />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="url" className="block text-sm">
            URL:
          </label>
          <input type="text" id="url" name="url" defaultValue={link.url} className="border p-2 w-full rounded" />
          {errors.url && <p className="text-red-600 text-sm">{errors.url}</p>}
        </div>

        <div className="flex flex-row flex-nowrap">
          <div className="w-1/3">
            <label htmlFor="visible" className="block text-sm">
              Visible:
            </label>
            <input type="checkbox" id="visible" name="visible" defaultChecked={link.visible} />
          </div>

          <div className="w-1/3">
            <label htmlFor="isNew" className="block text-sm">
              New:
            </label>
            <input type="checkbox" id="isNew" name="isNew" defaultChecked={link.isNew} />
          </div>

          <div className="w-1/3">
            <label htmlFor="archived" className="block text-sm">
              Archived:
            </label>
            <input type="checkbox" id="archived" name="archived" defaultChecked={link.archived} />
          </div>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm mb-1">
            Tags:
          </label>
          <select id="tags" name="tags" multiple defaultValue={link.tags} className="border p-2 w-full rounded h-96">
            <option value="AndroidCompose">Android Compose</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Angular">Angular</option>
            <option value="Javascript">Javascript</option>
            <option value="Typescript">Typescript</option>
            <option value="Programming">Programming</option>
            <option value="RxJs">RxJs</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Purchases">Purchases</option>
            <option value="D3">D3</option>
            <option value="React">React</option>
            <option value="AzureMap">AzureMap</option>
            <option value="GIT">GIT</option>
            <option value="Print">Print</option>
            <option value="Other">Other</option>
            <option value="Work">Work</option>
          </select>
          {errors.tags && <p className="text-red-600 text-sm">{errors.tags}</p>}
        </div>

        <input type="hidden" id="linkId" name="linkId" defaultValue={link.id || ''} />
        <input id="state" name="state" type="number" defaultValue={link.state} className="hidden" />

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </button>

        {state.error && <p className="text-red-600">{state.error}</p>}
        {state.success && <p className="text-green-600">{state.message}</p>}
      </form>
    </div>
  );
}
