import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreProjects from "@/components/MoreProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <FeaturedProjects />

      <MoreProjects />

      <Education />

      <Contact />

      <Footer />
    </main>
  );
}