import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { client } from '@/app/actions/mongodb';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const db = await client.db('fastlinks');
    const linksCollection = db.collection('links');
    const result = await linksCollection.deleteOne({
      _id: new ObjectId(params.id),
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
