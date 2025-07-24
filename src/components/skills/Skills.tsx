import { skillsData } from "@/data/skillsData";
import SectionTitle from "../SectionHeading";
import SkillCard from "./SkillCard";
import { motion } from "motion/react";
import Reval from "../Reval";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-6xl mx-auto">
        <Reval>
          <SectionTitle
            label="My Skills"
            heading="Proficient in Frontend Technologies"
            highlight="Frontend"
            align="center"
          />
        </Reval>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {skillsData.map((item, index) => (
            <Reval key={index} delay={index * 0.1} scale={0.9} duration={0.4} >
            <SkillCard {...item} />
            </Reval>
          ))}
        </div>
      </div>
    </section>
  );
}
