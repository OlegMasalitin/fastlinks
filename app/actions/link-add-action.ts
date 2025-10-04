'use server';

import { AddLinkState } from './add-link-state';
import { ObjectId } from 'mongodb';
import { client } from './mongodb';
import { redirect } from 'next/navigation';

export async function addLinkAction(prevState: AddLinkState, formData: FormData) {
  const linkId = formData.get('linkId') as string;
  const name = formData.get('name') as string;
  const url = formData.get('url') as string;
  const visible = formData.get('visible') === 'on';
  const isNew = formData.get('isNew') === 'on';
  const archived = formData.get('archived') === 'on';
  const state = formData.get('state');
  const tags = formData.getAll('tags') as string[];

  if (name == null || name.trim() === '') {
    return { success: false, error: 'Name required' };
  }

  if (url == null || url.trim() === '') {
    return { success: false, error: 'Url required' };
  }

  const link = {
    id: linkId || null,
    name,
    url,
    tags,
    visible,
    isNew,
    archived,
    state,
  };

  await client.connect();
  const db = await client.db('fastlinks');
  const linksCollection = db.collection('links');

  if (link.id == null) {
    linksCollection.insertOne(link);
  } else {
    const result = await linksCollection.updateOne({ _id: new ObjectId(link.id) }, { $set: link });

    //if (result.matchedCount === 0) {
    //  return res.status(404).json({ message: 'Document not found' });
    //}
  }

  console.log(link);
  redirect('/links');

  return { success: true, message: 'Link added successful!' };
}
