'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { AlertCircleIcon } from 'lucide-react';

export default function LinkError({ error }: Readonly<{ error: Error }>) {
  return (
    <div className="flex flex-col w-full justify-center">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>An error occurred!</AlertTitle>
        <AlertDescription>
          <p>{error.message || 'Something went wrong!'}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
