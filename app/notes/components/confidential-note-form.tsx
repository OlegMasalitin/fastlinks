'use client';

import { useActionState, useEffect, useState } from 'react';

import { ConfidentialNote } from '@/app/actions/allnote';
import { ManageState } from '@/app/actions/manage-state';
import { addConfidentialNoteAction } from '@/app/actions/note-add-action';
import { useRouter } from 'next/navigation';

export default function AddConfidentialNoteForm({
  note,
  isEdit,
}: Readonly<{ note: ConfidentialNote; isEdit: boolean }>) {
  const router = useRouter();
  const [state, action, isPending] = useActionState<ManageState, FormData>(addConfidentialNoteAction, {
    success: false,
    error: null,
    message: null,
  });
  const [errors, setErrors] = useState<{ login?: string; description?: string; password?: string; tags?: string }>({});

  /*useEffect(() => {
    if (state.success) {
      router.back();
    }
  }, [state.success, router]);*/

  function handleClientValidation(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const login = (form.elements.namedItem('login') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLInputElement).value;

    const newErrors: typeof errors = {};

    if (login == null || login.trim() === '') {
      newErrors.login = 'Login is required';
    }

    if (password == null || password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    if (description == null || description.trim() === '') {
      newErrors.description = 'Description is required';
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
      <h1 className="text-xl font-bold mb-4">{isEdit ? 'Edit confidential note' : 'Add confidential note'}</h1>

      <form action={action} onSubmit={handleClientValidation} className="space-y-4">
        <div>
          <label htmlFor="login" className="block text-sm">
            Login:
          </label>
          <input type="text" id="login" name="login" defaultValue={note.login} className="border p-2 w-full rounded" />
          {errors.login && <p className="text-red-600 text-sm">{errors.login}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm">
            Password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={note.password}
            className="border p-2 w-full rounded"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={note.description}
            className="border p-2 w-full rounded"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm mb-1">
            Tags:
          </label>
          <select id="tags" name="tags" multiple defaultValue={note.tags} className="border p-2 w-full rounded h-96">
            <option value="AndroidCompose">Android Compose</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Angular">Angular</option>
            <option value="Javascript">Javascript</option>
            <option value="Typescript">Typescript</option>
            <option value="Programming">Programming</option>
            <option value="Css">Css</option>
            <option value="Scss">Scss</option>
            <option value="RxJs">RxJs</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Purchases">Purchases</option>
            <option value="Html">Html</option>
            <option value="Web">Web</option>
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

        <input type="hidden" id="noteId" name="noteId" defaultValue={note.id || ''} />

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
