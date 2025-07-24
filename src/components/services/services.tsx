'use client';

import { servicesData } from "@/data/servicesData";
import SectionTitle from "../SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "../Reval";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionTitle
            as="h2"
            label="My Services"
            heading="Specialized in Frontend Development"
            highlight="Frontend"
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {servicesData.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} scale={0.9} duration={0.4}>
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
