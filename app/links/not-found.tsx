'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { AlertCircleIcon } from 'lucide-react';

export default function LinkNotFoundError() {
  return (
    <div className="flex flex-col w-full justify-center">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>An error occurred!</AlertTitle>
        <AlertDescription>
          <p>{'The resource you were looking for was not found.'}</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
