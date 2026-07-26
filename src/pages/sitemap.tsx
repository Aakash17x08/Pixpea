"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid } from "lucide-react";

const SitemapPage = () => {
  const sections = [
    {
      title: "Main Explorer",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Studio", path: "/studio" },
        { name: "About Us", path: "/about" },
        { name: "Brief Us", path: "/contact" },
        // { name: "Blog Feed", path: "/blog" },
      ],
    },
    {
      title: "Creative Work",
      links: [
        { name: "3D CGI", path: "/work/3d-cgi" },
        { name: "2D Animation", path: "/work/2d-animation" },
        { name: "Product Commercials", path: "/work/3d-product-commercial" },
        { name: "Video Editing", path: "/work/video-editing" },
        { name: "AI Visuals", path: "/work/ai-video-generation" },
        { name: "Influencer Content", path: "/work/build-with-influencers" },
      ],
    },
    {
      title: "Resources & Legal",
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Sitemap", path: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="bg-[#020202] text-white min-h-screen">
      <Head>
        <title>Sitemap | Pixpea Studio</title>
        <meta
          name="description"
          content="Quickly navigate through Pixpea Studio's creative space."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm">
              <span className="text-green-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                Navigation Index
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none uppercase">
              SITE <span className="text-green-500 italic">MAP</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
              Explore our full digital footprint. From cinematic services to
              technical documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl hover:border-green-500/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-10">
                <LayoutGrid size={20} className="text-green-500" />
                <h2 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:text-green-400 transition-colors">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="flex items-center justify-between text-gray-400 hover:text-white group/link transition-all"
                    >
                      <span className="text-lg md:text-xl font-light tracking-tight group-hover/link:translate-x-2 transition-transform">
                        {link.name}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all text-green-500"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Footer Spacer */}
      <div className="h-[20vh] flex items-center justify-center opacity-10">
        <div className="h-[1px] w-full max-w-7xl bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </div>
  );
};

export default SitemapPage;
