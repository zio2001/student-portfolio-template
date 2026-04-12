import { siteContent } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function CareerSection() {
  const { career } = siteContent;

  return (
    <section id="career" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Career</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {career.stats.map((stat, idx) => (
          <Reveal key={stat.label} delay={idx * 0.06}>
            <article className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold tracking-tight text-fuchsia-700">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-zinc-900">경력 리스트</h3>
            <ol className="mt-6 space-y-5">
              {career.timeline.map((item) => (
                <li key={item.title} className="border-l-2 border-fuchsia-200 pl-4">
                  <p className="text-sm font-semibold text-fuchsia-700">{item.period}</p>
                  <p className="mt-1 text-lg font-semibold text-zinc-900">{item.title}</p>
                  <p className="mt-1 text-zinc-600">{item.description}</p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-zinc-900">수상 · 활동</h3>
            <ul className="mt-6 space-y-3 text-zinc-600">
              {career.awards.map((item) => (
                <li key={item} className="rounded-xl bg-zinc-50 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
