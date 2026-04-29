import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

type HoverRevealCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  hoverLabel?: string;
  href?: string;
  target?: string;
  rel?: string;
  tags?: string[];
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
};

export function HoverRevealCard({
  eyebrow,
  title,
  description,
  hoverLabel = "Explore",
  href,
  target,
  rel,
  tags,
  footer,
  children,
  className,
  contentClassName,
  style,
}: HoverRevealCardProps) {
  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      style={style}
      className={cn(
        "hover-reveal-card group relative block min-w-0 overflow-hidden rounded-[1.4rem] p-5 sm:rounded-[1.8rem] sm:p-6 md:p-7",
        className,
      )}
    >
      <span aria-hidden="true" className="hover-reveal-card__corner hover-reveal-card__corner--tr" />
      <span aria-hidden="true" className="hover-reveal-card__corner hover-reveal-card__corner--bl" />
      <span aria-hidden="true" className="hover-reveal-card__wash" />

      <div className={cn("hover-reveal-card__content relative z-[2] flex h-full flex-col", contentClassName)}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="display-title mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-4xl">{title}</h2> : null}
        {description ? (
          <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7 md:text-lg">{description}</p>
        ) : null}
        {children}
        {tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/72"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
        {footer ? <div className="mt-5 sm:mt-6">{footer}</div> : null}
      </div>

      <div aria-hidden="true" className="hover-reveal-card__overlay">
        <span className="hover-reveal-card__overlay-label">{hoverLabel}</span>
      </div>
    </Component>
  );
}
