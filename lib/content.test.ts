import { describe, expect, it } from "vitest";
import { profile, projects } from "@/lib/content";

describe("project content", () => {
  it("contains the four deployed portfolio projects and secure destinations", () => {
    expect(projects.map((project) => project.title)).toEqual([
      "Presynx",
      "Yujix",
      "Trust Up",
      "Ongoing Forge",
    ]);

    for (const project of projects) {
      expect(project.liveUrl).toMatch(/^https:\/\//);
      expect(project.technologies.length).toBeGreaterThan(2);
      expect(project.projectType.length).toBeGreaterThan(0);
      expect(project.overview.length).toBeGreaterThan(20);
      expect(project.productCapabilities.length).toBeGreaterThanOrEqual(2);
      expect(project.frontendDetails.length).toBeGreaterThan(20);
      expect(project.frontendArchitecture.length).toBeGreaterThanOrEqual(2);
      expect(project.frontendFeatures.length).toBeGreaterThanOrEqual(2);
      expect(project.frontendStack.length).toBeGreaterThanOrEqual(3);
      expect(project.securityReliability.length).toBeGreaterThanOrEqual(1);
      expect(project.notes.length).toBeGreaterThan(20);
    }

    expect(projects[0].technologies).toContain("Dio");
    expect(projects[0].role).toContain("OpenAI Codex");
  });

  it("includes backend details for full-stack projects", () => {
    const presynx = projects.find((project) => project.slug === "presynx");
    const forge = projects.find((project) => project.slug === "ongoing-forge");
    const yujix = projects.find((project) => project.slug === "yujix");
    const trustUp = projects.find((project) => project.slug === "trust-up");

    for (const project of [presynx, forge]) {
      expect(project?.backendDetails).toBeTruthy();
      expect(project?.backendArchitecture?.length).toBeGreaterThanOrEqual(2);
      expect(project?.backendCapabilities?.length).toBeGreaterThanOrEqual(2);
      expect(project?.backendStack?.length).toBeGreaterThanOrEqual(3);
    }

    expect(yujix?.backendDetails).toBeUndefined();
    expect(trustUp?.backendDetails).toBeUndefined();
  });

  it("uses donor profile contact and availability details", () => {
    expect(profile.phone).toBe("+91 7990880618");
    expect(profile.availability).toContain("Flutter roles");
    expect(profile.socials.map((social) => social.label)).toEqual(["GitHub", "LinkedIn", "Email"]);
  });
});
