"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="bg-[#020202] text-white min-h-screen">
      <Head>
        <title>Privacy Policy | Pixpea Studio</title>
      </Head>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm">
              <span className="text-green-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                Legal Documentation
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
              PRIVACY <span className="text-green-500 italic">POLICY</span>
            </h1>
            <p className="text-gray-400 text-xl font-light tracking-widest uppercase">Last updated: April 11, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl"
          >
            <div className="space-y-12 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Introduction</h2>
                <p>
                  At <span className="text-green-500 font-bold">PIXPEA STUDIO</span>, we value
                  your privacy and are committed to protecting your personal
                  information. This privacy policy outlines how we collect, use,
                  and safeguard your data when using our CGI video product shoot
                  and video editing services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">1. Data Collection and Confidentiality</h2>
                <p>
                  Your personal information, such as your name, contact details,
                  billing information, etc., will not be shared with anyone
                  outside our agency without your explicit consent.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">2. Sharing of Project Details</h2>
                <p>
                  The project details, files, and video content will only be
                  shared with authorized persons assigned by your company. If
                  there are any changes to the individuals or group of people who
                  should have access to the project data, your company must inform
                  us beforehand.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">3. Data Collection Methods</h2>
                <p>We may collect data from you through various means, including:</p>
                <ul className="list-disc list-inside pl-4 space-y-2 text-green-500/80">
                  <li><span className="text-gray-400">Forms (for inquiries, project details, etc.)</span></li>
                  <li><span className="text-gray-400">Hard drives (for data storage related to your project)</span></li>
                  <li><span className="text-gray-400">Account creation or contact request submissions</span></li>
                  <li><span className="text-gray-400">Data provided by third parties (such as social media platforms)</span></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">4. Use of Your Information</h2>
                <p>The information we collect will be used for the following purposes:</p>
                <ul className="list-disc list-inside pl-4 space-y-2 text-green-500/80">
                  <li><span className="text-gray-400">To provide you with CGI video products that align with your brand.</span></li>
                  <li><span className="text-gray-400">To communicate with you about project progress and billing.</span></li>
                  <li><span className="text-gray-400">To improve our services and conduct internal meetings.</span></li>
                  <li><span className="text-gray-400">To comply with legal obligations and contractual requirements.</span></li>
                </ul>
              </div>

              <div className="pt-12 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  By using our services, you acknowledge and consent to the data
                  collection and usage practices outlined in this policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-[20vh]" />
    </div>
  );
}
