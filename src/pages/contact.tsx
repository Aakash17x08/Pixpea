"use client";

import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageSquare, User, Mail, Sparkles } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xkgbprgn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <Head>
        <title>Brief Us | Pixpea Studio</title>
        <meta name="description" content="Tell us about your project. Let's create something extraordinary together." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm">
              <span className="text-green-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                Project Inquiry
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
              BRIEF <span className="text-green-500 italic">US</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
              Ready to transform your brand with cinematic CGI? Tell us about your vision below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-32 px-6 md:px-12 lg:px-24">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="relative p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl"
              >
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Name */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-sm font-mono text-gray-500 uppercase tracking-widest">
                        <User size={14} className="text-green-500" /> Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Alexander Knight"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-sm font-mono text-gray-500 uppercase tracking-widest">
                        <Mail size={14} className="text-green-500" /> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-mono text-gray-500 uppercase tracking-widest">
                      <MessageSquare size={14} className="text-green-500" /> Project Brief
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-green-500 text-black font-black text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-colors group disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="animate-pulse">PROCESSING...</span>
                    ) : (
                      <>
                        INITIATE PROJECT <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-16 md:p-24 rounded-[4rem] bg-green-500 text-black shadow-[0_0_100px_rgba(34,197,94,0.3)]"
              >
                <CheckCircle2 className="w-24 h-24 mx-auto mb-8" />
                <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter">SUCCESS!</h2>
                <p className="text-xl md:text-3xl font-bold leading-tight max-w-xl mx-auto">
                  Your brief has been transmitted. Our team will review and connect with you shortly.
                </p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-sm font-black border-b-2 border-black hover:opacity-70 transition-opacity"
                >
                  SEND ANOTHER BRIEF
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Attractive Post-Form Section */}
          <div className="mt-32 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24h Response",
                desc: "We review every brief within one business day.",
                icon: <Sparkles className="text-green-500" />
              },
              {
                title: "Global Reach",
                desc: "Working with brands across all time zones.",
                icon: <Sparkles className="text-green-500" />
              },
              {
                title: "Confidential",
                desc: "Your ideas and assets are safe with us.",
                icon: <Sparkles className="text-green-500" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-green-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/[0.02] rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
