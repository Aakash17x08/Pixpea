// pages/index.js

import Head from "next/head";
import Hero from "../components/Hero";
import BrandLogos from "../components/BrandLogos";
import Service from "../components/Service";
import VideoGallery from "../components/VideoGallery";
import GlowText from "../components/GlowText";
// import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Pixpea Studio – Cinematic CGI, 3D Product Animation & AI Videos
        </title>

        {/* ✅ Favicon for browser tab and Google */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        {/* Meta Description & Keywords */}
        <meta
          name="description"
          content="Pixpea Studio is a global CGI & 3D visual studio delivering cinematic product animations, AI-generated marketing videos, Unreal Engine walkthroughs, and virtual experiences. We combine creative storytelling, immersive CGI, and AI workflows to captivate and convert audiences across industries."
        />
        <meta
          name="keywords"
          content="Pixpea Studio,
           cinematic CGI studio,
            3D product video production,
             AI video marketing agency,
              Unreal Engine walkthrough production,
               real-time CGI visualization,
                virtual product experience,
                 hyper realistic product animation,
                  AI-assisted video content creation,
                   architectural CGI walkthroughs,
                    ecommerce video animation,
                     brand storytelling with CGI,
                      3D commercial video agency,
                       product demo animations,
                        video editing & post production,
                         2D and 3D animation services, 
                         motion graphics for marketing,
                          expert CGI advertising,
                           startup explainer video production,
                            brand cinematic visuals,
                             immersive virtual content solutions,
                             CGI for architecture & real estate,
                             AI enhanced video workflows,
                             international CGI production,
                             global animation studio services,
                             high-end marketing visuals"
        />
        <meta name="author" content="Pixpea Studio" />
        <link rel="canonical" href="https://pixpeastudios.com/" />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="Pixpea Studio – Cinematic CGI & AI Visuals"
        />
        <meta
          property="og:description"
          content="We blend CGI, 3D animation, and AI tools to create visually powerful marketing content for brands, agencies, and product companies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixpeastudios.com/" />
        <meta
          property="og:image"
          content="https://pixpeastudios.com/cover.jpg"
        />
        <meta property="og:site_name" content="Pixpea Studio" />

        {/* Twitter Card SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pixpea Studio – Cinematic CGI Experiences"
        />
        <meta
          name="twitter:description"
          content="Cinematic CGI, AI-driven videos, and 3D animation for product marketing and storytelling."
        />
        <meta
          name="twitter:image"
          content="https://pixpeastudios.com/cover.jpg"
        />

        {/* Schema Markup: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pixpea Studio",
              url: "https://pixpeastudios.com",
              logo: "https://pixpeastudios.com/logo.png",
              sameAs: [
                "https://instagram.com/pixpea",
                "https://linkedin.com/company/pixpea",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "hello@pixpea.studio",
              },
              description:
                "Pixpea Studio is a cinematic 3D, CGI, and AI video production studio crafting product commercials, virtual walkthroughs, and visual marketing content for brands and agencies worldwide.",
            }),
          }}
        />

        {/* Schema Markup: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does Pixpea Studio offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pixpea Studio offers cinematic CGI production, 3D animation, AI video generation, video editing, Unreal Engine walkthroughs, and virtual environments.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What industries do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We work with product brands, startups, real estate developers, ad agencies, architects, and e-commerce businesses seeking premium visual content.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is AI used in your video production?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We use AI tools for scriptwriting, video generation, camera planning, and motion design. This helps speed up workflows while keeping quality cinematic.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Schema Markup: Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Cinematic CGI & AI Video Production",
              provider: {
                "@type": "Organization",
                name: "Pixpea Studio",
                url: "https://pixpeastudios.com/",
              },
              serviceType:
                "3D Product Animation, CGI Commercials, AI Video Generation",
              areaServed: {
                "@type": "Place",
                name: "Global",
              },
              description:
                "Pixpea Studio delivers cinematic 3D animations, CGI-based marketing visuals, and AI-generated videos for businesses across industries.",
            }),
          }}
        />
      </Head>

      <Hero />
      <BrandLogos />
      <div className="w-full bg-black -mt-[5vh] md:-mt-[10vh] relative z-30">
        <GlowText />
      </div>
      <Service />
      <VideoGallery />
      {/* <BlogSection /> */}
    </>
  );
}
