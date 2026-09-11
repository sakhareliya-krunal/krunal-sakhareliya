import type { Metadata } from "next";
import Image from "next/image";
import { Github, Linkedin, MapPin } from "lucide-react";
import { portraitStack, professionalSummary, profile, skills } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="inner-page page-frame">
      <header className="page-heading">
        <p>More about me</p>
        <h1>
          I&apos;m Krunal, a<br />
          software <em>developer</em>
        </h1>
      </header>
      <section className="about-layout">
        <div className="about-copy glass-panel">
          <p>{professionalSummary.introduction}</p>
          {professionalSummary.specializations.map((specialization) => (
            <section className="about-specialization" key={specialization.title}>
              <h2>{specialization.title}</h2>
              <p>{specialization.description}</p>
            </section>
          ))}
          <p>{professionalSummary.background}</p>
          <div className="about-meta">
            <span><MapPin /> {profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
        <div className="portrait-stack" aria-label="Krunal profile visual">
          <div className="portrait-card portrait-card--back">
            <div className="portrait-card-label portrait-card-label--back">
              <span className="portrait-card-label-main">{portraitStack.backLabel}</span>
            </div>
          </div>
          <div className="portrait-card portrait-card--middle">
            <div className="portrait-card-label portrait-card-label--middle">
              <span className="portrait-card-label-main">{portraitStack.middleLabel}</span>
            </div>
          </div>
          <div className="portrait-card portrait-card--front">
            <span className="portrait-initials">
              <Image
                src={profile.avatar}
                alt=""
                fill
                sizes="112px"
                className="portrait-avatar"
                priority
              />
            </span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </div>
        </div>
      </section>
      <section className="skills-marquee" aria-label="Technology skills">
        <div>{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}</div>
      </section>
    </main>
  );
}
