import { skillsData } from "@/data/skillsData";
import SectionTitle from "../SectionHeading";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-color">
      <SectionTitle
        label="My Skills"
        heading="Proficient in Frontend Technologies"
        highlight="Frontend"
        align="center"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {skillsData.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
