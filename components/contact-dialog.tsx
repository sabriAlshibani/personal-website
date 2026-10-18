"use client"

import * as React from "react"
import { Send, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactDialogProps {
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function ContactDialog({
  children,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: ContactDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const setOpen = isControlled ? setControlledOpen! : setInternalOpen

  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate send or mailto trigger
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger render={children as React.ReactElement} />}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Let&apos;s Work Together</DialogTitle>
          <DialogDescription>
            Have a project in mind, an opportunity, or just want to say hi? Send me a message below.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <CheckCircle2 className="h-8 w-8 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold">Message Sent!</h4>
            <p className="text-sm text-muted-foreground">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-foreground">
                Your Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-foreground">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or inquiry..."
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full mt-2 gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

