import { profile } from "../data/siteContent";

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-6 border-b border-zinc-200 py-16 md:py-24">
      <h2 className="text-3xl font-semibold text-zinc-950 md:text-4xl">About</h2>
      <p className="max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">{profile.bio}</p>
      <p className="max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">{profile.currentFocus}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">배우는 도구</h3>
          <ul className="mt-3 space-y-2 text-zinc-700">
            {profile.tools.map((tool) => (
              <li key={tool}>• {tool}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-zinc-200 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">앞으로 만들고 싶은 작업</h3>
          <p className="mt-3 leading-relaxed text-zinc-700">{profile.futureGoal}</p>
        </article>
      </div>

      <p className="rounded-2xl bg-zinc-900 px-6 py-5 text-sm leading-relaxed text-zinc-100 md:text-base">
        {profile.learningMindset}
      </p>
    </section>
  );
}
