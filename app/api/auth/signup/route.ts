import { NextResponse } from 'next/server';
import { client } from '@/app/actions/mongodb';
import { hashPassword } from '@/lib/auth';

type RequestBody = {
  email: string;
  password: string;
};

type ResponseData = {
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json<ResponseData>({ message: 'Invalid login or password!' }, { status: 422 });
    }

    const hashedPassword = await hashPassword(password);
    const db = client.db('fastlinks');
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json<ResponseData>({ message: 'User exist already!' }, { status: 422 });
    }

    await usersCollection.insertOne({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json<ResponseData>({ message: 'Created user' }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something wrong on user creation!';
    return NextResponse.json<ResponseData>({ message }, { status: 400 });
  } finally {
    // client.close();
  }
}
