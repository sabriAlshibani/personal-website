import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-card border border-base hover-border rounded-xl p-6 hover:shadow-lg transition-all">
      {Icon && <Icon className="w-8 h-8 text-primary mb-4" />}
      <h3 className="text-xl font-semibold text-color mb-2">{title}</h3>
      <p className="text-muted text-sm">{description}</p>
    </div>
  );
}