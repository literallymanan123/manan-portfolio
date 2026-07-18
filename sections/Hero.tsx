"use client";

import Container from "@/components/layout/Container";
import HeroBackground from "@/components/HeroBackground";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".hero-item", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <section className="relative flex min-h-screen overflow-hidden">

      <HeroBackground />

      <Container>

        <div className="relative h-screen">

          {/* Bottom Left Content */}

          <div className="absolute bottom-20 left-8 z-20 max-w-2xl">

            <h1
              className="hero-item text-[clamp(5rem,9vw,8rem)] leading-[0.9] font-normal text-white"
              style={{
                fontFamily: "var(--font-serif)",
              }}
            >
              manan
            </h1>

            <p className="hero-item mt-8 max-w-xl text-lg leading-9 text-zinc-400">
              Developer by profession and designer by passion,
              crafting thoughtful digital experiences through modern
              web technologies, clean code and meaningful interactions.
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}