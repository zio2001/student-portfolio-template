import { siteContent } from "@/data/siteContent";

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section id="home" className="scroll-mt-24 border-b border-zinc-200 pb-16 pt-8 md:pb-24 md:pt-16">
      <p className="inline-flex rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-zinc-500">
        DESIGNER PORTFOLIO
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-[1.45fr_1fr] md:items-end">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
            {hero.headingTop}
            <br />
            {hero.headingBottom}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">{hero.subtitle}</p>
          <p className="mt-6 max-w-2xl whitespace-pre-line leading-relaxed text-zinc-600">
            {hero.description.join("\n")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {hero.buttons.map((button, index) => (
              <a
                key={button.href}
                href={button.href}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? "bg-zinc-900 text-white hover:bg-zinc-700"
                    : "border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
          <p className="text-xs tracking-[0.18em] text-zinc-500">DESIGNER</p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900">{hero.name}</p>
          <div className="mt-6 space-y-3 text-sm text-zinc-600">
            <p>감각적인 비주얼과 명확한 정보 구조를 함께 고민합니다.</p>
            <p>브랜드와 콘텐츠가 자연스럽게 기억되는 장면을 만듭니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
