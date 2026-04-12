import { siteContent } from "@/data/siteContent";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-zinc-200 py-16 md:py-24">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">Projects</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">
          실무 경험 전 단계에서도 감각과 방향성을 보여줄 수 있도록 학습형 프로젝트를 실제 포트폴리오
          형식으로 정리했습니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {siteContent.projects.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-soft transition hover:-translate-y-1"
          >
            <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-sky-50 to-zinc-200">
              <div className="absolute inset-0 bg-grain bg-[length:10px_10px]" />
              <span className="relative text-xs font-semibold tracking-[0.22em] text-zinc-500">
                PROJECT {index + 1} IMAGE
              </span>
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
              <p className="leading-relaxed text-zinc-700">{project.description}</p>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-zinc-500">디자인 포인트</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">{project.designPoint}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
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
