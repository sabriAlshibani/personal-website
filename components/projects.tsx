"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  codeUrl: string
  demoUrl: string
}

export const defaultProjects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A modern task management app with real-time collaboration and team features.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/project-taskflow.jpeg",
    codeUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "TravelMate",
    description:
      "A mobile app for discovering and exploring amazing destinations around the world.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    image: "/project-travelmate.jpeg",
    codeUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "FinanceTrack",
    description:
      "A web application for personal finance management with detailed analytics and reports.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/project-financetrack.jpeg",
    codeUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
]

interface ProjectsProps {
  projects?: Project[]
}

export function Projects({ projects = defaultProjects }: ProjectsProps) {
  const [activeProjectIndex, setActiveProjectIndex] = React.useState(0)

  return (
    <section id="projects" className="scroll-mt-24">
      <Container>
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
              Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Selected Projects
            </h2>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group"
          >
            View All Projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Desktop Grid of 3 Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden flex flex-col justify-between border-border/80 bg-card/60 hover:border-foreground/20 transition-all duration-200 hover:shadow-sm"
            >
              <div>
                {/* Mockup Preview Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Badges */}
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] font-normal px-2 py-0.5 rounded-sm border border-border/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Footer Action Links */}
              <CardFooter className="pt-0 flex items-center gap-4 text-xs text-muted-foreground border-t border-border/30 mt-auto py-3">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  View Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile Single Card Carousel / Stack */}
        <div className="md:hidden">
          <Card className="overflow-hidden border-border/80 bg-card/60 shadow-xs">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/60">
              <Image
                src={projects[activeProjectIndex].image}
                alt={projects[activeProjectIndex].title}
                fill
                className="object-cover object-center"
              />
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">
                {projects[activeProjectIndex].title}
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                {projects[activeProjectIndex].description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-4">
              <div className="flex flex-wrap gap-1.5">
                {projects[activeProjectIndex].tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] font-normal px-2 py-0.5 rounded-sm border border-border/40"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 py-3">
              <div className="flex items-center gap-4">
                <a
                  href={projects[activeProjectIndex].codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  View Code
                </a>
                <a
                  href={projects[activeProjectIndex].demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Carousel Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveProjectIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeProjectIndex === idx
                    ? "w-6 bg-foreground"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects

