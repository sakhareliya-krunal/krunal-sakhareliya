"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { profile, resume } from "@/lib/content";

const contactIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Mobile: Phone,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function revealProps(reducedMotion: boolean | null, delay = 0) {
  if (reducedMotion) {
    return {};
  }

  const transition: Transition = { duration: 0.4, ease: "easeOut", delay };

  return {
    variants: sectionVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-60px" },
    transition,
  };
}

export function ResumePageContent() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="inner-page resume-page page-frame">
      <div className="resume-actions">
        <a className="primary-pill" href={resume.downloadHref} download>
          Download CV <ArrowDownToLine aria-hidden="true" />
        </a>
        <a className="email-copy" href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          {profile.email}
        </a>
      </div>

      <motion.article className="resume-sheet" {...revealProps(reducedMotion)}>
        <header className="resume-doc-header">
          <h1>{profile.name}</h1>
          <p className="resume-doc-role">{profile.role}</p>
          <p className="resume-doc-summary">{resume.introduction}</p>
          <div className="resume-doc-contact" aria-label="Contact details">
            {resume.contact.map((item, index) => {
              const Icon = contactIcons[item.label] ?? Mail;
              return (
                <span className="resume-doc-contact-group" key={item.label}>
                  {index > 0 && (
                    <span className="resume-doc-contact-sep" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <a
                    className="resume-doc-contact-item"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Icon aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                </span>
              );
            })}
            <span className="resume-doc-contact-group">
              <span className="resume-doc-contact-sep" aria-hidden="true">
                ·
              </span>
              <span className="resume-doc-contact-item">
                <MapPin aria-hidden="true" />
                <span>{profile.location}</span>
              </span>
            </span>
          </div>
        </header>

        <div className="resume-doc-body">
          <div className="resume-doc-main">
            <motion.section className="resume-doc-section" {...revealProps(reducedMotion, 0.04)}>
              <h2>Experience</h2>
              <div className="resume-entry-list">
                {resume.experience.map((item) => (
                  <article className="resume-entry" key={`${item.title}-${item.period}`}>
                    <div className="resume-entry-heading">
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.organization}</p>
                      </div>
                      <span>{item.period}</span>
                    </div>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section className="resume-doc-section" {...revealProps(reducedMotion, 0.08)}>
              <h2>Projects</h2>
              <div className="resume-entry-list">
                {resume.projects.map((project) => (
                  <article className="resume-entry" key={project.title}>
                    <div className="resume-entry-heading">
                      <div>
                        <h3>{project.title}</h3>
                      </div>
                      <a href={project.href} target="_blank" rel="noreferrer">
                        Visit <ArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </motion.section>
          </div>

          <aside className="resume-doc-side">
            <motion.section className="resume-doc-section" {...revealProps(reducedMotion, 0.1)}>
              <h2>Education</h2>
              <div className="resume-edu-list">
                {resume.education.map((item) => (
                  <article key={`${item.title}-${item.period}`}>
                    <span>{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.organization}</p>
                    <strong>{item.result}</strong>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section className="resume-doc-section" {...revealProps(reducedMotion, 0.14)}>
              <h2>Skills</h2>
              <div className="resume-skill-list">
                {resume.skillGroups.map((group) => (
                  <article key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(" · ")}</p>
                  </article>
                ))}
              </div>
            </motion.section>
          </aside>
        </div>
      </motion.article>
    </main>
  );
}
