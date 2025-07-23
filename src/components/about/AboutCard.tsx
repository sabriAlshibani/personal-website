import { AboutItem } from "@/data/types/about";

export default function AboutCard({ title, description, icon: Icon }: AboutItem) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-blue-700/50 transition ">
      <div className="flex items-center gap-4 mb-3">
        <Icon className="text-primary w-6 h-6" />
        <h3 className="text-lg md:text-xl font-semibold text-color">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-muted">{description}</p>
    </div>
  );
}
