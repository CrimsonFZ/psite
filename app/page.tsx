import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ResearchInterests } from "@/components/home/ResearchInterests";
import { Education } from "@/components/home/Education";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Awards } from "@/components/home/Awards";
import { Skills } from "@/components/home/Skills";
import { ContactPreview } from "@/components/home/ContactPreview";
import { PersonJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <About />
      <ResearchInterests />
      <Education />
      <SelectedProjects />
      <Awards />
      <Skills />
      <ContactPreview />
    </>
  );
}
