import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";
import Skills from "@/sections/Skills";
import Footer from "@/sections/Footer";

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <DotGrid />
      <Navbar />
      <div className="relative">
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
