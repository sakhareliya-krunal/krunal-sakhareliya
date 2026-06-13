import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/content";

const generalLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

const specificLinks = [
  { label: "Skills", href: "/skills" },
  { label: "Uses", href: "/uses" },
  { label: "Blog", href: "/blog" },
  { label: "Guestbook", href: "/guestbook" },
];

const moreLinks = [
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function BottomCta() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footbar" aria-label="Site footer">
      <div className="site-footbar-panel">
        <div className="site-footbar-grid">
          <div className="site-footbar-brand">
            <p className="section-label">My Site</p>
            <h2>Explore, experiment &amp;&amp; say hello</h2>
            <p>
              I&apos;m {profile.name} - a {profile.title.toLowerCase()} building responsive
              app experiences, connected product flows, and AI-assisted web work.
            </p>
            <div className="site-footbar-socials" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin aria-hidden="true" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail aria-hidden="true" />
              </a>
            </div>
          </div>

          <FooterLinkGroup title="General" links={generalLinks} />
          <FooterLinkGroup title="Specifics" links={specificLinks} />
          <FooterLinkGroup title="More" links={moreLinks} />
        </div>

        <div className="site-footbar-bottom">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <div>
            <Link href="/contact">Contact</Link>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>

      <div className="site-footbar-marquee" aria-hidden="true">
        <span>Open to work &middot; Open to work &middot;</span>
        <span>Open to work &middot; Open to work &middot;</span>
      </div>

      <div className="site-footbar-closer">
        <h2>
          <span>From concept to creation</span>
          <span>Let&apos;s make it happen!</span>
        </h2>
        <Link className="primary-pill site-footbar-cta" href="/contact">
          Get In Touch <ArrowUpRight />
        </Link>
        <p>{profile.availability}</p>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <nav className="site-footbar-group" aria-label={`${title} footer links`}>
      <h3>{title}</h3>
      {links.map((link) => {
        const plainAnchor = link.href.startsWith("http") || link.href.startsWith("mailto:");
        return plainAnchor ? (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
