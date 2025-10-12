import { NextRequest, NextResponse } from 'next/server';

import { ObjectId } from 'mongodb';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { client } from '@/app/actions/mongodb';
import { getServerSession } from 'next-auth/next';

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = client.db('fastlinks');
    const notesCollection = db.collection('commonnotes');
    const result = await notesCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
