import { projectsData } from "@/data/projectData";
import SectionTitle from "../SectionHeading";
import ProjectCard from "./ProjectCard";
import Reval from "../Reval";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-6xl mx-auto">
        <Reval>
          <SectionTitle
            label="My Work"
            heading="Recent Projects"
            highlight="Projects"
            align="center"
          />
        </Reval>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {projectsData.map((project, index) => (
            <Reval key={index} delay={index * 0.2} scale={0.9} duration={0.4}>
            <ProjectCard project={project} />
            </Reval>
          ))}
        </div>
      </div>
    </section>
  );
}
