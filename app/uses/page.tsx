import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteHeader } from "@/components/ui/site-header";
import { toolCategories } from "@/data/content";

export const metadata: Metadata = {
  title: "Uses",
};

export default function UsesPage() {
  return (
    <main className="grain pb-20">
      <SiteHeader />
      <PageIntro
        eyebrow="The Gear"
        title="What powers my work."
        description="A categorized view of the technologies, frameworks, and AI-assisted workflow tools behind Krunal's portfolio and app delivery."
      />

      <section className="section-shell grid gap-5">
        {toolCategories.map((category) => (
          <article
            key={category.title}
            className="grid gap-5 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:grid-cols-[5rem_0.8fr_1.2fr]"
          >
            <p className="display-title text-4xl text-white/40">{category.number}</p>
            <div>
              <h2 className="display-title text-4xl leading-tight">{category.title}.</h2>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
                {category.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-2 md:justify-end">
              {category.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
