import { siteContent } from "@/data/siteContent";

export default function VisualKeywordsSection() {
  return (
    <section id="visual-keywords" className="scroll-mt-24 border-b border-zinc-200 py-16 md:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">Visual Keywords</h2>
      <p className="mt-4 text-zinc-600">작업의 분위기와 방향을 잡을 때 기준으로 삼는 키워드입니다.</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {siteContent.keywords.map((keyword) => (
          <div
            key={keyword}
            className="group rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-900"
          >
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-800 group-hover:text-zinc-950">
              {keyword}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
