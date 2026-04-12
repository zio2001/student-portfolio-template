import { visualKeywords } from "../data/siteContent";

export default function VisualKeywordsSection() {
  return (
    <section id="keywords" className="grid gap-6 border-b border-zinc-200 py-16 md:py-24">
      <h2 className="text-3xl font-semibold text-zinc-950 md:text-4xl">Visual Keywords</h2>
      <p className="max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
        작업의 톤을 잡을 때 자주 기준으로 삼는 키워드입니다.
      </p>
      <div className="flex flex-wrap gap-3">
        {visualKeywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-zinc-300 bg-zinc-50 px-5 py-2 text-sm text-zinc-800"
          >
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
}
