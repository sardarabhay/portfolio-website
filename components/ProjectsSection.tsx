import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "Synapse",
      description: "A modern healthcare patient management application built with Next.js 16, enabling patients to easily register, book, and manage their medical appointments. The system includes an administrative dashboard for healthcare staff to manage appointments efficiently.",
      logoSrc: "/logo_healthcare.png",
      githubUrl: "https://github.com/sardarabhay/healthcare_synapse",
      liveDemoUrl: "https://healthcare-synapse.vercel.app/"
    },
    {
      title: "CartFlow",
      description: "A full-stack e-commerce application built with React, TypeScript, and Node.js/Express. This project demonstrates a complete shopping cart flow including product browsing, cart management, checkout, order tracking, and order history.",
      logoSrc: "/logo_ecommerce.png",
      githubUrl: "https://github.com/sardarabhay/ecommerce_cartflow",
      liveDemoUrl: "http://ecommerce-project-env.eba-kdqziby3.eu-north-1.elasticbeanstalk.com/"
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
