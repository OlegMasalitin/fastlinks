'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormEvent, useRef, useState } from 'react';

import { signIn } from 'next-auth/react';
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';

async function createUser(email: string, password: string) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

export default function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  function switchHandler() {
    setIsLogin((state) => !state);
  }

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError('');

    const email = emailRef.current?.value;
    const pwd = pwdRef.current?.value;

    if (!email || !pwd) {
      return;
    }

    if (isLogin) {
      const result = await signIn('credentials', { redirect: false, email: email, password: pwd });
      console.log(result);

      setLoading(false);

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        setError('');
        //startTransition(() => {
        //router.refresh();
        // router.push('/');
        ///});
        window.location.href = '/';
      }
    } else {
      try {
        const result = await createUser(email, pwd);
        console.log(result);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={submitHandler}>
            <div>
              <label htmlFor="email" className="block text-sm">
                Email:
              </label>
              <input
                ref={emailRef}
                type="text"
                required
                id="email"
                name="email"
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm">
                Password:
              </label>
              <input
                ref={pwdRef}
                type="password"
                required
                id="password"
                name="password"
                className="border p-2 w-full rounded"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {loading ? 'Logining ...' : isLogin ? 'Login' : 'Create Account'}
            </button>
            <button disabled={loading} type="button" className="ml-3" onClick={switchHandler}>
              {isLogin ? 'Create new account' : 'Try login'}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
