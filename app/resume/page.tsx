import type { Metadata } from "next";
import { ResumePageContent } from "@/components/resume-page-content";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return <ResumePageContent />;
}
