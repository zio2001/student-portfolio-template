import { siteContent } from "@/data/siteContent";
import Image from "next/image";
import Reveal from "./Reveal";

export default function HeroSection() {
  const { hero, site } = siteContent;

  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-fuchsia-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 top-16 h-52 w-52 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">{site.role}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-fuchsia-700 md:text-6xl">{hero.title}</h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-700 md:text-xl">{hero.subtitle}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-zinc-600">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.ctas.map((button) => (
              <a
                key={button.label}
                href={button.href}
                download={button.download}
                target={button.download ? undefined : "_blank"}
                rel={button.download ? undefined : "noreferrer"}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  button.primary
                    ? "bg-fuchsia-700 text-white hover:bg-fuchsia-800"
                    : "border border-zinc-300 bg-white/85 text-zinc-800 hover:border-fuchsia-400 hover:text-fuchsia-700"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
            <Image
              src={hero.image}
              alt={`${site.owner} 프로필`}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/85 to-transparent p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-200">Brand Designer</p>
              <p className="mt-1 text-2xl font-semibold">{site.owner}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
