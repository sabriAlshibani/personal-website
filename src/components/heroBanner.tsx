import { heroData } from "@/data/heroData";
import Button from "./Button";
import { FolderDot, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reval from "./Reval";

export default function HeroBanner() {
  return (
    <section id="hero" className="w-full min-h-screen bg-color ">
      <div className="max-w-6xl mx-auto px-4 pt-32">
        <Reval>
      <SectionHeading
          as="h1"
          heading={heroData.title}
          highlight={"Front-end"}
        />

        <p className="text-sm md:text-lg lg:text-2xl text-muted leading-tight">
          {heroData.description}
        </p>
        <div className="flex mt-10 gap-8 max-sm:flex-col max-sm:gap-4 ">
          <Button
            variant="primary"
            size="md"
            className="flex justify-center items-center gap-2"
          >
            {heroData.cta[0].label} <FolderDot />
          </Button>
          <Button
            variant="outline"
            size="md"
            className="flex justify-center items-center gap-2"
          >
            {heroData.cta[1].label} <Github />
          </Button>
        </div>
        </Reval>
  
      </div>
    </section>
  );
}
