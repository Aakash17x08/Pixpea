"use client";

import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Pixpea Studios offer?",
    answer:
      "We provide CGI, VFX, 3D animation, and photoreal product rendering for advertising and brand storytelling.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Just email us at sales@pixpeastudios.com or use our contact form with your project brief.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing varies based on project complexity. Contact us for a custom quote.",
  },
  {
    question: "What’s your typical project timeline?",
    answer: "Most projects are delivered within 1–3 weeks depending on scope.",
  },
  {
    question: "What deliverables do you provide?",
    answer:
      "High-resolution images, animations, videos, and source files if required.",
  },
  {
    question: "Can I own the source files?",
    answer:
      "Yes, source files can be shared upon request as part of your deliverables.",
  },
  {
    question: "How do revisions work?",
    answer: "We offer 2–3 free revision rounds depending on scope.",
  },
  {
    question: "Where is your team located?",
    answer: "Pixpea Studios is based in Pune, India and works globally.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#020202] text-white min-h-screen">
      <Head>
        <title>FAQ | Pixpea Studio</title>
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
                Support & Info
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
              FREQUENTLY <br />
              <span className="text-green-500 italic">ASKED</span>
            </h1>
            <p className="text-gray-400 text-xl font-light tracking-widest uppercase">
              Common questions about our process
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  openIndex === i
                    ? "bg-white/[0.04] border-green-500/30 shadow-[0_20px_50px_-10px_rgba(34,197,94,0.1)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 md:p-10 flex items-center justify-between text-left"
                >
                  <span
                    className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                      openIndex === i ? "text-green-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      openIndex === i
                        ? "border-green-400 text-green-400 rotate-180"
                        : "border-white/20 text-white/40"
                    }`}
                  >
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                    >
                      <div className="px-8 md:px-10 pb-10 text-gray-400 text-lg font-light leading-relaxed border-t border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-500">
          Still have questions?
        </h3>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all"
        >
          Contact Support <span>→</span>
        </motion.a>
      </section>

      <div className="h-[20vh]" />
    </div>
  );
}
