import type { Metadata } from "next";
import Link from "next/link";
import { HoverRevealCard } from "@/components/ui/hover-reveal-card";
import { SiteHeader } from "@/components/ui/site-header";
import { experience } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <main className="grain pb-20">
      <SiteHeader />

      <section className="section-shell py-8 md:py-14">
        <div className="glass-panel rounded-[1.8rem] p-6 sm:p-7 md:rounded-[2.3rem] md:p-10 lg:p-12">
          <p className="eyebrow">Experience</p>
          <div className="mt-5 max-w-4xl space-y-3 md:mt-6 md:space-y-4">
            <h1 className="display-title text-3xl leading-[0.95] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-[4.5rem]">
              KRUNAL SAKHARELIYA
            </h1>
            <p className="display-title text-xl leading-tight tracking-[-0.03em] text-[var(--foreground)]/92 sm:text-2xl md:text-3xl lg:text-[2.65rem]">
              FLUTTER DEVELOPER
            </p>
            <p className="display-title text-lg leading-tight tracking-[-0.02em] text-[var(--muted)] sm:text-xl md:text-2xl lg:text-[2.15rem]">
              AI-ASSISTED DEVELOPEMENT
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-7 md:text-lg md:leading-8">
            My experience spans internship progression, professional Flutter delivery at Ongoing
            Team, and AI-assisted development workflows that help me build websites and
            applications with stronger speed, structure, and execution quality.
          </p>

          <Link href="/contact" className="mt-8 inline-flex text-sm text-[var(--muted)]">
            Discuss opportunities
          </Link>
        </div>
      </section>

      <section className="section-shell py-8 md:py-14">
        <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
          <p className="eyebrow">Timeline</p>
          <div className="mt-5 grid gap-4 md:mt-6 md:gap-5">
            {experience.map((item) => (
              <HoverRevealCard
                key={`${item.period}-${item.title}`}
                hoverLabel={item.title}
                className="rounded-[1.25rem] p-4 sm:rounded-[1.5rem] sm:p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{item.period}</p>
                <h2 className="display-title mt-3 text-xl sm:text-2xl">{item.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/70">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">
                  {item.summary}
                </p>
              </HoverRevealCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
