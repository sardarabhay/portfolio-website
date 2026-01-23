"use client";
import { ArrowRight, Check, Copy, Home, Search, Settings, SquarePlus, Code2, Database, Server, Container, Cloud, GitBranch, Palette, Braces, Box, FileJson, Blocks, Layers, CircleDot } from "lucide-react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam"
import { Meteors } from "@/components/ui/meteors";
import { Marquee } from "@/components/ui/marquee"

function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(event) => {
        if (event.target === overlayRef.current) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
    >
      <div className="w-full max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Resume</h2>
          <button
            onClick={onClose}
            className="rounded-full px-2 py-1 text-neutral-400 hover:text-white"
            aria-label="Close resume"
          >
            ×
          </button>
        </div>
        <div className="mt-3 h-[70vh] w-full overflow-hidden rounded-lg border border-zinc-800 bg-black">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="h-full w-full"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-neutral-500 px-4 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-zinc-800 hover:text-neutral-400 active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

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
        <main className="p-8 pb-32 bg-zinc-900 border border-zinc-800 rounded-lg ">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-neutral-500" />
              <span className="text-lg font-medium text-neutral-200">
                Full-Stack Developer
              </span>
            </div>
            <div className="flex justify-center items-center rounded-full md:bg-emerald-500/10 md:px-3 md:py-1 ">
              <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] " />
              <p className="hidden md:block ml-2 text-sm text-emerald-500 ">Available for Hire</p>
            </div>


          </div>
          <section className="mb-10 mt-5 flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 md:mt-10">
            <div className="flex justify-center items-center">
              <div className="size-40 flex justify-center rounded-full border-8 border-black bg-zinc-900 overflow-hidden shadow-lg z-20">
                <Image
                  src="/profile_photo.png"
                  alt="Project Logo"
                  className="h-full w-full object-cover"
                  width={200}
                  height={200}
                />
              </div>

            </div>


            <div>

              <div className="flex flex-col items-center mt-5 gap-4">
                <h1 className="text-white font-bold text-3xl">
                  I'm Abhay Sardar
                </h1>
                <p className="text-neutral-400 font-medium text-lg text-center">I'm a Front-end Developer from Pune, India</p>
                <p className="text-neutral-400 text-center max-w-xl">
                  I specialize in creating visually appealing and user-friendly web
                  applications using the latest front-end technologies. My passion
                  lies in crafting seamless user experiences that leave a lasting
                  impression.
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setResumeOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-500 text-neutral-900 rounded-lg hover:text-neutral-400 hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer"
                  >
                    <SquarePlus className="size-4" />
                    <span className="text-sm font-medium">View Resume</span>
                  </button>
                  <Button
                    onClick={copyEmail}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800  hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                    <span className="text-sm font-medium">
                      {copied ? "Copied!" : "Copy Email"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>

          </section>

          <div className="flex flex-col bg-zinc-800 border border-zinc-700 rounded-lg mt-10 p-6 gap-6 relative z-20 overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-neutral-500" />
              <span className="text-lg font-medium text-neutral-200">
                Tech Stack
              </span>
            </div>

            {/* Frontend Technologies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code2 className="size-4 text-blue-400" />
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Frontend</h3>
              </div>
              <Marquee pauseOnHover className="[--duration:25s]">
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                  <CircleDot className="size-4 text-blue-400" />
                  <span className="text-neutral-300 font-medium">Next.js</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                  <Layers className="size-4 text-blue-400" />
                  <span className="text-neutral-300 font-medium">React</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                  <Braces className="size-4 text-blue-400" />
                  <span className="text-neutral-300 font-medium">TypeScript</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                  <Palette className="size-4 text-blue-400" />
                  <span className="text-neutral-300 font-medium">Tailwind CSS</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                  <FileJson className="size-4 text-blue-400" />
                  <span className="text-neutral-300 font-medium">JavaScript</span>
                </div>
              </Marquee>
            </div>

            {/* Backend Technologies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Database className="size-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Backend</h3>
              </div>
              <Marquee pauseOnHover reverse className="[--duration:25s]">
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors">
                  <Server className="size-4 text-emerald-400" />
                  <span className="text-neutral-300 font-medium">Node.js</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors">
                  <Blocks className="size-4 text-emerald-400" />
                  <span className="text-neutral-300 font-medium">Express.js</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors">
                  <Database className="size-4 text-emerald-400" />
                  <span className="text-neutral-300 font-medium">Prisma</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors">
                  <Database className="size-4 text-emerald-400" />
                  <span className="text-neutral-300 font-medium">PostgreSQL</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors">
                  <Server className="size-4 text-emerald-400" />
                  <span className="text-neutral-300 font-medium">REST APIs</span>
                </div>
              </Marquee>
            </div>

            {/* DevOps & Tools */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Box className="size-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">DevOps & Tools</h3>
              </div>
              <Marquee pauseOnHover className="[--duration:20s]">
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-purple-500/30 transition-colors">
                  <GitBranch className="size-4 text-purple-400" />
                  <span className="text-neutral-300 font-medium">Git</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-purple-500/30 transition-colors">
                  <Container className="size-4 text-purple-400" />
                  <span className="text-neutral-300 font-medium">Docker</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-purple-500/30 transition-colors">
                  <Cloud className="size-4 text-purple-400" />
                  <span className="text-neutral-300 font-medium">AWS</span>
                </div>
                <div className="mx-3 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-4 py-2 border border-zinc-700/50 hover:border-purple-500/30 transition-colors">
                  <Code2 className="size-4 text-purple-400" />
                  <span className="text-neutral-300 font-medium">VS Code</span>
                </div>
              </Marquee>
            </div>

          </div>




          <div className="flex flex-col bg-zinc-800 border border-zinc-700 rounded-lg mt-10 p-4 gap-6 relative z-20">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-neutral-500" />
              <span className="text-lg font-medium text-neutral-200">
                Projects
              </span>
            </div>

            <div className=" project-card flex flex-col gap-4 relative  w-full overflow-hidden">
              <div className=" mt-2 p-4 r flex flex-col gap-4 sm:flex-row">
                <div className="mx-auto sm:mx-0 size-16 shrink-0 rounded-full border-8 border-black bg-zinc-900 overflow-hidden shadow-lg">
                  <Image
                    src="/logo_healthcare.png"
                    alt="Project Logo"
                    className="h-full w-full object-cover "
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white text-center font-bold text-lg sm:text-xl">
                    Synapse
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base">
                    A comprehensive healthcare application that allows users to
                    book appointments, access medical records, and communicate
                    with healthcare professionals.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  className="w-full  sm:w-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800  hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
                >
                  <span className="text-sm font-medium">
                    Github
                  </span>
                  <ArrowRight className="size-4" />
                </Button>

                <Button
                  className="w-full  sm:w-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800  hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
                >
                  <span className="text-sm font-medium">
                    Live Demo
                  </span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              <BorderBeam
                duration={6}
                size={150}
                colorFrom="#ffffff"
                colorTo="#10b981"
                borderWidth={1.5} />

            </div>

            <div className="  project-card flex flex-col gap-4 relative  w-full overflow-hidden ">
              <div className=" mt-2 p-4 r flex flex-col gap-4 sm:flex-row">
                <div className="mx-auto sm:mx-0 size-16 shrink-0 rounded-full border-8 border-black bg-zinc-900 overflow-hidden shadow-lg">
                  <Image
                    src="/logo_ecommerce.png"
                    alt="Project Logo"
                    className="h-full w-full object-cover"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white text-center font-bold text-lg sm:text-xl">
                    CartFlow
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base">
                    A comprehensive healthcare application that allows users to
                    book appointments, access medical records, and communicate
                    with healthcare professionals.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  className="w-full  sm:w-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800  hover:text-neutral-400 rounded-lg text-white  transition-all active:scale-95"
                >
                  <span className="text-sm font-medium">
                    Github
                  </span>
                  <ArrowRight className="size-4" />
                </Button>

                <Button
                  className="w-full  sm:w-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800  hover:text-neutral-400 rounded-lg text-white  transition-all active:scale-95"
                >
                  <span className="text-sm font-medium">
                    Live Demo
                  </span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              <BorderBeam
                duration={6}
                size={150}
                colorFrom="#ffffff"
                colorTo="#10b981"
                borderWidth={1.5} />
            </div>


          </div>

          <div className="flex flex-col items-center mt-15 gap-4">
            <h1 className="text-white font-bold text-3xl">
              Get in Touch
            </h1>
            <p className="text-neutral-400 font-medium text-lg text-center">I'm open to full-time opportunities and collaborations.</p>
            <div className="flex gap-2">
              <Button
                className="flex items-center gap-2 px-4 py-2 bg-neutral-500 text-neutral-900 rounded-lg  hover:text-neutral-400 hover:bg-zinc-800 transition-all active:scale-95"
              >
                <SquarePlus className="size-4" />
                <span className="text-sm font-medium">Hire Me</span>
              </Button>
              <Button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800  hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                <span className="text-sm font-medium">
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </Button>
            </div>
          </div>

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
