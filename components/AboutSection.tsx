import { siteContent } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">About</h2>
        <p className="mt-6 max-w-4xl text-xl font-medium leading-relaxed text-zinc-800">{about.heading}</p>
        <p className="mt-4 max-w-4xl leading-relaxed text-zinc-600">{about.body}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {about.values.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.08}>
            <article className="h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
