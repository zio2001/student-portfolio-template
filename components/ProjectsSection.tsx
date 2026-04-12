import { siteContent } from "@/data/siteContent";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="pb-20">
      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.projects.map((project) => (
          <article
            key={project.title}
            className={`grid min-h-[285px] overflow-hidden border border-zinc-300 bg-white ${
              project.wide ? "md:col-span-2 md:grid-cols-[1.4fr_1fr]" : "grid-cols-2"
            }`}
          >
            <div className={`p-7 ${project.align === "right" ? "order-2" : "order-1"}`}>
              <p className="text-4xl font-bold text-zinc-900">{project.title}</p>
              <p className="mt-2 text-2xl font-semibold text-fuchsia-700">{project.subtitle}</p>
              <p className="mt-5 text-base leading-relaxed text-zinc-700">{project.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-400 px-2 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-zinc-500">{project.date}</p>
            </div>

            <div
              className={`relative min-h-[220px] ${project.align === "right" ? "order-1" : "order-2"}`}
              style={{ backgroundColor: project.accent }}
            >
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-white/10 to-black/10">
                <span className="rounded-full border border-white/70 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-white">
                  PROJECT PREVIEW
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
