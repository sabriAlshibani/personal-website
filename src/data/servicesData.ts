import { Service } from "./types/services";
import {
  Palette,
  Smartphone,
  Code,
  Monitor,
  Layers,
  PenTool,
} from "lucide-react";

export const servicesData: Service[] = [
  {
    title: "UI Design",
    description: "Creating intuitive, clean, and user-focused interfaces.",
    icon: Palette,
  },
  {
    title: "Responsive Design",
    description: "Ensuring seamless experience across all devices.",
    icon: Smartphone,
  },
  {
    title: "Frontend Development",
    description:
      "Building fast and accessible websites using modern frameworks.",
    icon: Code,
  },
  {
    title: "Web Performance",
    description: "Optimizing sites for speed, SEO, and best practices.",
    icon: Monitor,
  },
  {
    title: "Component Design",
    description: "Building scalable and reusable design systems.",
    icon: Layers,
  },
  {
    title: "Visual Branding",
    description: "Translating brand values into pixel-perfect visuals.",
    icon: PenTool,
  },
];
