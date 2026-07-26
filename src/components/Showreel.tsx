"use client";

import React, { useRef, useEffect, useState } from "react";

const Showreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.4 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Responsive wrapper */}
      <div className="relative w-full aspect-video md:h-screen md:aspect-auto">
        {/* Video */}
        <video
          ref={videoRef}
          src="/Showreelfinal.mp4"
          muted
          playsInline
          loop
          controls={false}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Title */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 text-white text-center px-4">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold">
          Showreel
        </h2>
      </div>
    </section>
  );
};

export default Showreel;
