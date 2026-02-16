import { type ReactNode } from 'react';

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Built with{' '}
              <span className="text-accent">❤</span>{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'portfolio-app'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
