export default function BlogDetails({ params }: Readonly<{ params: { slug: string } }>) {
  return (
    <div className="">
      <main className="">Blog - {params.slug}</main>
    </div>
  );
}
