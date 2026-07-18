"use client";

import { useEffect, useRef } from "react";

export default function DotGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;

      ref.current.style.setProperty("--x", `${e.clientX}px`);
      ref.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* Base gray dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1.1px, transparent 1.1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Soft glowing dots near cursor */}
      <div
        ref={ref}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.95) 1.3px, transparent 1.3px)",
          backgroundSize: "45px 45px",
          maskImage:
            "radial-gradient(circle 160px at var(--x,50%) var(--y,50%), black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle 160px at var(--x,50%) var(--y,50%), black 0%, transparent 75%)",
          transition: "mask-image 0.15s ease-out",
        }}
      />
    </div>
  );
}