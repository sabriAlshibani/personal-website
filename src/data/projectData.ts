import { Project } from "./types/project";

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal website built with Next.js and Tailwind CSS.",
    image: "/images/pro-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://yourportfolio.com",
    github: "https://github.com/username/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "Full-featured e-commerce site with cart, checkout, and product management.",
    image: "/images/pro-2.jpg",
    technologies: ["React", "Redux", "Firebase"],
    link: "https://storedemo.com",
    github: "https://github.com/username/ecommerce-store",
  },
  {
    title: "Blog Platform",
    description: "Markdown-based blogging platform with admin dashboard.",
    image: "/images/pro-3.jpg",
    technologies: ["Next.js", "Contentlayer", "Tailwind CSS"],
    link: "https://blogdemo.com",
    github: "https://github.com/username/blog-platform",
  },
];
