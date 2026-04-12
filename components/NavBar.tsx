import { siteContent } from "@/data/siteContent";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300 bg-[#efefef]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 text-sm md:px-6">
        <ul className="flex items-center gap-5 text-zinc-700">
          {siteContent.nav.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition hover:text-zinc-950 ${
                  index === 0 ? "font-medium text-fuchsia-600" : "text-zinc-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          {siteContent.hero.name}
        </a>

        <ul className="flex items-center gap-3 text-sm text-zinc-700">
          {siteContent.socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-zinc-950">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
