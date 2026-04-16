
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import 'animate.css';
import AosWrapper from "@/components/helper/AosWrapper";
import SkillsSection from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import MyApproach from "@/components/sections/MyApproach/MyApproach";
import Contact from "@/components/sections/Contact/Contact";


export default function Home() {
  return (
    <main className="relative bg-foreground text-background w-full flex flex-col items-center">
      <AosWrapper>
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experience />
        <SkillsSection />
        <Projects />
        <MyApproach />
        <Contact />
      </AosWrapper>
    </main>
  );
}
