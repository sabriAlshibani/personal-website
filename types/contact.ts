export interface SocialLink {
  name: string
  url: string
  label: string
  icon?: string
}

export interface ContactInfo {
  title: string
  subtitle: string
  email: string
  location: string
  githubUrl: string
  githubDisplay: string
  linkedinUrl: string
  linkedinDisplay: string
  socialLinks: SocialLink[]
}

