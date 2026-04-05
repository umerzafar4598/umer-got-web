import Hero from "@/components/sections/Hero";

import About from "@/components/sections/About";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-foreground text-background">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
    </main>
  );
}
