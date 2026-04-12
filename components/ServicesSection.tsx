import { siteContent } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Services</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex min-h-[220px] w-full items-center justify-center rounded-3xl bg-[#ffed00] p-4">
          <div className="w-full max-w-[170px]">
            <article className="flex items-start gap-3 rounded-xl bg-black p-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffed00]">
                <span className="text-2xl font-bold text-black">P</span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs font-semibold leading-4 text-white">취업멘털 서비스</p>
                <p className="text-sm font-bold leading-5 text-white">카카오플러스 친구 삭제하고 취업 소식 받자</p>
              </div>
            </article>
          </div>
        </div>
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
