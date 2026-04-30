import { profile } from "@/data/content";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import styles from "@/components/ui/site-header.module.css";

type SiteHeaderProps = {
  isHome?: boolean;
};

export function SiteHeader({ isHome = false }: SiteHeaderProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`section-shell pt-4 md:pt-5 lg:pt-6 ${styles.header} ${
            isHome ? styles.overlay : ""
          }`}
        >
          <SpotlightNavbar
            brand={{ label: profile.name, href: "/" }}
            cta={{ label: "Let's talk", href: "/contact" }}
            items={[
              { label: "About", href: "/about" },
              { label: "Experience", href: "/experience" },
              { label: "Projects", href: "/projects" },
              { label: "Skills", href: "/skills" },
              { label: "Contact", href: "/contact" },
            ]}
            mode="route"
          />
        </div>
      </header>

      {!isHome ? <div aria-hidden="true" className="h-22 md:h-24 lg:h-28" /> : null}
    </>
  );
}
