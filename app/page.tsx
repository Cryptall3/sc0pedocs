import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          sc0pe Documentation
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Welcome to the official documentation for sc0pe, the AI-powered Web3 analytics platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/introduction"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get started
          </Link>
          <a href="https://github.com/frennadev/Scope" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6">
            View on GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
} 