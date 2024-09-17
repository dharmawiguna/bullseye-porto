// components
import { Footer, Navbar } from "@/components";

// sections
import HorizontalRow from "@/components/horizontal-row";
import ContactForm from "./contact-form";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="skills">
        <Skills />
      </section>
      <HorizontalRow />
      <section id="portfolio">
        <Projects />
      </section>
      <HorizontalRow />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
