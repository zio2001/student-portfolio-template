"use client";

import { siteContent } from "@/data/siteContent";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#efefef]/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
          {siteContent.site.name}
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-300 p-2 text-zinc-700 md:hidden"
          aria-label="메뉴 열기"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-7 text-sm font-medium text-zinc-700 md:flex">
          {siteContent.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-fuchsia-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-[#efefef] px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-700">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-1" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
