"use client";
import { Home, Search, Settings } from "lucide-react"
import { useState } from "react";

import { Dock, DockIcon } from "@/components/ui/dock"
import { Meteors } from "@/components/ui/meteors";
import { ResumeModal } from "@/components/ResumeModal";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sardarabhay90@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-900">
      <div className="relative mx-auto max-w-3xl w-full min-h-screen bg-black px-4 sm:px-8">
        <main className="p-8 pb-32 bg-zinc-900 border border-zinc-800 rounded-lg">

          <HeroSection
            onViewResume={() => setResumeOpen(true)}
            onCopyEmail={copyEmail}
            copied={copied}
          />

          <TechStack />

          <ProjectsSection />

          <ContactSection
            onViewResume={() => setResumeOpen(true)}
            onCopyEmail={copyEmail}
            copied={copied}
          />

          <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
        </main>

        <Dock direction="middle" className="fixed inset-x-0 bottom-0 flex justify-center items-center z-50 bg-zinc-900 border border-zinc-800 mb-5">
          <DockIcon>
            <Home className="size-6 text-neutral-400 hover:text-white transition-colors" />
          </DockIcon>
          <DockIcon>
            <Settings className="size-6 text-neutral-400 hover:text-white transition-colors" />
          </DockIcon>
          <DockIcon>
            <Search className="size-6 text-neutral-400 hover:text-white transition-colors" />
          </DockIcon>
        </Dock>
      </div>
      <Meteors number={30} angle={215} />
    </div>
  );
}
