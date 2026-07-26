"use client";

import React from "react";
import Head from "next/head";

type ImageCardProps = {
  poster: string;
  title?: string;
  desc?: string;
};

export default function ThreeDCGI() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>3D CGI | Pixpea Studio</title>
      </Head>

      {/* HERO VIDEO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/Skechers_Commercial.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute bottom-20 left-6 md:left-20 max-w-2xl">
          <p className="text-xs md:text-sm text-gray-400 mb-3 tracking-widest uppercase">
            {/* CLIENT: PIXPEA STUDIO */}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold leading-none mb-4">
            SKECHERS COMMERCIAL
          </h1>
          <p className="text-lg md:text-xl text-gray-300 italic mb-8">
            "Hyper-real visuals. Next-level storytelling."
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-6 md:px-20 py-32">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* STACKED CONCEPT & EXECUTION */}
          <div className="space-y-2">
            <h3 className="text-5xl md:text-8xl font-black text-white/10 tracking-tighter leading-none">
              CONCEPT
            </h3>
            <h3 className="text-4xl md:text-7xl font-black text-green-500/50 tracking-tighter leading-none">
              &
            </h3>
            <h3 className="text-5xl md:text-8xl font-black text-white/10 tracking-tighter leading-none">
              EXECUTION
            </h3>
            <div className="w-16 h-[2px] bg-green-500 mt-8 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-7xl font-semibold mb-8 tracking-tight leading-tight">
              Bringing your vision to life through{" "}
              <span className="text-gray-400 italic">
                precision CGI.
              </span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
              From product commercials to cinematic visuals, we craft high-end CGI
              experiences that elevate your brand.
            </p>
          </div>
        </div>
      </div>

      {/* CENTER BIG IMAGE */}
      <div className="px-6 md:px-20 pb-32 flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <ImageCard poster="/Internals_images/sketchers1.jpeg" />
        </div>
      </div>
    </div>
  );
}

function ImageCard({ poster, title, desc }: ImageCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transition group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
      </div>
      {(title || desc) && (
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </div>
      )}
    </div>
  );
}