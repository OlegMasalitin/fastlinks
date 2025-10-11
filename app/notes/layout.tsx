import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ReactNode } from 'react';

export default function Notes({
  common,
  confidential,
}: Readonly<{ common: ReactNode; confidential: ReactNode; children: ReactNode }>) {
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
          </TabsContent>
          <TabsContent value="confidential">
            <section>{confidential}</section>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
