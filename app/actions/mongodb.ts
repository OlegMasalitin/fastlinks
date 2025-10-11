import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://massaoleg_db_user:6FwlJiDikU3Df3Fo@cluster0.wrw6e8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function getLinksCollection() {
  await client.connect();
  const db = client.db('fastlinks');
  return db.collection('links');
}
