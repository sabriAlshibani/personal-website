import { Skill } from "@/data/types/skills";

export default function SkillCard({ name, icon: Icon }: Skill) {
  return (
    <div className="bg-card p-6 rounded-lg text-center text-color border border-base hover-border flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300">
      <div className="text-primary mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
}
