"use client";

import { useEffect } from "react";

const FOCUS_CLASS = "is-hash-focus";
const FOCUS_MS = 3000;

export function ProjectHashFocus() {
  useEffect(() => {
    let clearTimer: number | undefined;
    let addFrame = 0;
    let addFrameInner = 0;

    function focusFromHash() {
      const slug = window.location.hash.replace(/^#/, "");
      if (!slug) return;

      const target = document.getElementById(slug);
      if (!target) return;

      document
        .querySelectorAll(`.project-card.${FOCUS_CLASS}`)
        .forEach((node) => node.classList.remove(FOCUS_CLASS));

      window.cancelAnimationFrame(addFrame);
      window.cancelAnimationFrame(addFrameInner);
      window.clearTimeout(clearTimer);

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Double rAF so the animation starts after scroll has begun.
      addFrame = window.requestAnimationFrame(() => {
        addFrameInner = window.requestAnimationFrame(() => {
          target.classList.add(FOCUS_CLASS);
          clearTimer = window.setTimeout(() => {
            target.classList.remove(FOCUS_CLASS);
          }, FOCUS_MS);
        });
      });
    }

    const frame = window.requestAnimationFrame(focusFromHash);
    window.addEventListener("hashchange", focusFromHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(addFrame);
      window.cancelAnimationFrame(addFrameInner);
      window.clearTimeout(clearTimer);
      window.removeEventListener("hashchange", focusFromHash);
    };
  }, []);

  return null;
}
