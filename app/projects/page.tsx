import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <DotGrid />
      <Navbar />
      <div className="relative">
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
