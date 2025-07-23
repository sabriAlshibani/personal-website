import {
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { Skill } from "./types/skills";

export const skillsData: Skill[] = [
  { name: "React", level: 20, icon: FaReact },
  { name: "CSS3", level: 81, icon: FaCss3Alt },
  { name: "JavaScript", level: 66, icon: FaJsSquare },
  { name: "TypeScript", level: 50, icon: SiTypescript },
  { name: "HTML5", level: 90, icon: FaHtml5 },
  { name: "Node.js", level: 20, icon: FaNodeJs },
  { name: "Git", level: 65, icon: FaGitAlt },
  { name: "Sass", level: 70, icon: FaSass },
  { name: "Tailwind CSS", level: 75, icon: SiTailwindcss },
  { name: "Next.js", level: 60, icon: SiNextdotjs },
];
