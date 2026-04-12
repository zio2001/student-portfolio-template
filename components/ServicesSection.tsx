import { siteContent } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Services</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {siteContent.services.map((service, idx) => (
          <Reveal key={service.title} delay={idx * 0.08}>
            <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:border-fuchsia-200 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-600">Service {idx + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-600">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
