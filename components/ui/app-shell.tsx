"use client";

import { useEffect, useState } from "react";
import { InitialLoader } from "@/components/ui/initial-loader";
import { PageTransition } from "@/components/ui/page-transition";

const INTRO_SESSION_KEY = "krunal-portfolio:intro-seen";
const INTRO_DURATION_MS = 1400;

type AppShellProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AppShell({ children, footer }: AppShellProps) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introSeen = window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
    const delay = introSeen ? 0 : INTRO_DURATION_MS;

    const timer = window.setTimeout(() => {
      if (!introSeen) {
        window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      }
      setShowIntro(!introSeen);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <PageTransition footer={footer}>{children}</PageTransition>

      {showIntro ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(9,17,31,0.86)] backdrop-blur-sm"
        >
          <InitialLoader />
        </div>
      ) : null}
    </>
  );
}
