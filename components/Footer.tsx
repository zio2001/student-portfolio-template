import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-300 py-12 text-center text-zinc-500">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <ul className="mb-5 flex items-center justify-center gap-5 text-sm text-zinc-700">
          {siteContent.socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <p className="text-xs">All content on this site is the creation and property of {siteContent.hero.name}.</p>
      </div>
    </footer>
  );
}
