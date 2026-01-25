import { Code2, Database, Server, Container, Cloud, GitBranch, Palette, Braces, Box, FileJson, Blocks, Layers, CircleDot } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function TechStack() {
  return (
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
  );
}
