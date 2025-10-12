'use server';

import { getCommonNotesCollection, getConfidentialNotesCollection } from './mongodb';

import { ManageState } from './manage-state';
import { ObjectId } from 'mongodb';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export async function addCommonNoteAction(prevState: ManageState, formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth');
  }

  const noteId = formData.get('noteId') as string;
  const text = formData.get('text') as string;
  const description = formData.get('description') as string;
  const tags = formData.getAll('tags') as string[];

  if (text == null || text.trim() === '') {
    return { success: false, error: 'Text required' };
  }

  if (description == null || description.trim() === '') {
    return { success: false, error: 'Description required' };
  }

  const note = {
    text: text,
    description: description,
    tags,
    timestamp: new Date().toISOString(),
    year: new Date().getFullYear(),
  };

  try {
    const notesCollection = await getCommonNotesCollection();

    if (noteId == null || noteId === '') {
      notesCollection.insertOne(note);
    } else {
      const result = await notesCollection.updateOne({ _id: new ObjectId(noteId) }, { $set: note });

      if (result.matchedCount === 0) {
        return { success: false, error: 'Note not found' };
      }
    }
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : 'Something wrong!' };
  }

  redirect(`/notes/${new Date().getFullYear()}`);

  return { success: true, message: 'Note added successful!' };
}

export async function addConfidentialNoteAction(prevState: ManageState, formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth');
  }

  const noteId = formData.get('noteId') as string;
  const login = formData.get('login') as string;
  const password = formData.get('password') as string;
  const description = formData.get('description') as string;
  const tags = formData.getAll('tags') as string[];

  if (login == null || login.trim() === '') {
    return { success: false, error: 'Login required' };
  }

  if (password == null || password.trim() === '') {
    return { success: false, error: 'Password required' };
  }

  if (description == null || description.trim() === '') {
    return { success: false, error: 'Description required' };
  }

  const note = {
    login: login,
    password: password,
    description: description,
    tags,
    timestamp: new Date().toISOString(),
    year: new Date().getFullYear(),
  };

  try {
    const notesCollection = await getConfidentialNotesCollection();

    if (noteId == null || noteId === '') {
      notesCollection.insertOne(note);
    } else {
      const result = await notesCollection.updateOne({ _id: new ObjectId(noteId) }, { $set: note });

      if (result.matchedCount === 0) {
        return { success: false, error: 'Note not found' };
      }
    }
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : 'Something wrong!' };
  }

  redirect(`/notes/${new Date().getFullYear()}`);

  return { success: true, message: 'Note added successful!' };
}
