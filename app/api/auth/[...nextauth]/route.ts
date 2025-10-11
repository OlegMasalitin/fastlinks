import NextAuth, { User } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { client } from '@/app/actions/mongodb';
import { verifyPassword } from '@/lib/auth';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const db = client.db('fastlinks');
        const users = db.collection('users');
        const user = await users.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error('User not found!');
        }

        const isValid = await verifyPassword(credentials?.password || '', user.password);
        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return { id: user._id.toString(), email: user.email };
      },
    }),
  ],
  session: { strategy: 'jwt' as const },
  pages: { signIn: '/auth' },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) token.user = user;
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: JWT }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
