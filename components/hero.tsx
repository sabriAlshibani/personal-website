"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/contact-dialog"

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24">
      <Container>
        {/* Mobile Avatar View */}
        <div className="flex flex-col items-center text-center md:hidden mb-8">
          <div className="relative mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-b from-muted/60 to-muted/20 p-2 ring-1 ring-border/80 shadow-md">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-muted/40">
              <Image
                src="/personal-image.png"
                alt="Developer Portrait"
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </div>
          </div>

          <span className="text-base sm:text-lg font-medium text-muted-foreground mb-1.5 block">
            Hello, I&apos;m <span className="font-bold text-foreground">Sabri Alshibani</span>
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Full-Stack Developer
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            I build modern web and mobile applications with clean code,
            scalable architecture, and great user experiences. Passionate
            about turning ideas into real products.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              render={<a href="#projects" />}
              size="2xl"
              className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-xl gap-2.5 shadow-md hover:shadow-lg transition-all"
            >
              View My Projects <ArrowRight className="h-5 w-5" />
            </Button>
            <ContactDialog>
              <Button
                variant="outline"
                size="2xl"
                className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-xl border-2 transition-all"
              >
                Contact Me
              </Button>
            </ContactDialog>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:email@example.com"
              className="transition-colors hover:text-foreground p-1"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Desktop Hero View */}
        <div className="hidden md:grid md:grid-cols-12 md:items-center gap-8 lg:gap-12 min-h-[460px]">
          {/* Left Content */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-base sm:text-lg lg:text-xl font-medium text-muted-foreground tracking-wide mb-2 block">
              Hello, I&apos;m <span className="font-bold text-foreground">Sabri Alshibani</span>
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Full-Stack Developer
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">
              I build modern web and mobile applications with clean code,
              scalable architecture, and great user experiences. Passionate
              about turning ideas into real products.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex items-center gap-4">
              <Button
                render={<a href="#projects" />}
                size="2xl"
                className="h-14 px-8 text-base lg:text-lg font-semibold rounded-xl gap-3 shadow-md hover:shadow-lg transition-all"
              >
                View My Projects <ArrowRight className="h-5 w-5" />
              </Button>
              <ContactDialog>
                <Button
                  variant="outline"
                  size="2xl"
                  className="h-14 px-8 text-base lg:text-lg font-semibold rounded-xl border-2 transition-all"
                >
                  Contact Me
                </Button>
              </ContactDialog>
            </div>

            {/* Socials Row */}
            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-1.5 transition-colors hover:bg-muted hover:text-foreground"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-1.5 transition-colors hover:bg-muted hover:text-foreground"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:email@example.com"
                className="rounded-md p-1.5 transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

            {/* Right Illustration */}
            <div className="md:col-span-5 lg:col-span-6 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] lg:max-w-[500px] xl:max-w-[540px] aspect-square">
                <Image
                  src="/personal-image.png"
                  alt="Developer Illustration"
                  fill
                  className="object-contain grayscale select-none pointer-events-none"
                  priority
                />
              </div>
            </div>
          </div>
      </Container>
    </section>
  )
}

export default Hero

