"use client";

import Container from "@/components/layout/Container";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Flux Dashboard",
    category: "Web App · Design System",
    year: "2024",
    description:
      "A real-time analytics dashboard built with a custom design system. Focused on data density without sacrificing clarity — every pixel earns its place.",
    tags: ["React", "TypeScript", "Figma"],
  },
  {
    id: "02",
    title: "Stratum",
    category: "Brand · Motion",
    year: "2024",
    description:
      "Full brand identity for an early-stage fintech startup. Covers logo, type system, motion language, and product UI from the ground up.",
    tags: ["Branding", "After Effects", "Illustrator"],
  },
  {
    id: "03",
    title: "Meridian",
    category: "Mobile · Interaction",
    year: "2023",
    description:
      "A navigation app prototype exploring spatial awareness through haptic feedback and ambient UI patterns. Designed for feel, not just function.",
    tags: ["Figma", "Prototyping", "SwiftUI"],
  },
  {
    id: "04",
    title: "Recall",
    category: "Product · UX Research",
    year: "2023",
    description:
      "Memory-augmentation tool for knowledge workers. Led the full product design process from discovery and research through to high-fidelity delivery.",
    tags: ["UX Research", "Wireframing", "React"],
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
    /*
     * No background color here — the `bg-[#050505]` was hiding the
     * DotGrid (ferrofluid) canvas which sits at z-0 behind everything.
     * The section is transparent so the ferrofluid shows through.
     */
    <section
      id="projects"
      className="relative text-white"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Container>
        {/*
         * Two-column split that fills exactly one viewport height.
         * Left: fixed heading text  |  Right: internally-scrolling card stack
         */}
        <div className="flex h-screen gap-16 lg:gap-24 items-center">

          {/* ── Left column: heading ── */}
          <div className="w-full lg:w-[42%] shrink-0 h-full relative z-10">
            <h1
              className="proj-item absolute left-8 bottom-16 text-[clamp(4rem,8vw,7.5rem)] leading-none font-normal text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              projects
            </h1>
          </div>
          

          {/* ── Right column: ScrollStack (self-contained scroll) ── */}
          <div className="hidden lg:block flex-1 h-full relative">
            <ScrollStack
              itemDistance={110}
              itemScale={0.04}
              itemStackDistance={28}
              stackPosition="20%"
              scaleEndPosition="92%"
              baseScale={0.88}
              blurAmount={20}
            >
              {PROJECTS.map((p) => (
                <ScrollStackItem key={p.id}>
                  <div className="relative w-full h-full flex flex-col justify-between p-10 select-none bg-black/20 backdrop-blur-md rounded-[24px]">

                    {/* top meta */}
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-600">
                        {p.id} &mdash; {p.category}
                      </span>
                      <span className="text-xs text-zinc-700">{p.year}</span>
                    </div>

                    {/* title + description */}
                    <div>
                      <h2
                        className="text-[clamp(1.8rem,3vw,2.8rem)] font-normal text-white leading-tight mb-3"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {p.title}
                      </h2>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    {/* tags + view link */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/[0.07] text-zinc-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors duration-300 group/btn">
                        view
                        <ArrowUpRight
                          size={14}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </button>
                    </div>

                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

        </div>
      </Container>
    </section>
  );
}