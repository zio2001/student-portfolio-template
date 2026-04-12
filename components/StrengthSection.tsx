import { siteContent } from "@/data/siteContent";

export default function StrengthSection() {
  return (
    <section id="strength" className="scroll-mt-24 border-b border-zinc-200 py-16 md:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">My Strengths</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteContent.strengths.map((strength, index) => (
          <article key={strength.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-medium tracking-[0.18em] text-zinc-500">0{index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold text-zinc-900">{strength.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-700">{strength.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
