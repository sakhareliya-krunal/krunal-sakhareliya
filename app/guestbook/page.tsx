import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteHeader } from "@/components/ui/site-header";
import { profile, testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Guestbook",
};

export default function GuestbookPage() {
  return (
    <main className="grain pb-20">
      <SiteHeader />
      <PageIntro
        eyebrow="The wall remembers"
        title="Words that echo always."
        description="A static message wall with curated notes about Krunal's product work, frontend execution, and collaboration style."
      />

      <section className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="paper-panel rounded-[1.7rem] p-6 sm:p-8">
          <p className="eyebrow">Join the wall</p>
          <h2 className="display-title mt-4 text-4xl leading-tight">Say hello.</h2>
          <p className="muted-on-paper mt-4 text-base leading-8">
            The live version keeps this simple and static for now. Send a note by email and it can
            be added here as a curated message.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex rounded-full bg-[#17120d] px-5 py-3 text-sm font-bold text-[var(--paper)]"
          >
            Write a message
          </a>
        </aside>

        <div className="grid gap-4">
          {testimonials.map((item, index) => (
            <article key={item.name} className="glass-panel rounded-[1.5rem] p-5 sm:p-6">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--paper)] text-sm font-bold text-[#17120d]">
                  {item.name[0]}
                </span>
                <div className="min-w-0">
                  <p className="text-base leading-8 text-[var(--foreground)]">{item.quote}</p>
                  <p className="mt-4 text-sm font-bold">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    {item.role} - May {23 - index}, 2026
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
