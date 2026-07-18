"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 25,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-[120px]"
    />
  );
}