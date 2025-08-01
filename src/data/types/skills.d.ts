import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  level?: number; // Optional now
}
