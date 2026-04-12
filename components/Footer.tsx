import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p>© 2026 {siteContent.hero.name}. All rights reserved.</p>
        <p>Designed as a beginner portfolio demo.</p>
      </div>
    </footer>
  );
}
