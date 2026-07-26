"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Video = {
  url: string;
  title: string;
  info: string;
};

type VideoCardProps = {
  video: Video;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  index,
  total,
  progress,
}) => {
  const scale = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, 0.8]
  );

  const rotateX = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, -15]
  );

  const y = useTransform(
    progress,
    [index / total, (index + 1) / total],
    ["0%", "-20%"]
  );

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center px-4">
      <motion.div
        style={{
          scale,
          rotateX,
          y,
          transformPerspective: 2000,
        }}
        className="relative w-full max-w-6xl h-[85vh] md:h-[60vh] flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden bg-[#050505] border-[1.5px] border-green-500/40 shadow-[0_0_60px_-10px_rgba(34,197,94,0.4)]"
      >
        {/* LIGHTING EFFECTS */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-80 z-20" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-green-400/40 to-transparent z-20" />

        {/* LEFT HALF */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative md:border-r border-green-500/30 bg-black">
          {video.url.endsWith(".avif") ? (
            <img
              src={video.url}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={video.url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* RIGHT HALF */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center bg-[#080808] relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-green-500/50"></span>
              <span className="text-green-400 font-mono text-[11px] uppercase tracking-[0.4em]">
                Project 0{index + 1}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-10 tracking-tight leading-none">
              {video.title}
            </h2>

            <div className="pt-8 border-t border-green-500/20 inline-block">
              <p className="text-gray-400 text-lg italic font-light leading-relaxed max-w-sm">
                {video.info}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const VideoGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const videos: Video[] = [
    {
      url: "/videos/Air Purifier.mp4",
      title: "Air Purifier",
      info:
        "Glow begins with care that understands your skin. We blend nature’s purity with advanced skincare science.",
    },
    {
      url: "/videos/Skechers_Commercial.mp4",
      title: "Skechers Commercial",
      info:
        "Fashion that moves with you and speaks for you. Designed with premium fabrics and a modern edge. Look good, feel better, stay iconic.",
    },
    {
      url: "/videos/watch.mp4",
      title: "Wrist Worthy",
      info:
        "Once you try it, there's no going back. Clean, refreshing water infused with calcium to keep you strong, focused and unstoppable. This is hydration, upgraded.",
    },
    {
      url: "/videos/Air Purifier.mp4",
      title: "Air Purifier (loop)",
      info:
        "Wear the beat, feel the vibe, own the rhythm. Premium sound engineered for everyday adventures. Your music, your world, your way.",
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#020202] text-white">
      <div className="h-[70vh] flex flex-col justify-center px-6 md:px-24">
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-tight">
          AI <br />
          <span className="text-green-500 italic">UNLEASHED</span>
        </h2>
        <div className="h-1 w-24 bg-green-500 mt-8 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
      </div>

      <div>
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            index={index}
            total={videos.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;