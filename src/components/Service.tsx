"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  MousePointer2,
} from "lucide-react";
import Link from "next/link";

// ✅ DATA (WITH INTERNAL LINKS)
export const servicesData = [
  {
    title: "Air Purifier",
    link: "/work/2d-animation",
    video: "Air Purifier",
    tagline: "Bring ideas to life.",
    tags: ["Animation"],
    fullDescription: "Creative 2D animations for brands and storytelling.",
    color: "#3b82f6",
  },
  {
    title: "Skechers Commercial",
    link: "/work/3d-cgi",
    video: "Skechers_Commercial",
    tagline: "Real meets unreal.",
    tags: ["CGI"],
    fullDescription: "High-end CGI visuals with cinematic quality.",
    color: "#10b981",
  },
  {
    title: "Wrist Worthy",
    link: "/work/video-editing",
    video: "watch",
    tagline: "Cut. Polish. Deliver.",
    tags: ["Editing"],
    fullDescription: "Professional editing for all types of content.",
    color: "#f59e0b",
  },
];

// 🔥 HERO SECTION (SAME STYLE)
const ServiceHero = () => (
  <div className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black z-0" />

    <Sparkles className="absolute text-white/20 top-20 left-10" size={40} />
    <Layers className="absolute text-white/20 top-40 right-10" size={40} />
    <Zap className="absolute text-white/20 bottom-20 left-20" size={40} />

    <div className="relative z-10 max-w-5xl">
      <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-tight">
        Revolutionary <br />
        <span className="text-green-500 italic font-bold">Visual Stories</span>
      </h1>
    </div>

    <div className="absolute bottom-12 flex flex-col items-center text-white/20">
      <span className="text-xs uppercase">Scroll</span>
      <MousePointer2 size={18} />
    </div>
  </div>
);

// 🔥 SERVICE ITEM (FULL CLICKABLE)
const ServiceItem = ({ service, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scaleVideo = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) videoRef.current.play().catch(() => {});
      else videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <Link href={service.link} className="block">
      <div
        ref={ref}
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 cursor-pointer overflow-hidden"
      >
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center z-10">
          {/* TEXT */}
          <motion.div style={{ y: yText }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-black tracking-[0.4em] text-white/20">
                0{index + 1}
              </span>
              <div className="h-[2px] w-12 bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold uppercase mb-8 leading-none">
              {service.title}
            </h2>

            <p className="text-xl md:text-3xl text-white/70 italic mb-10">
              "{service.tagline}"
            </p>

            <p className="text-white/40 mb-12 max-w-md text-lg">
              {service.fullDescription}
            </p>

            <div className="flex items-center gap-2 text-sm uppercase font-bold group">
              View Project
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            style={{ scale: scaleVideo }}
            className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group"
          >
            <video
              ref={videoRef}
              src={`/videos/${service.video}.mp4`}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        </div>

        {/* BG GLOW */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[200px] rounded-full opacity-[0.07]"
          style={{ backgroundColor: isInView ? service.color : "transparent" }}
        />
      </div>
    </Link>
  );
};

// ✅ MAIN COMPONENT
export default function Service() {
  return (
    <div className="bg-black text-white">
      <ServiceHero />
      {servicesData.map((service, index) => (
        <ServiceItem key={index} service={service} index={index} />
      ))}
    </div>
  );
}
