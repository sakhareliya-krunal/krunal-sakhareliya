import { ArrowUpRight } from "lucide-react";

type ProjectLinksProps = {
  title: string;
  liveUrl: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
};

export function ProjectLinks({ title, liveUrl, playStoreUrl, appStoreUrl }: ProjectLinksProps) {
  const links = [
    { label: "Web", href: liveUrl },
    { label: "Google Play", href: playStoreUrl },
    { label: "App Store", href: appStoreUrl },
  ];

  return (
    <div className="project-links" aria-label={`${title} links`}>
      {links.map(({ label, href }) => href ? (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title}: ${label}`}>
          {label} <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null)}
    </div>
  );
}
