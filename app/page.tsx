
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import 'animate.css';
import AosWrapper from "@/components/helper/AosWrapper";

export default function Home() {
  return (
    <main className="relative bg-foreground text-background">
      <AosWrapper>
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
      </AosWrapper>
    </main>
  );
}
