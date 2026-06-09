import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createElement } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
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
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("opens, filters, and closes the command sheet", async () => {
    render(
      <AppShell>
        <main>Project content</main>
      </AppShell>,
    );

    expect(screen.getByText("Project content")).toBeVisible();
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

    fireEvent.change(screen.getByRole("textbox", { name: "Search navigation" }), {
      target: { value: "cont" },
    });
    expect(screen.getByRole("link", { name: "Contact" })).toBeVisible();
    expect(screen.queryByRole("link", { name: "About" })).not.toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Site navigation" })).not.toBeInTheDocument();
    });
  });
});
