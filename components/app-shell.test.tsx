import "@testing-library/jest-dom/vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AppShell } from "@/components/app-shell";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: new Proxy(
    {},
    {
      get: (_target, key: string) => {
        const Component = (props: Record<string, unknown>) => {
          const {
            children,
            initial,
            animate,
            exit,
            transition,
            layoutId,
            ...elementProps
          } = props;
          void [initial, animate, exit, transition, layoutId];
          return createElement(key, elementProps, children as React.ReactNode);
        };
        Component.displayName = `Motion${key}`;
        return Component;
      },
    },
  ),
  useReducedMotion: () => true,
}));

describe("AppShell mobile navigation", () => {
  const matchMediaMock = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-25T06:00:00"));
    document.body.style.overflow = "";
    matchMediaMock.mockImplementation((query: string) => ({
      matches: query === "(max-width: 900px)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    vi.stubGlobal("matchMedia", matchMediaMock);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("opens, filters, and closes the command sheet", async () => {
    render(
      <AppShell>
        <main>Project content</main>
      </AppShell>,
    );

    expect(screen.getByText("Project content")).toBeVisible();
    expect(screen.getByText("Hello")).toBeVisible();
    expect(screen.getByText("👋")).toBeVisible();

    act(() => {
      vi.advanceTimersByTime(175);
    });

    expect(screen.getByText("Good Morning")).toBeVisible();
    expect(screen.getByText("🌅")).toBeVisible();

    act(() => {
      vi.advanceTimersByTime(175);
    });

    const trigger = screen
      .getAllByRole("button", { name: "Open navigation" })
      .find((button) => button.classList.contains("mobile-nav-trigger"));
    expect(trigger).toBeDefined();
    if (!trigger) throw new Error("Mobile navigation trigger not found");
    expect(trigger).toHaveTextContent("Projects");

    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Site navigation" });
    expect(dialog).toBeVisible();
    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByRole("textbox", { name: "Search navigation" })).not.toHaveFocus();

    expect(within(dialog).getByRole("link", { name: "Resume" })).toBeVisible();

    fireEvent.change(screen.getByRole("textbox", { name: "Search navigation" }), {
      target: { value: "res" },
    });
    const filteredSheet = screen.getByRole("dialog", { name: "Site navigation" });
    expect(within(filteredSheet).getByRole("link", { name: "Resume" })).toBeVisible();
    expect(within(filteredSheet).queryByRole("link", { name: "Projects" })).not.toBeInTheDocument();
    expect(within(filteredSheet).queryByRole("link", { name: "About" })).not.toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: "Site navigation" })).not.toBeInTheDocument();
  });
});
