import { CommonNote, ConfidentialNote } from './allnote';
import { getCommonNotesCollection, getConfidentialNotesCollection } from './mongodb';

import { ObjectId } from 'mongodb';

export async function getAvailableCommonYears() {
  return [2022, 2023, 2024, 2025];
}

export async function getAvailableConfidentialYears() {
  return [2024, 2025];
}

export async function loadYearCommonNotes(year: number, tags: string[] = []): Promise<CommonNote[]> {
  try {
    const filter = { year };

    const notesCollection = await getCommonNotesCollection();
    const notes = await notesCollection.find(filter).toArray();

    const filteredNotes =
      tags.length === 0
        ? notes
        : notes.filter((note) => {
            return tags.some((tag) => (note.tags || []).some((t: string) => t.toLowerCase() === tag.toLowerCase()));
          });

    return filteredNotes.map((note) => {
      return {
        id: note._id.toString(),
        text: note.text,
        description: note.description,
        tags: note.tags,
        timestamp: note.timestamp,
        year: note.year,
      };
    });
  } finally {
    //await client.close();
  }
}

export async function loadYearConfidentialNotes(year: number, tags: string[] = []): Promise<ConfidentialNote[]> {
  try {
    const filter = { year };

    const notesCollection = await getConfidentialNotesCollection();
    const notes = await notesCollection.find(filter).toArray();

    const filteredNotes =
      tags.length === 0
        ? notes
        : notes.filter((note) => {
            return tags.some((tag) => (note.tags || []).some((t: string) => t.toLowerCase() === tag.toLowerCase()));
          });

    return filteredNotes.map((note) => {
      return {
        id: note._id.toString(),
        login: note.login,
        password: note.password,
        description: note.description,
        tags: note.tags,
        timestamp: note.timestamp,
        year: note.year,
      };
    });
  } finally {
    //await client.close();
  }
}

export async function loadCommonNote(id: string): Promise<CommonNote | null> {
  try {
    const notesCollection = await getCommonNotesCollection();
    const note = await notesCollection.findOne({ _id: new ObjectId(id) });

    return note == null
      ? null
      : {
          id: note._id.toString(),
          text: note.text,
          description: note.description,
          tags: note.tags,
          timestamp: note.timestamp,
          year: note.year,
        };
  } catch (_) {
    return null;
  } finally {
    //await client.close();
  }
}

export async function loadConfidentialNote(id: string): Promise<ConfidentialNote | null> {
  try {
    const notesCollection = await getConfidentialNotesCollection();
    const note = await notesCollection.findOne({ _id: new ObjectId(id) });

    return note == null
      ? null
      : {
          id: note._id.toString(),
          login: note.login,
          password: note.password,
          description: note.description,
          tags: note.tags,
          timestamp: note.timestamp,
          year: note.year,
        };
  } catch (_) {
    return null;
  } finally {
    //await client.close();
  }
}
