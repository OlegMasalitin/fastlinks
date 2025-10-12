import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Link from 'next/link';
import { ReactNode } from 'react';

export default async function Notes({
  common,
  confidential,
}: Readonly<{
  common: ReactNode;
  confidential: ReactNode;
  children: ReactNode;
}>) {
  return (
    <main className="p-[8px] w-full h-[calc(100%_-_64px)]">
      <div className="w-full h-full">
        <Tabs defaultValue="common" className="w-full">
          <TabsList>
            <TabsTrigger value="common">Common</TabsTrigger>
            <TabsTrigger value="confidential">Confidential</TabsTrigger>
          </TabsList>
          <TabsContent value="common">
            <section>{common}</section>
            <Link className="fixed bottom-[20px] right-[20px]" href={`/notes/manage/common/add`}>
              <button className="px-4 py-2 bg-gray-200 rounded text-3xl">+</button>
            </Link>
          </TabsContent>
          <TabsContent value="confidential">
            <section>{confidential}</section>
            <Link className="fixed bottom-[20px] right-[20px]" href={`/notes/manage/confidential/add`}>
              <button className="px-4 py-2 bg-gray-200 rounded text-3xl">+</button>
            </Link>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
