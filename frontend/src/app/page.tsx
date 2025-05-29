import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
