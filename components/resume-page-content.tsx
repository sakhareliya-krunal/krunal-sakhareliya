"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { profile, resume } from "@/lib/content";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function revealProps(reducedMotion: boolean | null, delay = 0) {
  if (reducedMotion) {
    return {};
  }

  const transition: Transition = { duration: 0.55, ease: "easeOut", delay };

  return {
    variants: sectionVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    transition,
  };
}

export function ResumePageContent() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="inner-page resume-page page-frame">
      <motion.header className="resume-hero" {...revealProps(reducedMotion)}>
        <div className="resume-hero-copy">
          <p className="section-label">Resume / CV</p>
          <h1>
            Krunal Sakhareliya
            <em> Flutter Developer</em>
          </h1>
          <p>{resume.introduction}</p>
          <div className="resume-actions">
            <a className="primary-pill" href={resume.downloadHref} download>
              Download CV <ArrowDownToLine aria-hidden="true" />
            </a>
            <a className="email-copy" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>

        <aside className="resume-snapshot glass-panel" aria-label="Resume snapshot">
          <div>
            <span>1 year</span>
            <p>Professional Flutter experience</p>
          </div>
          <div>
            <span>4 projects</span>
            <p>Mobile, web, SaaS, and community platforms</p>
          </div>
          <div>
            <span>BCA</span>
            <p>Silver Oak University, 8.67 CGPA</p>
          </div>
        </aside>
      </motion.header>

      <motion.section className="resume-contact-strip" aria-label="Contact details" {...revealProps(reducedMotion, 0.05)}>
        {resume.contact.map((item) => (
          <a href={item.href} key={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
        <span>
          <MapPin aria-hidden="true" />
          {profile.location}
        </span>
      </motion.section>

      <section className="resume-grid">
        <div className="resume-main-column">
          <motion.section className="resume-section" {...revealProps(reducedMotion)}>
            <div className="resume-section-heading">
              <BriefcaseBusiness aria-hidden="true" />
              <div>
                <p className="section-label">Work Experience</p>
                <h2>Recent roles and delivery focus.</h2>
              </div>
            </div>
            <div className="resume-timeline">
              {resume.experience.map((item, index) => (
                <motion.article className="resume-timeline-item glass-panel" key={`${item.title}-${item.period}`} {...revealProps(reducedMotion, index * 0.06)}>
                  <span className="resume-index">0{index + 1}</span>
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <strong>{item.organization}</strong>
                  <span>{item.description}</span>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section className="resume-section" {...revealProps(reducedMotion)}>
            <div className="resume-section-heading">
              <Sparkles aria-hidden="true" />
              <div>
                <p className="section-label">Projects</p>
                <h2>CV projects translated into web sections.</h2>
              </div>
            </div>
            <div className="resume-project-grid">
              {resume.projects.map((project, index) => (
                <motion.article className="resume-project-card glass-panel" key={project.title} {...revealProps(reducedMotion, index * 0.05)}>
                  <div>
                    <span>0{index + 1}</span>
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>

        <aside className="resume-side-column">
          <motion.section className="resume-side-panel glass-panel" {...revealProps(reducedMotion, 0.08)}>
            <div className="resume-section-heading resume-section-heading--compact">
              <GraduationCap aria-hidden="true" />
              <div>
                <p className="section-label">Education</p>
                <h2>Academic base.</h2>
              </div>
            </div>
            <div className="resume-education-list">
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

          <motion.section className="resume-side-panel glass-panel" {...revealProps(reducedMotion, 0.12)}>
            <div className="resume-section-heading resume-section-heading--compact">
              <Phone aria-hidden="true" />
              <div>
                <p className="section-label">Technical Skills</p>
                <h2>Tools and capabilities.</h2>
              </div>
            </div>
            <div className="resume-skill-groups">
              {resume.skillGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.section>
        </aside>
      </section>
    </main>
  );
}
