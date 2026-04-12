import { profile } from "../data/siteContent";

export default function HomeSection() {
  return (
    <section id="home" className="grid gap-8 border-b border-zinc-200 py-16 md:py-24">
      <p className="text-sm font-medium tracking-[0.24em] text-zinc-500">DESIGN PORTFOLIO</p>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight text-zinc-950 md:text-6xl">
          {profile.name}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
          {profile.mainCopy}
        </p>
      </div>
      <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.18em] text-zinc-500">한 줄 소개</p>
          <p className="mt-2 text-base text-zinc-800">{profile.oneLineIntro}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-zinc-500">디자인 분야</p>
          <p className="mt-2 text-base text-zinc-800">{profile.designFields.join(" · ")}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.18em] text-zinc-500">추구하는 스타일</p>
          <p className="mt-2 text-base text-zinc-800">{profile.style}</p>
        </div>
      </div>
    </section>
  );
}
