import { Project } from "@/data/types/project";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-card border border-base hover-border rounded-xl overflow-hidden shadow-lg hover:shadow-blue-700/30 transition duration-300">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-color mb-2">{project.title}</h3>
        <p className="text-muted text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-color hover:text-blue-700"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-color hover:text-blue-700"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
