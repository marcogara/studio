"use client";

export function Quote({ text, author }: { text: string; author: string }) {
  return (
    <section className="my-16 text-center fade-in">
      <div className="max-w-3xl mx-auto">
        <blockquote className="p-6 italic border-l-4 border-primary bg-card">
          <p className="mb-4 text-lg text-foreground/80">"{text}"</p>
          <footer className="text-right text-muted-foreground">- {author}</footer>
        </blockquote>
      </div>
    </section>
  );
}
