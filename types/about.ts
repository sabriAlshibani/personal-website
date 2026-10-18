export interface TraitItem {
  label: string
  icon: "Lightbulb" | "Zap" | "Users"
}

export interface EducationItem {
  period: string
  institution: string
  field: string
  level?: string
}

export interface AboutData {
  title: string
  subtitle: string
  bio: string[]
  traits: TraitItem[]
  workspaceImage: {
    src: string
    alt: string
  }
  education: EducationItem
  interests: string[]
}

