import { FaLaptopCode, FaUserGraduate, FaGlobe } from "react-icons/fa";
import { AboutItem } from "./types/about";

export const aboutParagraph = `
  I'm a passionate Frontend Developer with a strong focus on creating engaging and performant user experiences.
  I love turning ideas into reality through clean and responsive UI using modern technologies like React, TypeScript, and Tailwind CSS.
`;

export const aboutData: AboutItem[] = [
  {
    title: "Frontend Developer",
    description: "Specializing in building modern, responsive, and accessible UIs.",
    icon: FaLaptopCode,
  },
  {
    title: "Lifelong Learner",
    description: "I continuously explore new tools, languages, and best practices.",
    icon: FaUserGraduate,
  },
  {
    title: "Global Perspective",
    description: "Working with clients and teams across the world remotely.",
    icon: FaGlobe,
  },
];
