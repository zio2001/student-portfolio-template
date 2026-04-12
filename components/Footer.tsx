import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
      <p>
        © {new Date().getFullYear()} {siteContent.site.name}. All rights reserved.
      </p>
    </footer>
  );
}
