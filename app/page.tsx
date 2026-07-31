import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, Copy } from "lucide-react";
import { HomeBento } from "@/components/home-bento";
import { profile, projects } from "@/lib/content";
import { CopyEmailButton } from "@/components/copy-email-button";

export default function HomePage() {
  const featured = projects[0];

  return (
    <main className="home-page page-frame">
      <section className="home-hero-viewport">
        <section className="home-hero">
          <div className="home-eyebrow">
            <span>New</span>
            <Link href={`/projects#${featured.slug}`}>
              {featured.title} {featured.projectType.toLowerCase()}
            </Link>
          </div>
          <h1>
            Apps that feel designed.
            <em>Engineering that ships.</em>
          </h1>
          <p className="home-identity">
            Hello, I&apos;m <strong>{profile.name}</strong>
            <span className="mini-avatar">
              <Image
                src={profile.avatar}
                alt=""
                width={56}
                height={36}
                className="mini-avatar-image"
                priority
              />
              <span className="mini-avatar-wave" aria-hidden="true">
                👋
              </span>
            </span>
            a {profile.title}
          </p>
          <div className="home-actions">
            <Link className="primary-pill" href="/contact">
              Let&apos;s Connect <ArrowRight />
            </Link>
            <CopyEmailButton>
              <Copy />
              {profile.email}
            </CopyEmailButton>
          </div>
        </section>
        <div className="horizon" aria-hidden="true">
          <span className="horizon-glow" />
          <span className="horizon-line" />
        </div>
        <a className="home-scroll" href="#home-bento">
          Explore below <ArrowDown />
        </a>
      </section>
      <HomeBento />
    </main>
  );
}
