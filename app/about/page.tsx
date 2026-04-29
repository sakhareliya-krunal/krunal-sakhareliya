import type { Metadata } from "next";
import Link from "next/link";
import { HoverRevealCard } from "@/components/ui/hover-reveal-card";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteHeader } from "@/components/ui/site-header";
import { education, profile } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="grain pb-20">
      <SiteHeader />

      <PageIntro
        eyebrow="About"
        title="Flutter developer focused on usable mobile products and dependable app flows."
        description="My background combines academic consistency, product-minded Flutter development, AI-assisted execution, and deployment knowledge for modern mobile applications."
      />

      <section className="section-shell grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
          <p className="eyebrow">Approach</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
            I started with a strong academic path, from 10th and 12th standard performance through
            to a Bachelor of Computer Application completed with 8.67 CGPA. That foundation helped
            me build a practical understanding of application structure, implementation discipline,
            and software development basics.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
            My practical direction is centered on Flutter product work: responsive UI, structured
            application flows, API integration, Firebase-backed features, and delivery patterns
            that stay maintainable as projects grow. I aim for interfaces that are usable, stable,
            and realistic for product teams to extend.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
            Since October 2025, I have also been using Agentic AI tools like Claude, OpenAI Codex,
            and Cursor to create websites and applications more efficiently. Alongside that, I have
            been learning prompt engineering basics, especially how role, task, and context improve
            AI output quality. I also understand Play Store and App Store deployment workflows,
            which helps me support Flutter applications through delivery as well as development. I
            treat this as a strong supporting capability that helps me work faster while keeping
            Flutter and frontend execution as my core engineering focus.
          </p>
          <Link href="/experience" className="mt-6 inline-flex text-sm text-[var(--muted)]">
            View full experience timeline
          </Link>
        </div>

        <div className="grid gap-6">
          <HoverRevealCard
            hoverLabel="Profile"
            eyebrow="Profile"
            title={profile.title}
            description={profile.bio}
            className="min-h-[13rem] sm:min-h-[15rem]"
          />
          <HoverRevealCard hoverLabel="Available" eyebrow="Availability" className="min-h-[13rem] sm:min-h-[15rem]">
            <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">{profile.availability}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">
              Based in {profile.location}, available for opportunities where Flutter, product
              thinking, and reliable frontend execution are the core requirements.
            </p>
          </HoverRevealCard>
        </div>
      </section>

      <section className="section-shell py-8 md:py-14">
        <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
          <p className="eyebrow">Education</p>
          <div className="mt-5 grid gap-4 md:mt-6 md:gap-5">
            {education.map((item) => (
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
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">{item.summary}</p>
              </HoverRevealCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
