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
  techStack?: string[];
}

export function ProjectCard({ title, description, logoSrc, githubUrl, liveDemoUrl, techStack }: ProjectCardProps) {
  return (
    <div className="project-card flex flex-col gap-4 relative w-full overflow-hidden bg-white dark:bg-transparent border border-gray-300 dark:border-zinc-700 rounded-lg p-4">
      <div className="mt-2 flex flex-col gap-4 sm:flex-row">
        <div className="mx-auto sm:mx-0 size-16 shrink-0 rounded-full border-8 border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 overflow-hidden shadow-lg">
          <Image
            src={logoSrc}
            alt={`${title} Logo`}
            className="h-full w-full object-cover"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-black dark:text-white text-center sm:text-left font-bold text-lg sm:text-xl">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        {githubUrl && (
          <Button
            asChild
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 hover:text-gray-900 dark:hover:text-neutral-400 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
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
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 hover:text-gray-900 dark:hover:text-neutral-400 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
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
