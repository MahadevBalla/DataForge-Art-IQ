export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-primary-100 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {children}
      </div>
    </section>
  );
}