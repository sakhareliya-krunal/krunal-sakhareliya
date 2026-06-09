import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteHeader } from "@/components/ui/site-header";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const latest = blogPosts.filter((post) => post !== featured);
  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  return (
    <main className="grain pb-20">
      <SiteHeader />
      <PageIntro
        eyebrow="The Pensieve"
        title="Handpicked insights from Flutter, product work, and AI-assisted development."
        description="A static editorial surface for notes, case-study thinking, and practical engineering lessons."
      />

      <section className="section-shell grid gap-6">
        <div className="flex flex-wrap gap-2">
          <span className="chip bg-[var(--accent)]/20 text-[var(--foreground)]">All Posts</span>
          {tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
          <span className="ml-auto hidden rounded-full border border-white/12 px-4 py-2 text-xs text-[var(--muted)] sm:inline-flex">
            Search posts Ctrl K
          </span>
        </div>

        <div>
          <p className="eyebrow">Featured Articles</p>
          <Link href="/blog" className="paper-panel mt-4 block rounded-[1.7rem] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17120d]/60">
              Featured - {featured.readTime} - {featured.date}
            </p>
            <h2 className="display-title mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              {featured.title}
            </h2>
            <p className="muted-on-paper mt-4 max-w-2xl text-base leading-8">{featured.excerpt}</p>
          </Link>
        </div>

        <div>
          <p className="eyebrow">Latest Articles</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {latest.map((post) => (
              <Link key={post.title} href="/blog" className="glass-panel rounded-[1.5rem] p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {post.readTime} - {post.date}
                </p>
                <h2 className="display-title mt-4 text-2xl leading-tight">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
