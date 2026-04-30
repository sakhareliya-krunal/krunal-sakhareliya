"use client";

import dynamic from "next/dynamic";

const BioluminescentHeroBackground = dynamic(
  () => import("@/components/scene/bioluminescent-hero-background"),
  { ssr: false },
);

export function BioluminescentHeroBackgroundShell() {
  return <BioluminescentHeroBackground />;
}
