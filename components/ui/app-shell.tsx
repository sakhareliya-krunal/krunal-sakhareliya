"use client";

import { useEffect, useState } from "react";
import { InitialLoader } from "@/components/ui/initial-loader";

const INTRO_SESSION_KEY = "krunal-portfolio:intro-seen";
const INTRO_DURATION_MS = 1400;

type AppShellProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AppShell({ children, footer }: AppShellProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const introSeen = window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
    const delay = introSeen ? 0 : INTRO_DURATION_MS;

    const timer = window.setTimeout(() => {
      if (!introSeen) {
        window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      }
      setIsLoading(false);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <InitialLoader />;
  }

  return (
    <div className="min-h-screen">
      {children}
      {footer}
    </div>
  );
}
