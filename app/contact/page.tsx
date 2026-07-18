import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <DotGrid />
      <Navbar />
      <div className="relative">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
