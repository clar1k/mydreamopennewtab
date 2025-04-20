import { LinkGrid } from "@/components/link-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background">
      <div className="w-64 p-4 border-r border-border flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold text-foreground">Quick Links</h1>
          <ThemeToggle />
        </div>

        <LinkGrid />
        <footer className="mt-auto pt-4 text-xs text-muted-foreground">
          <p>Custom New Tab Page</p>
        </footer>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl px-4">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
