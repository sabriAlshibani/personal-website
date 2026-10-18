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

import { aboutData } from "@/data/about"
import type { AboutData } from "@/types/about"

export const defaultInterests = aboutData.interests

const traitIcons = {
  Lightbulb,
  Zap,
  Users,
}

interface AboutProps {
  interests?: string[]
  data?: AboutData
}

export function About({ interests = defaultInterests, data = aboutData }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24">
      <Container>
        {/* Label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
          {data.title}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Bio & Traits */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {data.subtitle}
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              {data.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Trait Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-foreground">
              {data.traits.map((trait) => {
                const IconComponent = traitIcons[trait.icon] || Lightbulb
                return (
                  <div
                    key={trait.label}
                    className="flex items-center gap-1.5 rounded-md border border-border/70 bg-card px-2.5 py-1.5 shadow-2xs"
                  >
                    <IconComponent className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{trait.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Col 2: Workspace Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-border/80 bg-muted shadow-xs">
              <Image
                src={data.workspaceImage.src}
                alt={data.workspaceImage.alt}
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
                    {data.education.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-1">
                <h4 className="text-xs font-medium text-foreground">
                  {data.education.institution}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {data.education.field}
                </p>
                {data.education.level && (
                  <p className="text-[11px] text-muted-foreground/80 mt-0.5">
                    ({data.education.level})
                  </p>
                )}
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

