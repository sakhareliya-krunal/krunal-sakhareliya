"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Command,
  Github,
  Home,
  Linkedin,
  Mail,
  Search,
  UserRound,
  X,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BottomCta } from "@/components/bottom-cta";
import { getGreeting } from "@/lib/greeting";
import { profile } from "@/lib/content";
import { KSLogo } from "@/components/ks-logo";
import { PageTransition } from "@/components/page-transition";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/resume", label: "Resume", icon: FileText },
];

function getGreetingIcon(greeting: string) {
  if (greeting === "Good Morning") return "🌅";
  if (greeting === "Good Afternoon") return "☀️";
  if (greeting === "Good Evening") return "🌆";
  if (greeting === "Good Night") return "🌙";
  return "👋";
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [intro, setIntro] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [greeting, setGreeting] = useState("Hello");
  const [query, setQuery] = useState("");
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const currentPage = links.find((link) => link.href === pathname)?.label ?? "Krunal";
  const filteredLinks = links.filter((link) =>
    link.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  useEffect(() => {
    const greetingDelay = reducedMotion ? 175 : 800;
    const greetingTimer = window.setTimeout(() => {
      setGreeting(getGreeting(new Date().getHours()));
    }, greetingDelay);
    const timer = window.setTimeout(() => setIntro(false), reducedMotion ? 350 : 1500);
    return () => {
      window.clearTimeout(greetingTimer);
      window.clearTimeout(timer);
    };
  }, [reducedMotion]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMobileOpen((value) => !value);
      }
      if (event.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let focusFrame: number | undefined;
    const isMobileViewport = window.matchMedia("(max-width: 900px)").matches;
    if (!isMobileViewport) {
      focusFrame = window.requestAnimationFrame(() => searchRef.current?.focus());
    }

    return () => {
      if (focusFrame !== undefined) {
        window.cancelAnimationFrame(focusFrame);
      }
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  function closeMobileNavigation(restoreFocus = true) {
    setMobileOpen(false);
    setQuery("");
    if (restoreFocus) {
      window.requestAnimationFrame(() => mobileTriggerRef.current?.focus());
    }
  }

  return (
    <div className={`app-shell ${pathname === "/" ? "is-home" : "is-inner"} ${intro ? "is-greeting" : ""}`}>
      <BackgroundScene home={pathname === "/"} />
      <Link className="corner-logo" href="/" aria-label="Krunal Sakhareliya home">
        <KSLogo className="corner-logo-mark" />
      </Link>
      <button
        className="command-button"
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <Command />
        <span className="sr-only">Command K</span>
      </button>

      <button
        ref={mobileTriggerRef}
        className="mobile-nav-trigger"
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-command-sheet"
        onClick={() => (mobileOpen ? closeMobileNavigation() : setMobileOpen(true))}
      >
        <span className="mobile-trigger-mark">
          <KSLogo className="mobile-trigger-logo" />
        </span>
        <span>{currentPage}</span>
      </button>

      <div className="floating-header-anchor">
        <motion.header
          className={`floating-header ${intro ? "is-greeting" : "is-nav"}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {intro ? (
              <motion.div
                className="greeting-pill"
                key="greeting"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <span>{greeting}</span>
                <span className="greeting-icon" aria-hidden="true">
                  {getGreetingIcon(greeting)}
                </span>
              </motion.div>
            ) : (
              <motion.nav
                className="floating-nav"
                aria-label="Primary navigation"
                key="navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={active ? "active" : ""}
                      onClick={() => setMobileOpen(false)}
                    >
                      {active && <span className="nav-active" />}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <Link className="nav-cta" href="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav-layer"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="mobile-nav-backdrop"
              type="button"
              aria-label="Close navigation"
              onClick={() => closeMobileNavigation()}
            />
            <motion.div
              id="mobile-command-sheet"
              className="mobile-command-sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-search-row">
                <Search aria-hidden="true" />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages..."
                  aria-label="Search navigation"
                />
                <button type="button" onClick={() => closeMobileNavigation()} aria-label="Close navigation">
                  <X />
                </button>
              </div>

              <p className="mobile-sheet-label">Pages</p>
              <nav className="mobile-route-grid" aria-label="Mobile navigation">
                {filteredLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={pathname === link.href ? "active" : ""}
                      onClick={() => closeMobileNavigation(false)}
                    >
                      <Icon aria-hidden="true" />
                      <span>{link.label}</span>
                      {pathname === link.href && <i aria-hidden="true" />}
                    </Link>
                  );
                })}
              </nav>
              {filteredLinks.length === 0 && <p className="mobile-empty">No pages found.</p>}

              <p className="mobile-sheet-label">Connect</p>
              <div className="mobile-connect-grid">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" /> LinkedIn
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" /> Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="route-stage">
        <PageTransition>{children}</PageTransition>
      </div>
      <BottomCta />
    </div>
  );
}

function BackgroundScene({ home }: { home: boolean }) {
  return (
    <div className={`background-scene ${home ? "background-scene--home" : "background-scene--inner"}`} aria-hidden="true">
      <div className="background-aurora" />
      <div className="background-folds">
        <span />
        <span />
        <span />
      </div>
      <div className="background-noise" />
    </div>
  );
}
