"use client";

import React, { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Animation state
  const framesRef = useRef<HTMLImageElement[]>([]);
  const scrollRef = useRef({
    currentFrame: 0,
    targetFrame: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // CONFIGURATION
    const frameCount = 15; // Using the 15 framsvid2_*.png frames found in public/frames
    const startPhase = 0.25; // Animation starts at 25% scroll

    // Cloudflare exact image IDs for the 15 frames
    const frameIds = [
      "framsvid2_001.png",
      "framsvid2_002.png",
      "framsvid2_003.png",
      "framsvid2_004.png",
      "framsvid2_005.png",
      "framsvid2_006.png",
      "framsvid2_007.png",
      "framsvid2_008.png",
      "framsvid2_009.png",
      "framsvid2_0010.png",
      "framsvid2_0011.png",
      "framsvid2_0012.png",
      "framsvid2_0013.png",
      "framsvid2_0014.png",
      "framsvid2_0015.png"
    ];

    const getFrameUrl = (index: number) =>
      `https://pub-940a45f2ee234428a13922d8de9d9841.r2.dev/frames/${frameIds[index]}`;

    const renderImage = (index: number) => {
      const img = framesRef.current[Math.floor(index)];
      if (!img || !img.complete) return;
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const x = (canvas.width - img.width * ratio) / 2;
      const y = (canvas.height - img.height * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
    };

    // Smooth Lerp Loop (Sheryians style smoothness)
    const animate = () => {
      const { currentFrame, targetFrame } = scrollRef.current;
      // Lerp for buttery smoothness (0.1 is the smoothness factor)
      const nextFrame = currentFrame + (targetFrame - currentFrame) * 0.1;
      
      if (Math.abs(nextFrame - currentFrame) > 0.001) {
        scrollRef.current.currentFrame = nextFrame;
        renderImage(nextFrame);
      }
      requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.offsetTop;
      const totalHeight = container.offsetHeight - window.innerHeight;
      const scrollFraction = totalHeight > 0 
        ? Math.max(0, Math.min(1, (scrollY - containerTop) / totalHeight))
        : 0;

      // 1. Video Logic (Showreel)
      if (videoRef.current) {
        if (totalHeight <= 0) {
          videoRef.current.style.opacity = "1";
          videoRef.current.style.transform = "scale(1)";
        } else {
          // Video stays visible until startPhase, then fades out
          const videoOpacity = scrollFraction < startPhase ? 1 : Math.max(0, 1 - (scrollFraction - startPhase) * 8);
          videoRef.current.style.opacity = videoOpacity.toString();
          videoRef.current.style.transform = `scale(${1 + scrollFraction * 0.1})`;
        }
      }

      // 2. Canvas Logic (Frames)
      if (canvasRef.current) {
        if (totalHeight <= 0) {
          canvasRef.current.style.opacity = "0";
        } else {
          // Canvas starts hidden, fades in slightly before the video fully disappears
          const canvasOpacity = scrollFraction < startPhase - 0.05 ? 0 : Math.min(1, (scrollFraction - (startPhase - 0.05)) * 10);
          canvasRef.current.style.opacity = canvasOpacity.toString();

          // Calculate target frame
          if (scrollFraction >= startPhase) {
            const frameFraction = (scrollFraction - startPhase) / (1 - startPhase);
            scrollRef.current.targetFrame = frameFraction * (frameCount - 1);
          } else {
            scrollRef.current.targetFrame = 0;
          }
        }
      }
    };

    // Preloading
    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) renderImage(0); // Show first frame as soon as it loads
      };
      framesRef.current.push(img);
    }

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      handleScroll();
    };

    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateSize();
    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-black h-[100vh] md:h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* VIDEO: Showreel (Phase 1) */}
        <video
          ref={videoRef}
          src="https://pub-940a45f2ee234428a13922d8de9d9841.r2.dev/Landing page_1.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out z-0"
        />

        {/* CANVAS: Smooth Frame Animation (Phase 2) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 hidden md:block"
          style={{ opacity: 0 }}
        />
      </div>
    </section>
  );
};

export default Hero;
