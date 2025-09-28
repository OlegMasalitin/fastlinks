import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Links - links',
  description: 'Fast Links app allow to create a links, comments and notes',
};

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-[8px] w-full h-[calc(100%_-_64px)]">
      <div className="border border-gray-500 p-[8px] w-full h-full">{children}</div>
    </div>
  );
}
