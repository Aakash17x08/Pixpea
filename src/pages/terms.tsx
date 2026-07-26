"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-[#020202] text-white min-h-screen">
      <Head>
        <title>Terms & Conditions | Pixpea Studio</title>
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
              TERMS & <span className="text-green-500 italic">CONDITIONS</span>
            </h1>
            <p className="text-gray-400 text-xl font-light tracking-widest uppercase">
              Agreement & Service Protocols
            </p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  1. Order Confirmation and Cancellation
                </h2>
                <p>
                  Once an order has been placed and confirmed, it is considered
                  final and non-cancellable. No cancellation requests will be
                  entertained after the order is confirmed.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  2. Project Cancellation
                </h2>
                <p>
                  In the cancellation of project by the client for any service,
                  a{" "}
                  <span className="text-green-500 font-bold">
                    {" "}
                    non-refundable fee
                  </span>{" "}
                  will apply. The client remains responsible for this charge,
                  regardless of the reason for cancellation.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  3. Outstanding Payments
                </h2>
                <p>
                  Any outstanding balance or dues in the client's account must
                  be cleared within the specified time period as outlined in the
                  agreement. Failure to settle the payment within the given time
                  will result in interest charges.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  4. Rework and Changes
                </h2>
                <p>
                  The client is entitled to a limited number of changes and
                  revisions as specified in the agreement. Additional changes or
                  reworks beyond the specified number may incur extra charges.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  5. Timely Payments and Penalties
                </h2>
                <p>
                  All payments must be made according to the agreed schedule. If
                  payment is not received within the specified timeframe,
                  interest will be charged on the overdue amount.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                  6. Payment Terms
                </h2>
                <p>
                  A{" "}
                  <span className="text-green-500 font-bold">
                    50% advance payment
                  </span>{" "}
                  is required upon order confirmation. The remaining balance
                  must be paid upon delivery of the final product.
                </p>
              </div>

              <div className="pt-12 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  By working with{" "}
                  <span className="text-white">PIXPEA STUDIO</span>, the client
                  agrees to all terms and conditions outlined above.
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
