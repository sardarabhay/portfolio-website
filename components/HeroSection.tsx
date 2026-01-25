"use client";
import { SquarePlus, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

interface HeroSectionProps {
  onViewResume: () => void;
  onCopyEmail: () => void;
  copied: boolean;
}

export function HeroSection({ onViewResume, onCopyEmail, copied }: HeroSectionProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-neutral-500 dark:bg-neutral-500 bg-gray-400" />
          <span className="text-lg font-medium text-gray-700 dark:text-neutral-200">
            Full-Stack Developer
          </span>
        </div>
        <div className="flex justify-center items-center rounded-full md:bg-emerald-500/10 md:px-3 md:py-1">
          <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
          <p className="hidden md:block ml-2 text-sm text-emerald-500">Available for Hire</p>
        </div>
      </div>

      <section className="mb-10 mt-5 flex flex-col md:flex-row md:justify-center md:items-center md:gap-10 md:mt-10">
        <div className="flex justify-center items-center">
          <div className="relative size-40 rounded-full z-20">
            <div className="absolute inset-0 rounded-full border-8 border-white dark:border-black bg-gray-100 dark:bg-zinc-900 overflow-hidden shadow-lg">
              <Image
                src="/profile_photo.png"
                alt="Profile Photo"
                className="h-full w-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <BorderBeam
              duration={6}
              size={160}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={160}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mt-5 gap-4">
            <h1 className="text-black dark:text-white font-bold text-3xl">
              I'm Abhay Sardar
            </h1>
            <p className="text-gray-600 dark:text-neutral-400 font-medium text-lg text-center">
              I'm a Full-Stack Developer from Pune, India
            </p>
            <p className="text-gray-600 dark:text-neutral-400 text-center max-w-xl">
              I specialize in building end-to-end web applications using modern
              technologies across the full stack. From crafting intuitive user
              interfaces to designing robust backend systems, I create scalable
              solutions that deliver exceptional user experiences.
            </p>

            <div className="flex gap-2">
              <button
                onClick={onViewResume}
                className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-neutral-500 text-gray-700 dark:text-neutral-900 rounded-lg hover:text-gray-900 dark:hover:text-neutral-400 hover:bg-gray-400 dark:hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer"
              >
                <SquarePlus className="size-4" />
                <span className="text-sm font-medium">View Resume</span>
              </button>
              <Button
                onClick={onCopyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 hover:text-gray-900 dark:hover:text-neutral-400 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
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
    </>
  );
}
