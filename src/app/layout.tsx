import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils";
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A retro-themed portfolio website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
