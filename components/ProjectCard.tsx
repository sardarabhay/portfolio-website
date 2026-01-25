import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  logoSrc: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export function ProjectCard({ title, description, logoSrc, githubUrl, liveDemoUrl }: ProjectCardProps) {
  return (
    <div className="project-card flex flex-col gap-4 relative w-full overflow-hidden">
      <div className="mt-2 p-4 flex flex-col gap-4 sm:flex-row">
        <div className="mx-auto sm:mx-0 size-16 shrink-0 rounded-full border-8 border-black bg-zinc-900 overflow-hidden shadow-lg">
          <Image
            src={logoSrc}
            alt={`${title} Logo`}
            className="h-full w-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-center font-bold text-lg sm:text-xl">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        {githubUrl && (
          <Button
            asChild
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-sm font-medium">Github</span>
              <ArrowRight className="size-4" />
            </a>
          </Button>
        )}

        {liveDemoUrl && (
          <Button
            asChild
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
          >
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-sm font-medium">Live Demo</span>
              <ArrowRight className="size-4" />
            </a>
          </Button>
        )}
      </div>

      <BorderBeam
        duration={6}
        size={150}
        colorFrom="#ffffff"
        colorTo="#10b981"
        borderWidth={1.5}
      />
    </div>
  );
}
