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
    expect(screen.getByText(/Flutter Developer with 1 year/i)).toBeVisible();
    expect(screen.getByRole("link", { name: /Download CV/i })).toHaveAttribute(
      "href",
      "/krunal-sakhareliya-cv.pdf",
    );
    expect(screen.getByRole("heading", { name: "Presynx" })).toBeVisible();
    expect(screen.getByText("Silver Oak University")).toBeVisible();
  });
});
