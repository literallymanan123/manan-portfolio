"use client";

import Container from "@/components/layout/Container";
import OptionWheel from "@/components/OptionWheel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PROJECTS = [
  {
    id: "01",
    title: "MUSEO",
    category: "Web App · Digital Experience",
    year: "2025",
    description:
      "A mood-based digital art gallery designed to make visual discovery feel deeply personal. Users can select their emotional state and seamlessly explore a highly curated, dynamic feed of copyright-free images, videos, and music within an immersive, fluid, and Pinterest-inspired interface.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://remuseo.vercel.app/",
  },
  {
    id: "02",
    title: "RemoteDesk",
    category: "Web App",
    year: "2026",
    description:
      "A powerful cross-platform remote desktop application built entirely with modern web technologies like Electron and WebRTC. It enables ultra-low-latency peer-to-peer screen sharing and comprehensive mouse/keyboard control between devices via a highly optimized custom signaling server.",
    tags: ["Electron", "WebRTC", "Next.js"],
    link: "https://remotedesk-psi.vercel.app/",
  },
  {
    id: "03",
    title: "Ember-Journal",
    category: "Web App",
    year: "2026",
    description:
      "An incredibly immersive and cozy journaling application featuring an interactive, 3D desk-themed dashboard. Complete with integrated ambient background music, dynamic virtual lighting controls, and a polished, ultra-secure user experience to elevate your daily reflections.",
    tags: ["Jamendo API", "CSS Animations", "Next.js"],
    link: "https://emberjournal.vercel.app/",
  },
  {
    id: "04",
    title: "Kloudera Technologies",
    category: "Corporate Website",
    year: "2026",
    description:
      "The official digital presence for Kloudera Technologies. Engineered to deliver a striking, high-performance web experience that effortlessly conveys enterprise-level capabilities through sleek animations, modern aesthetics, and seamless user navigation.",
    tags: ["Next.js", "Web Design"],
    link: "https://www.kloudera.ai",
  },
];

export default function Projects() {
  useGSAP(() => {
    gsap.from(".proj-item", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <section
      id="projects"
      className="relative text-white"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Container>
        <div className="flex h-screen items-center gap-16 lg:gap-24">

          {/* Left column: heading */}
          <div className="relative z-10 h-full w-full shrink-0 lg:w-[42%]">
            <h1
              className="
                proj-item
                absolute
                bottom-16
                left-8
                text-[clamp(4rem,8vw,7.5rem)]
                font-normal
                leading-none
                text-white
              "
              style={{
                fontFamily: "var(--font-serif)",
              }}
            >
              projects
            </h1>
          </div>

          {/* Right column: OptionWheel */}
          <div className="relative hidden h-full flex-1 lg:block w-full">
            <OptionWheel
              defaultSelected={1}
              spacing={2.6}
              inset={100}
              side="right"
              loop={true}
              autoScroll={true}
              autoScrollSpeed={0.002}
              smoothing={400}
              onItemClick={(index) => {
                window.open(PROJECTS[index].link, "_blank");
              }}
              items={PROJECTS.map((p) => (
                <div key={p.id} className="flex flex-col items-end text-right group">
                  <div className="flex items-center gap-3">
                    <span 
                      className="text-[clamp(1.8rem,3vw,2.8rem)] font-normal leading-tight group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {p.title}
                    </span>
                  </div>
                  <span className="text-sm text-zinc-500 font-sans tracking-wide max-w-[450px] line-clamp-3 leading-relaxed mt-2">
                    {p.description}
                  </span>
                </div>
              ))}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}