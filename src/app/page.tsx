import AboutSection from "@/components/about/About";
import ContactSection from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/heroBanner";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projects/Projects";
import ServicesSection from "@/components/services/services";
import SkillsSection from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroBanner/>
    <AboutSection/>
    <ServicesSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
