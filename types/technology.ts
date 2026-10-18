export type TechCategory = "frontend" | "backend" | "database" | "mobile" | "tools"

export interface TechItem {
  name: string
  label: string
  category: TechCategory
  image: string
  invertInDark?: boolean
}

