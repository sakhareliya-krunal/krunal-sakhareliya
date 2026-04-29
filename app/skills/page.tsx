import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { LogoSlider } from "@/components/ui/logo-slider";
import { SiteHeader } from "@/components/ui/site-header";
import { skillLogos } from "@/data/content";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <main className="grain pb-20">
      <SiteHeader />

      <PageIntro
        eyebrow="Skills"
        title="Core Flutter, frontend, and integration capabilities."
        description="My stack is centered on building maintainable Flutter applications with strong routing, state management, backend integration, Firebase services, and responsive UI patterns across device sizes."
      />

      <section className="section-shell">
        <div className="glass-panel min-w-0 rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
          <p className="eyebrow">Skill Slider</p>
          <h2 className="display-title mt-4 text-2xl sm:text-3xl md:text-4xl">
            Tools and technologies I use across Flutter products.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:text-lg md:leading-8">
            This slider highlights the platforms, libraries, and development capabilities behind my
            application work, using local skill icons for a cleaner and more complete presentation.
          </p>
          <LogoSlider logos={skillLogos} speed={34} direction="left" className="mt-6 md:mt-8" />
        </div>
      </section>
    </main>
  );
}
