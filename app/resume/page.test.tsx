import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import ResumePage from "@/app/resume/page";

vi.mock("framer-motion", () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, key: string) => {
        const Component = (props: Record<string, unknown>) => {
          const {
            children,
            initial,
            animate,
            whileInView,
            viewport,
            variants,
            transition,
            ...elementProps
          } = props;
          void [initial, animate, whileInView, viewport, variants, transition];
          return createElement(key, elementProps, children as React.ReactNode);
        };
        Component.displayName = `Motion${key}`;
        return Component;
      },
    },
  ),
  useReducedMotion: () => true,
}));

describe("ResumePage", () => {
  it("renders CV content and download action", () => {
    render(<ResumePage />);

    expect(screen.getByRole("heading", { name: /Krunal Sakhareliya/i })).toBeVisible();
    expect(screen.getByText(/Software developer with over 1\.5 years of professional experience, specializing in cross-platform application development with Flutter and full-stack web development with Laravel/i)).toBeVisible();
    expect(screen.getByText("Flutter Development:")).toBeVisible();
    expect(screen.getByText("Laravel Full-Stack Development:")).toBeVisible();
    expect(screen.getByRole("link", { name: /Download CV/i })).toHaveAttribute(
      "href",
      "/krunal-sakhareliya-cv.pdf",
    );
    expect(screen.getByRole("heading", { name: "Ongoing Foods" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Ongoing Foods: Web" })).toHaveAttribute("href", "https://ongoingfoods.com");
    expect(screen.getByRole("link", { name: "Ongoing Foods: Google Play" })).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=com.ongoingfoods.app");
    expect(screen.getByRole("link", { name: "Ongoing Foods: App Store" })).toHaveAttribute("href", "https://apps.apple.com/in/app/ongoing-foods/id6787362479");
    expect(screen.getByRole("heading", { name: "Ventures Mart" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Presynx" })).toBeVisible();
    expect(screen.getAllByText("Ongoing Team").length).toBeGreaterThan(0);
    expect(screen.getByText("Silver Oak University")).toBeVisible();
    expect(screen.getByText("CGPA: 8.67/10")).toBeVisible();
  });
});
