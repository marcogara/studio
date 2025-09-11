
"use client";

export function Quote({ text, author, title }: { text: string; author: string, title?: string }) {
  return (
    <section className="my-16 text-center fade-in">
      <div className="max-w-3xl mx-auto">
        <blockquote className="p-6 italic border-l-4 border-primary bg-card">
          <p className="mb-4 text-lg text-foreground/80">"{text}"</p>
          <footer className="text-right not-italic">
            <p className="text-muted-foreground">- {author}</p>
            {title && <p className="text-muted-foreground/80 text-sm">{title}</p>}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
