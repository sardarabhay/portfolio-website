import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "Synapse",
      description: "A comprehensive healthcare application that allows users to book appointments, access medical records, and communicate with healthcare professionals.",
      logoSrc: "/logo_healthcare.png",
      githubUrl: "#",
      liveDemoUrl: "#"
    },
    {
      title: "CartFlow",
      description: "A comprehensive healthcare application that allows users to book appointments, access medical records, and communicate with healthcare professionals.",
      logoSrc: "/logo_ecommerce.png",
      githubUrl: "#",
      liveDemoUrl: "#"
    }
  ];

  return (
    <div className="flex flex-col bg-zinc-800 border border-zinc-700 rounded-lg mt-10 p-4 gap-6 relative z-20">
      <div className="flex items-center gap-3">
        <div className="size-2 rounded-full bg-neutral-500" />
        <span className="text-lg font-medium text-neutral-200">
          Projects
        </span>
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          logoSrc={project.logoSrc}
          githubUrl={project.githubUrl}
          liveDemoUrl={project.liveDemoUrl}
        />
      ))}
    </div>
  );
}
