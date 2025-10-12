export default function RoutesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="p-[8px] w-full h-[calc(100%_-_64px)]">
      <div className="w-full h-full">{children}</div>
    </main>
  );
}
