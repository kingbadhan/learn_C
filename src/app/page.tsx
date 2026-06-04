import Hero from "@/sections/hero";
import Journey from "@/sections/journey";
import Projects from "@/sections/projects";
import Stack from "@/sections/stack";
import Github from "@/sections/github";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background">
      <Hero />
      <Journey />
      <Projects />
      <Stack />
      <Github />
      <Contact />
    </main>
  );
}