import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  Lightbulb, 
  Box, 
  Video, 
  Sun, 
  Music, 
  CheckCircle2,
  Eye,
  Zap,
  Maximize,
  TrendingUp
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function Studio() {
  const coreHighlights = [
    {
      title: "Emotion in Motion",
      desc: "Every animation we create stems from a powerful narrative foundation — blending emotion, pacing, and visual rhythm to leave a lasting impact.",
      icon: <Zap className="w-6 h-6 text-green-400" />
    },
    {
      title: "Obsessive Detail",
      desc: "From sub-surface scattering to cinematic lighting, we meticulously craft every frame — ensuring timing, realism, and polish across every pixel.",
      icon: <Maximize className="w-6 h-6 text-green-400" />
    },
    {
      title: "Future-Focused",
      desc: "We operate at the intersection of design and technology — utilizing Unreal Engine, real-time rendering, and AI workflows that future-proof our creative process.",
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Industries Served", value: "12+" },
    { label: "Years of Creativity", value: "10+" },
  ];

  const steps = [
    {
      title: "Discovery & Briefing",
      description: "We begin with a deep dive into your goals, audience, and reference expectations. Understanding the 'Why' before the 'How'.",
      icon: <Search className="w-10 h-10" />,
      tag: "01",
      color: "from-green-500/20 to-transparent"
    },
    {
      title: "Concept & Direction",
      description: "Scripting, reference gathering, and visual storytelling setup. We define the visual language that resonates with your brand.",
      icon: <Lightbulb className="w-10 h-10" />,
      tag: "02",
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Modeling & Design",
      description: "We build high-quality assets, props, and layouts. Photorealistic textures and precise geometry form the backbone of our visuals.",
      icon: <Box className="w-10 h-10" />,
      tag: "03",
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "Animation & Camera Work",
      description: "Motion flows, keyframes, and cinematic camera paths. We breathe life into static models with fluid, high-impact movement.",
      icon: <Video className="w-10 h-10" />,
      tag: "04",
      color: "from-orange-500/20 to-transparent"
    },
    {
      title: "Lighting & Rendering",
      description: "Global illumination and industry-level rendering. We craft the perfect atmosphere with light, shadow, and color grading.",
      icon: <Sun className="w-10 h-10" />,
      tag: "05",
      color: "from-red-500/20 to-transparent"
    },
    {
      title: "Edit, Sound & Delivery",
      description: "Final music sync, sound design, and color polishing. On-time delivery in your desired format, ready for the world.",
      icon: <Music className="w-10 h-10" />,
      tag: "06",
      color: "from-emerald-500/20 to-transparent"
    },
  ];

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden">
      <Head>
        <title>Our Studio Process | Pixpea</title>
        <meta name="description" content="Explore Pixpea Studio's creative pipeline." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-sm">
              <span className="text-green-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                The Studio
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              BUILD YOUR <br /> 
              <span className="text-green-500 italic">VISUAL</span> <br />
              EXPERIENCE
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              Discover a space where imagination meets precision. From concept
              to completion, we design every frame with purpose and beauty.
            </p>
            <motion.a
              href="#process"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-green-500 hover:text-white"
            >
              See How We Work <span>→</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-[100px] -z-10" />
            <div className="rounded-3xl overflow-hidden border border-white/10 aspect-video bg-white/5 backdrop-blur-xl">
              <video
                src="/videos/Skechers_Commercial.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <Eye className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">Our Vision</h2>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
            To become the visual backbone for tomorrow’s ideas. At Pixpea, we
            create stories, not just animations — crafting visuals that spark
            connection and clarity.
          </p>
        </motion.div>
      </section>

      {/* Core Highlights */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {coreHighlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-green-500/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-8 group-hover:border-green-500/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 border-y border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl text-center group hover:bg-white/[0.04] transition-all"
            >
              <div className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-green-500 font-bold text-sm md:text-lg uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW STICKY STACKED PROCESS SECTION */}
      <section id="process" className="py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-8xl font-black tracking-tight leading-none uppercase mb-4">
              CREATIVE <br />
              <span className="text-green-500 italic">PIPELINE</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-[0.3em] uppercase">How we bring your vision to life</p>
          </div>

          <div className="space-y-[30vh]"> {/* Large gap between sticky triggers */}
            {steps.map((step, i) => (
              <div key={i} className="sticky top-[15%] pb-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "circOut" as const }}
                  className="group relative w-full rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                >
                  {/* Background Gradient Accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                  
                  <div className="relative z-10 p-8 md:p-16 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
                    {/* Left Side: Number & Icon */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <span className="text-8xl md:text-[12rem] font-black text-white/10 leading-none mb-4 group-hover:text-green-500/20 transition-colors">
                        {step.tag}
                      </span>
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 shadow-inner group-hover:border-green-500/50 transition-all duration-500">
                        {step.icon}
                      </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-6xl font-black tracking-tight group-hover:text-green-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed">
                        {step.description}
                      </p>
                      
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Final Completion Card */}
            <div className="sticky top-[20%] pt-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-16 md:p-24 rounded-[4rem] bg-green-500 text-black text-center shadow-[0_0_100px_rgba(34,197,94,0.3)] relative overflow-hidden group"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
                  className="absolute -top-32 -right-32 w-64 h-64 border-[40px] border-black/5 rounded-full"
                />
                
                <CheckCircle2 className="w-24 h-24 mx-auto mb-8 text-black" />
                <h3 className="text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter">SUCCESS!</h3>
                <p className="text-xl md:text-3xl font-bold max-w-2xl mx-auto leading-tight">
                  Your vision is now a cinematic reality. Ready to broadcast to the world.
                </p>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 bg-black text-white px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Start New Project
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-green-500/[0.02] rounded-full blur-[120px]" />
      </div>
      
      <div className="h-[20vh]" />
    </div>
  );
}
