import { contactData } from "@/data/contactData";
import SectionTitle from "../SectionHeading";
import ContactCard from "./contactCard";
import Reval from "../Reval";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-6xl mx-auto">
        <Reval>
          <SectionTitle
            label="Contact"
            heading="Let's Connect on Socials"
            highlight="Connect"
            align="center"
          />
        </Reval>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10">
          {contactData.map((contact, index) => (
            <Reval key={index} delay={index * 0.1} scale={0.9} duration={0.4}>
              <ContactCard {...contact} />
            </Reval>
          ))}
        </div>
      </div>
    </section>
  );
}
