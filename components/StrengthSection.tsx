import { strengths } from "../data/siteContent";

export default function StrengthSection() {
  return (
    <section className="grid gap-6 border-b border-zinc-200 py-16 md:py-24">
      <h2 className="text-3xl font-semibold text-zinc-950 md:text-4xl">Strength</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {strengths.map((strength) => (
          <article key={strength.title} className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold text-zinc-900">{strength.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">{strength.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
