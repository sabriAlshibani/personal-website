"use client"

import * as React from "react"
import { Mail, MapPin, Send, ArrowRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/contact-dialog"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container>
        {/* Label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
          Contact
        </span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          {/* Left: Message intro & Send Message button */}
          <div className="md:col-span-6 flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Let&apos;s Work Together
            </h2>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
              Have a project in mind or just want to say hi? Feel free to reach
              out — I&apos;d love to hear from you.
            </p>

            <ContactDialog>
              <Button className="gap-2 px-5 py-2" size={'2xl'}>
                <Send className="h-4 w-4" />
                Send Message
                <ArrowRight className="h-4 w-4" />
              </Button>
            </ContactDialog>
          </div>

          {/* Right: Contact details list */}
          <div className="md:col-span-6 flex flex-col gap-3 font-mono text-xs sm:text-sm">
            <a
              href="mailto:email@example.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <Mail className="h-4 w-4 shrink-0 text-foreground" />
              <span>email@example.com</span>
            </a>

            <div className="flex items-center gap-3 text-muted-foreground p-1">
              <MapPin className="h-4 w-4 shrink-0 text-foreground" />
              <span>Yemen</span>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <GithubIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span>github.com/yourname</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <LinkedinIcon className="h-4 w-4 shrink-0 text-foreground" />
              <span>linkedin.com/in/yourname</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact

