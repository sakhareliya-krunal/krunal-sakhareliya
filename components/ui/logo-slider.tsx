"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type LogoSliderItem = {
  name: string;
  src: string;
  alt?: string;
};

export type LogoSliderProps = {
  logos: LogoSliderItem[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

function LogoTile({ item }: { item: LogoSliderItem }) {
  const [hasError, setHasError] = useState(false);
  const initials = item.name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="logo-slider-tile">
      <div className="logo-slider-visual">
      {!hasError ? (
        <div className="logo-slider-image-wrap">
          <Image
            src={item.src}
            alt={item.alt ?? item.name}
            width={72}
            height={72}
            unoptimized
            className="logo-slider-image"
            onError={() => {
              setHasError(true);
            }}
          />
        </div>
      ) : null}
      {hasError ? (
        <div className="logo-slider-fallback">
          <span className="logo-slider-monogram">{initials || item.name.slice(0, 2).toUpperCase()}</span>
        </div>
      ) : null}
      </div>
      <span className="logo-slider-label">{item.name}</span>
    </div>
  );
}

export function LogoSlider({
  logos,
  speed = 60,
  direction = "left",
  className,
}: LogoSliderProps) {
  const repeatedLogos = useMemo(() => [...logos, ...logos], [logos]);
  const animationDuration = `${speed}s`;

  return (
    <div className={cn("logo-slider-shell", className)}>
      <div className="logo-slider-fade logo-slider-fade-left" />
      <div className="logo-slider-fade logo-slider-fade-right" />
      <div
        className={cn(
          "logo-slider-track",
          direction === "left" ? "logo-slider-left" : "logo-slider-right",
        )}
        style={{ animationDuration }}
        aria-hidden="true"
      >
        {repeatedLogos.map((logo, index) => (
          <LogoTile key={`${logo.name}-${index}`} item={logo} />
        ))}
      </div>
    </div>
  );
}
