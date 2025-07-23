import { Contact } from "@/data/types/contact";

export default function ContactCard({ label, href, icon: Icon }: Contact) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-3 text-muted bg-card border border-base hover-border p-6 rounded-xl transition duration-300 text-center"
    >
      <div className="text-3xl text-primary">
        <Icon />
      </div>
      <span className="text-base font-medium">{label}</span>
    </a>
  );
}
