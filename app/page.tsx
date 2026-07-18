import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";

import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">

      <DotGrid />

      <Navbar />
      <Hero />
    </main>
  );
}