import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Link from 'next/link';
import { ReactNode } from 'react';
import ScrollToBottomButton from '@/app/components/scroll-to-bottom-button';

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
            <Link className="fixed bottom-[50px] right-[20px]" href={`/notes/manage/common/add`}>
              <button className="px-3 py-1 bg-sky-300 rounded text-3xl opacity-70 flex justify-center items-center">
                +
              </button>
            </Link>
            <div className="fixed bottom-[100px] right-[20px]">
              <ScrollToBottomButton />
            </div>
          </TabsContent>
          <TabsContent value="confidential">
            <section>{confidential}</section>
            <Link className="fixed bottom-[50px] right-[20px]" href={`/notes/manage/confidential/add`}>
              <button className="px-3 py-1 bg-sky-300 rounded text-3xl opacity-75 flex justify-center items-center">
                +
              </button>
            </Link>
            <div className="fixed bottom-[100px] right-[20px]">
              <ScrollToBottomButton />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
