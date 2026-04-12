import { projects } from "../data/siteContent";

export default function ProjectsSection() {
  return (
    <section id="projects" className="grid gap-8 border-b border-zinc-200 py-16 md:py-24">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-zinc-950 md:text-4xl">Projects</h2>
        <p className="max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
          아직 실무 프로젝트 경험은 없지만, 목적과 컨셉을 설정한 학습용 작업으로 시각적 사고 방식과
          디자인 방향성을 정리하고 있습니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 text-xs tracking-[0.2em] text-zinc-500">
              IMAGE PLACEHOLDER
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-700">{project.description}</p>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500">DESIGN POINT</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{project.designPoint}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
