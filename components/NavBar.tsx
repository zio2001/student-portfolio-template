import { siteContent } from "@/data/siteContent";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-zinc-900">
          MINJI STUDIO
        </a>

        <ul className="hidden items-center gap-5 text-sm text-zinc-600 md:flex">
          {siteContent.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white hover:text-zinc-950">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
