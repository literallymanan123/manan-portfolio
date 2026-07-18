"use client";

import Ferrofluid from './Ferrofluid';

export default function DotGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Ferrofluid
        colors={["#ffffff", "#ffffff", "#ffffff"]}
        speed={0.5}
        scale={1.6}
        turbulence={1}
        fluidity={0.1}
        rimWidth={0.2}
        sharpness={2.5}
        shimmer={1.5}
        glow={2}
        flowDirection="down"
        opacity={1}
        mouseInteraction={true}
        mouseStrength={1}
        mouseRadius={0.35}
        mouseDampening={0.15}
        mixBlendMode="screen"
      />
    </div>
  );
}