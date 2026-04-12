import { siteContent } from "@/data/siteContent";

export default function HeroSection() {
  return (
    <section id="about" className="py-16 text-center md:py-20">
      <h1 className="text-5xl font-semibold tracking-tight text-fuchsia-700 md:text-6xl">{siteContent.hero.heading}</h1>
      <p className="mt-4 text-2xl text-zinc-700">{siteContent.hero.subtitle}</p>
    </section>
  );
}
