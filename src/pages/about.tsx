"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Cpu } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      title: "Creativity",
      desc: "Bold, unique ideas infused into every project.",
      icon: <Lightbulb className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Precision",
      desc: "Every frame crafted with care and accuracy.",
      icon: <Target className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Innovation",
      desc: "Driven by cutting-edge tools and AI expertise.",
      icon: <Cpu className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm">
            <span className="text-green-400 font-mono text-[11px] uppercase tracking-[0.3em]">
              The Studio
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-none">
            ABOUT <span className="text-green-500">US</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At <span className="text-white font-semibold">Pixpea Studio</span>, we
            blend creativity and technology to craft immersive CGI, animation, and
            AI-driven content. We’re more than just a studio — we’re a creative
            partner for forward-thinking brands.
          </p>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-500 uppercase tracking-wider">
              Our Mission
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              To empower brands with storytelling that captivates, informs, and
              inspires through the power of visual innovation. We believe every pixel tells a story.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-500 uppercase tracking-wider">
              Our Vision
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              To become a globally recognized creative agency known for pushing
              boundaries in CGI, animation, and AI-powered media. Setting the gold standard for digital craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* Core Values / Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map(({ title, desc, icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Card Accent Light */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-8 group-hover:border-green-500/50 transition-colors duration-500 shadow-inner">
                  {icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight group-hover:text-green-400 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light">
                  {desc}
                </p>
              </div>

              {/* Bottom Border Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-green-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-green-500/[0.03] rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

export default About;
