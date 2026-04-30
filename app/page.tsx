import Link from "next/link";
import { BioluminescentHero } from "@/components/scene/bioluminescent-hero";
import { HoverRevealCard } from "@/components/ui/hover-reveal-card";
import { LogoSlider } from "@/components/ui/logo-slider";
import { SiteHeader } from "@/components/ui/site-header";
import { education, experience, profile, projects, skillLogos } from "@/data/content";

export default function Home() {
  return (
    <main id="home" className="grain pb-20">
      <SiteHeader isHome />
      <BioluminescentHero />

      <section id="about" className="home-section section-shell py-8 md:py-14">
        <div className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
              <p className="eyebrow">About</p>
              <h2 className="display-title mt-4 text-2xl sm:text-3xl md:mt-5 md:text-4xl">
                Flutter development backed by education, company experience, and AI-assisted execution.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
                I built my foundation through consistent academic progress, from strong 10th and
                12th results into a Bachelor of Computer Application completed with 8.67 CGPA.
                That academic path helped me develop the discipline and technical base needed for
                software development work.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
                My work experience was at Ongoing Team from November 2024 to October 2025, with my
                internship running from November 2024 to January 2025. Alongside that company
                experience, I now use Agentic AI tools like Claude, OpenAI Codex, and Cursor to
                build websites and applications faster while improving workflow quality through
                prompt-engineering basics.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  label: "Education",
                  hoverLabel: "Academic Base",
                  value: "BCA completed with 8.67 CGPA after strong 10th and 12th academic performance.",
                },
                {
                  label: "Career Path",
                  hoverLabel: "Team Delivery",
                  value: "Work experience at Ongoing Team from November 2024 to October 2025, including internship from November 2024 to January 2025.",
                },
                {
                  label: "AI Workflow",
                  hoverLabel: "AI Assisted",
                  value: "Using Claude, OpenAI Codex, and Cursor for AI-assisted website and application building.",
                },
                {
                  label: "Prompt Practice",
                  hoverLabel: "Prompt Craft",
                  value: "Learning role, task, and context-based prompting to guide AI systems more effectively.",
                },
              ].map((item) => (
                <HoverRevealCard
                  key={item.label}
                  hoverLabel={item.hoverLabel}
                  eyebrow={item.label}
                  className="min-h-[11.5rem] rounded-[1.35rem] p-5 sm:min-h-[12rem] sm:rounded-[1.6rem] sm:p-6"
                >
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">{item.value}</p>
                </HoverRevealCard>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
            <p className="eyebrow">Journey Snapshot</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-3 md:mt-6 md:gap-5">
              {[
                {
                  label: education[2].period,
                  title: education[2].title,
                  hoverLabel: "Education",
                  value: education[2].summary,
                },
                {
                  label: "Nov 2024 - Oct 2025",
                  title: "Ongoing Team Progression",
                  hoverLabel: "Experience",
                  value:
                    "Work experience at Ongoing Team from November 2024 to October 2025, including an internship period from November 2024 to January 2025.",
                },
                {
                  label: experience[2].period,
                  title: experience[2].title,
                  hoverLabel: "AI Workflows",
                  value:
                    "Building websites and applications with Agentic AI tools while improving prompt quality through structured context.",
                },
              ].map((item) => (
                <HoverRevealCard
                  key={item.title}
                  hoverLabel={item.hoverLabel}
                  className="rounded-[1.3rem] p-4 sm:rounded-[1.5rem] sm:p-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <h3 className="display-title mt-3 text-xl sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">{item.value}</p>
                </HoverRevealCard>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/about" className="inline-flex text-sm text-[var(--muted)]">
                Read full background
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="home-section section-shell py-8 md:py-14">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="display-title mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-4xl">Featured app work</h2>
          </div>
          <Link href="/projects" className="inline-flex text-sm text-[var(--muted)] md:inline-flex">
            View full project page
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <HoverRevealCard
              key={project.title}
              hoverLabel={project.title}
              eyebrow={`0${index + 1}`}
              title={project.title}
              description={project.summary}
              tags={project.stack.slice(1, 6)}
              className="min-h-[20rem] p-5 sm:min-h-[22rem] sm:p-6 md:min-h-[23rem] md:p-7"
              footer={
                project.stack[0] ? (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/70">
                    {project.stack[0]}
                  </span>
                ) : null
              }
            />
          ))}
        </div>
      </section>

      <section id="skills" className="home-section section-shell py-8 md:py-14">
        <div className="grid gap-6">
          <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
            <p className="eyebrow">Skills</p>
            <h2 className="display-title mt-4 text-2xl sm:text-3xl md:mt-5 md:text-4xl">
              Flutter, integration, and delivery fundamentals.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
              My strongest work sits where UI quality, routing, backend data flow, and mobile
              platform behavior need to work together. I aim for app structure that remains easy to
              extend instead of becoming fragile after a few new features.
            </p>
            <Link href="/skills" className="mt-6 inline-flex text-sm text-[var(--muted)]">
              Explore all capabilities
            </Link>
          </div>

          <div className="glass-panel min-w-0 rounded-[1.6rem] p-4 sm:p-5 md:rounded-[2rem] md:p-6">
            <p className="eyebrow px-2">Stack Slider</p>
            <LogoSlider logos={skillLogos} speed={36} direction="left" className="mt-4 md:mt-5" />
          </div>
        </div>
      </section>

      <section id="contact" className="home-section section-shell py-8 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
            <p className="eyebrow">Contact</p>
            <h2 className="display-title mt-4 text-2xl sm:text-3xl md:mt-5 md:text-4xl">
              Open to Flutter roles and product engineering conversations.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
              If you are hiring for Flutter development or building a mobile product that needs
              reliable frontend execution, I&apos;m available to discuss full-time roles and
              project-based work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-slate-950"
              >
                Email me
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/12 px-6 py-3 font-medium"
              >
                Contact page
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <HoverRevealCard hoverLabel="Email" eyebrow="Email" className="min-h-[9.5rem] rounded-[1.35rem] p-5 sm:min-h-[11rem] sm:rounded-[1.6rem] sm:p-6">
              <a href={`mailto:${profile.email}`} className="mt-4 block text-base leading-7">
                {profile.email}
              </a>
            </HoverRevealCard>
            <HoverRevealCard hoverLabel="Phone" eyebrow="Phone" className="min-h-[9.5rem] rounded-[1.35rem] p-5 sm:min-h-[11rem] sm:rounded-[1.6rem] sm:p-6">
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{profile.phone}</p>
            </HoverRevealCard>
            <HoverRevealCard
              href={profile.socials[0].href}
              target="_blank"
              rel="noreferrer"
              hoverLabel="GitHub"
              eyebrow="GitHub"
              className="min-h-[9.5rem] rounded-[1.35rem] p-5 sm:min-h-[11rem] sm:rounded-[1.6rem] sm:p-6"
            >
              <span className="mt-4 block text-base leading-7">{profile.socials[0].label}</span>
            </HoverRevealCard>
            <HoverRevealCard
              href={profile.socials[1].href}
              target="_blank"
              rel="noreferrer"
              hoverLabel="LinkedIn"
              eyebrow="LinkedIn"
              className="min-h-[9.5rem] rounded-[1.35rem] p-5 sm:min-h-[11rem] sm:rounded-[1.6rem] sm:p-6"
            >
              <span className="mt-4 block text-base leading-7">{profile.socials[1].label}</span>
            </HoverRevealCard>
          </div>
        </div>
      </section>
    </main>
  );
}
