"use client";

import Container from "@/components/layout/Container";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "MUSEO",
    category: "Web App · Digital Experience",
    year: "2025",
    description:
      "A mood-based digital art gallery built to make discovering visual content feel more personal. Users select their mood and explore a curated feed of copyright-free images, videos, and music through an immersive Pinterest-inspired experience.",
    tags: ["Django", "Python", "JavaScript", "REST APIs"],
    link: "https://remuseo.vercel.app/",
  },
  {
    id: "02",
    title: "RemoteDesk",
    category: "Brand · Motion",
    year: "2024",
    description:
      "A cross-platform remote desktop application built with Electron and WebRTC, enabling peer-to-peer screen sharing and full mouse/keyboard control between devices using a lightweight custom signaling server.",
    tags: ["Electron", "WebRTC", "Next.js"],
    link: "https://remotedesk-psi.vercel.app/",
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

          {/* Right column: ScrollStack */}
          <div className="relative hidden h-full flex-1 lg:block">
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
                  <div
                    className="
                      relative
                      flex
                      h-full
                      w-full
                      select-none
                      flex-col
                      justify-between
                      rounded-[24px]
                      bg-black/20
                      p-10
                      backdrop-blur-md
                    "
                  >
                    {/* Top meta */}
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                        {p.id} &mdash; {p.category}
                      </span>

                      <span className="text-xs text-zinc-700">
                        {p.year}
                      </span>
                    </div>

                    {/* Title + description */}
                    <div>
                      <h2
                        className="
                          mb-3
                          text-[clamp(1.8rem,3vw,2.8rem)]
                          font-normal
                          leading-tight
                          text-white
                        "
                        style={{
                          fontFamily: "var(--font-serif)",
                        }}
                      >
                        {p.title}
                      </h2>

                      <p className="text-sm leading-relaxed text-zinc-500">
                        {p.description}
                      </p>
                    </div>

                    {/* Tags + view link */}
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-white/[0.07]
                              px-2.5
                              py-1
                              text-[10px]
                              uppercase
                              tracking-widest
                              text-zinc-600
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/btn
                          flex
                          shrink-0
                          items-center
                          gap-1.5
                          text-xs
                          text-zinc-600
                          transition-colors
                          duration-300
                          hover:text-white
                        "
                      >
                        view

                        <ArrowUpRight
                          size={14}
                          className="
                            transition-transform
                            duration-300
                            group-hover/btn:translate-x-0.5
                            group-hover/btn:-translate-y-0.5
                          "
                        />
                      </a>
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