import Link from "next/link";
import { profile } from "@/data/content";
import styles from "@/components/ui/site-footer.module.css";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Uses", href: "/uses" },
  { label: "Contact", href: "/contact" },
];

const footerSocials = [
  {
    label: "GitHub",
    href: profile.socials.find((item) => item.label === "GitHub")?.href ?? "#",
    social: "github",
  },
  {
    label: "LinkedIn",
    href: profile.socials.find((item) => item.label === "LinkedIn")?.href ?? "#",
    social: "linkedin",
  },
  {
    label: "Mail",
    href: `mailto:${profile.email}`,
    social: "mail",
  },
];

function Icon({ social }: { social: string }) {
  if (social === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.49 0-.24-.01-1.03-.01-1.86-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.13 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.33 9.33 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.21 2.47.11 2.73.64.72 1.03 1.64 1.03 2.77 0 3.99-2.35 4.86-4.59 5.12.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.17.6.67.49A10.2 10.2 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (social === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM8.25 19H5.63V9.88h2.62V19Zm10.12 0h-2.61v-4.45c0-1.06-.02-2.42-1.43-2.42-1.44 0-1.66 1.18-1.66 2.34V19H10.05V9.88h2.51v1.25h.03c.35-.68 1.2-1.4 2.47-1.4 2.64 0 3.31 1.82 3.31 4.18V19Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.25 5.02a.9.9 0 0 0 1.1 0L18.8 6.5H5.2Zm13.8 1.93-5.49 4.41a2.4 2.4 0 0 1-3.02 0L5 8.43v8.82c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.43Z"
      />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="section-shell">
        <div className={styles.panel}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <p className="eyebrow">My Site</p>
              <h2 className={`display-title ${styles.title}`}>{profile.name}</h2>
              <p className={styles.role}>{profile.title}</p>
              <p className={styles.summary}>
                Explore, experiment, and say hello. Building Flutter products with reliable UI
                flows, strong integrations, and AI-assisted development support.
              </p>
            </div>

            <div className={styles.group}>
              <p className={styles.label}>General</p>
              <nav className={styles.links} aria-label="Footer navigation">
                {footerNav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.group}>
              <p className={styles.label}>More</p>
              <ul className={styles.socials} aria-label="Footer social links">
                {footerSocials.map((item) => {
                  const isEmail = item.href.startsWith("mailto:");

                  return (
                    <li key={item.label} className={styles.socialItem}>
                      <a
                        href={item.href}
                        aria-label={item.label}
                        data-social={item.social}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noreferrer"}
                        className={styles.socialLink}
                      >
                        <span className={styles.socialFill} />
                        <span className={styles.socialIcon}>
                          <Icon social={item.social} />
                        </span>
                      </a>
                      <span className={styles.socialTooltip}>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
              <p className={styles.meta}>{profile.location}</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>(c) {year} {profile.name}</p>
            <p>Flutter Developer - Ahmedabad, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
