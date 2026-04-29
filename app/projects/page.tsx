import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteHeader } from "@/components/ui/site-header";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
};

const sectionTitleClass =
  "text-xs uppercase tracking-[0.22em] text-white/68";

const listClass =
  "mt-3 grid gap-2 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-7";

export default function ProjectsPage() {
  return (
    <main className="grain pb-20">
      <SiteHeader />

      <PageIntro
        eyebrow="Projects"
        title="Production-focused Flutter projects with real workflow and integration depth."
        description="These projects show the kind of application work I want to keep doing: structured frontend architecture, integration-heavy user flows, and product features designed for real operations instead of isolated demos."
      />

      <section className="section-shell grid gap-6">
        {projects.map((project, index) => {
          const hasBackend =
            !!project.backendDetails &&
            !!project.backendArchitecture?.length &&
            !!project.backendCapabilities?.length &&
            !!project.backendStack?.length;

          return (
            <article
              key={project.title}
              className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10"
            >
              <div className="flex flex-col gap-4 border-b border-white/8 pb-6 sm:gap-5 sm:pb-7">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div>
                    <p className="eyebrow">0{index + 1}</p>
                    <h2 className="display-title mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">
                      {project.title}
                    </h2>
                  </div>
                  {project.stack.length > 0 ? (
                    <div className="flex flex-wrap gap-2 xl:max-w-[48%] xl:justify-end">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <p className={sectionTitleClass}>Project Type</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base md:text-lg md:leading-8">
                      {project.projectType}
                    </p>
                  </div>
                  <div>
                    <p className={sectionTitleClass}>Role</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base md:text-lg md:leading-8">
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 pt-6 sm:pt-7">
                <section>
                  <p className={sectionTitleClass}>Overview</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base md:text-lg md:leading-8">
                    {project.overview}
                  </p>
                </section>

                <section>
                  <p className={sectionTitleClass}>What The Product Does</p>
                  <ul className={listClass}>
                    {project.productCapabilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <div className={`grid gap-6 ${hasBackend ? "xl:grid-cols-2" : ""}`}>
                  <section className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-5 sm:rounded-[1.4rem] sm:p-6">
                    <p className={sectionTitleClass}>Frontend</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base md:leading-8">
                      {project.frontendDetails}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/58">
                      Architecture
                    </p>
                    <ul className={listClass}>
                      {project.frontendArchitecture.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/58">
                      Features
                    </p>
                    <ul className={listClass}>
                      {project.frontendFeatures.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/58">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.frontendStack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>

                  {hasBackend ? (
                    <section className="rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-5 sm:rounded-[1.4rem] sm:p-6">
                      <p className={sectionTitleClass}>Backend</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base md:leading-8">
                        {project.backendDetails}
                      </p>

                      <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/58">
                        Architecture
                      </p>
                      <ul className={listClass}>
                        {project.backendArchitecture?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/58">
                        Capabilities
                      </p>
                      <ul className={listClass}>
                        {project.backendCapabilities?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/58">Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.backendStack?.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/72"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>
                  ) : null}
                </div>

                <section>
                  <p className={sectionTitleClass}>Security / Reliability</p>
                  <ul className={listClass}>
                    {project.securityReliability.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <p className={sectionTitleClass}>Notes</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base md:leading-8">
                    {project.notes}
                  </p>
                </section>

                {project.liveUrl ? (
                  <div className="pt-1">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Visit Live App
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
