import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { ScrollProgress } from "@/components/scroll-progress";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
