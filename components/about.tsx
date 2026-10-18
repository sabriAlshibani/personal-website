import * as React from "react"
import Image from "next/image"
import { GraduationCap, Heart, Lightbulb, Zap, Users } from "lucide-react"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const defaultInterests = [
  "Web Development",
  "Mobile Development",
  "System Design",
  "Open Source",
  "Technology",
  "Reading",
  "Photography",
]

interface AboutProps {
  interests?: string[]
}

export function About({ interests = defaultInterests }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24">
      <Container>
        {/* Label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
          About Me
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Bio & Traits */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              A Little About Me
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate Full-Stack Developer from Yemen,
                currently studying at university. I love building useful
                software, learning new technologies, and solving real-world
                problems with code.
              </p>
              <p>
                I enjoy working with modern web and mobile technologies,
                exploring system design, and improving my skills every day. For
                me, programming isn&apos;t just a job — it&apos;s a way to
                think, create, and make an impact.
              </p>
            </div>

            {/* Trait Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-foreground">
              <div className="flex items-center gap-1.5 rounded-md border border-border/70 bg-card px-2.5 py-1.5 shadow-2xs">
                <Lightbulb className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border/70 bg-card px-2.5 py-1.5 shadow-2xs">
                <Zap className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Fast Learner</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border/70 bg-card px-2.5 py-1.5 shadow-2xs">
                <Users className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Team Player</span>
              </div>
            </div>
          </div>

          {/* Col 2: Workspace Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-border/80 bg-muted shadow-xs">
              <Image
                src="/workspace.jpeg"
                alt="Workspace desk setup with laptop, notebook and coffee"
                fill
                className="object-cover object-center grayscale contrast-110"
              />
            </div>
          </div>

          {/* Col 3: Education & Interests Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Education Card */}
            <Card className="border-border/80 bg-card/60 shadow-2xs">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-foreground" />
                    <CardTitle className="text-sm font-semibold">
                      Education
                    </CardTitle>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    2024 — Present
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-1">
                <h4 className="text-xs font-medium text-foreground">
                  University
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Computer Science
                </p>
                <p className="text-[11px] text-muted-foreground/80 mt-0.5">
                  (Currently Level 3)
                </p>
              </CardContent>
            </Card>

            {/* Interests Card */}
            <Card className="border-border/80 bg-card/60 shadow-2xs">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-foreground" />
                  <CardTitle className="text-sm font-semibold">
                    Interests
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="text-[11px] font-normal px-2.5 py-1 rounded-md border border-border/50 bg-muted/50 hover:bg-muted"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About

