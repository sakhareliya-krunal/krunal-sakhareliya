import type { Metadata } from "next";
import { HoverRevealCard } from "@/components/ui/hover-reveal-card";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteHeader } from "@/components/ui/site-header";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const socialItems = profile.socials.filter((social) =>
    ["GitHub", "LinkedIn", "Email"].includes(social.label),
  );

  return (
    <main className="grain pb-20">
      <SiteHeader />

      <PageIntro
        eyebrow="Contact"
        title="Open to Flutter opportunities and product-focused app work."
        description="If you are hiring for a Flutter role or looking for support on mobile product development, you can reach me directly through email, LinkedIn, or GitHub."
      />

      <section className="section-shell grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <HoverRevealCard
          hoverLabel="Reach Out"
          eyebrow="Reach Out"
          className="min-h-[18rem] p-6 sm:min-h-[20rem] sm:p-7 md:min-h-[23rem] md:p-10"
        >
          <div className="contact-reachout mt-4 md:mt-5">
            <a href={`mailto:${profile.email}`} className="contact-reachout__email display-title">
              {profile.email}
            </a>
            <p className="contact-reachout__body">
              I am based in {profile.location} and currently open to Flutter development roles
              where I can contribute to app architecture, responsive UI, API integration,
              authentication, and notification-driven workflows.
            </p>
            <p className="contact-reachout__meta">Phone: {profile.phone}</p>
          </div>
        </HoverRevealCard>

        <div className="glass-panel contact-links-card rounded-[1.6rem] p-6 sm:p-7 md:rounded-[2rem] md:p-10">
          <p className="eyebrow">Links</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)] sm:mt-5 sm:text-base md:text-[1.02rem]">
            Use the links below to view my work, connect professionally, or contact me directly.
          </p>
          <SocialFlipButton items={socialItems} className="mt-5 sm:mt-6" />
        </div>
      </section>
    </main>
  );
}
