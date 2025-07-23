import { aboutData, aboutParagraph } from "@/data/aboutData";
import AboutCard from "./AboutCard";
import SectionTitle from "../SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-22 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="About Me"
          heading="Who I Am and What I Do"
          highlight="About"
          align="left"
        />

        <p className="text-muted text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          {aboutParagraph}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutData.map((item, index) => (
            <AboutCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
