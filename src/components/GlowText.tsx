"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const GlowText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer motion values for raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for ultra-smooth buttery interpolation
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Dynamically construct the gradients using motion templates
  const backgroundGradient = useMotionTemplate`radial-gradient(circle 200px at ${smoothX}px ${smoothY}px, rgba(0, 255, 136, 0.30) 0%, transparent 80%)`;
  const maskGradient = useMotionTemplate`radial-gradient(circle 100px at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  const text = "PIXPEA STUDIOS";

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-12 -mt-[5vh] md:-mt-[10vh] bg-black overflow-hidden flex items-center justify-center cursor-default select-none z-30"
    >
      {/* Glow Overlay Layer (The "Flashlight") */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ background: backgroundGradient }}
      />

      {/* Main Text Container */}
      <div className="relative text-center w-full px-4 pointer-events-none">
        {/* Base Layer: Outlined Text */}
        <h2 
          className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.1em] sm:tracking-[0.15em] leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            color: "transparent",
          }}
        >
          {text}
        </h2>

        {/* Top Layer: Revealed Text (Masked) */}
        <motion.h2 
          className="absolute inset-0 flex items-center justify-center text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.1em] sm:tracking-[0.15em] leading-none pointer-events-none text-[#00ff88] whitespace-nowrap transition-opacity duration-300"
          style={{
            WebkitMaskImage: maskGradient,
            maskImage: maskGradient,
          }}
        >
          {text}
        </motion.h2>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.02),_transparent_70%)] pointer-events-none" />
    </div>
  );
};

export default GlowText;
