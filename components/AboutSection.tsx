import { siteContent } from "@/data/siteContent";

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="about" className="scroll-mt-24 border-b border-zinc-200 py-16 md:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">{about.title}</h2>
      <p className="mt-6 max-w-4xl whitespace-pre-line leading-relaxed text-zinc-700">
        {about.description.join("\n")}
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {about.details.map((detail) => (
          <article key={detail.label} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-medium tracking-[0.15em] text-zinc-500">{detail.label}</p>
            <p className="mt-2 text-base text-zinc-800">{detail.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
