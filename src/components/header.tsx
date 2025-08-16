import Link from 'next/link';
import { Bot, TerminalSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <TerminalSquare className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">RetroFolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/generate-description">
              <Bot className="mr-2 h-4 w-4" />
              AI Project Intro Generator
            </Link>
          </Button>
           <Button asChild variant="ghost" size="icon" className="sm:hidden">
            <Link href="/generate-description" aria-label="AI Project Intro Generator">
              <Bot className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
