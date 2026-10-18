import { ContactInfo } from "@/types/contact"

export const contactData: ContactInfo = {
  title: "Let's Work Together",
  subtitle:
    "Have a project in mind or just want to say hi? Feel free to reach out — I'd love to hear from you.",
  email: "email@example.com",
  location: "Yemen",
  githubUrl: "https://github.com",
  githubDisplay: "github.com/yourname",
  linkedinUrl: "https://linkedin.com",
  linkedinDisplay: "linkedin.com/in/yourname",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      label: "GitHub Profile",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      label: "LinkedIn Profile",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:email@example.com",
      label: "Send Email",
      icon: "email",
    },
  ],
}

