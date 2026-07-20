import Hero from "@/sections/hero";
// import Projects from "@/sections/projects";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background">
      <Hero />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}