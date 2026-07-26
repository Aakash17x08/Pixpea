// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { AppProps } from 'next/app';

// Mount CookieConsent on client to avoid SSR hydration issues
const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // ---- High-intent, well-ranked keyword set (curated for CGI/3D services) ----
  interface SEOConfig {
    title: string;
    description: string;
    url: string;
    ogImage: string;
    twitterHandle: string;
    locale: string;
    keywords: string;
    noindex?: boolean;
  }

  const defaults: SEOConfig = {
    title: "Pixpea Studio — CGI & 3D Product Animation",
    description:
      "Pixpea Studio crafts cinematic CGI and 3D product films, Unreal Engine commercials, and photoreal renders for brands. From packshots to anamorphic billboards, AR/VR-ready assets, and launch visuals.",
    url: "https://pixpea.studio",
    ogImage: "https://pixpea.studio/pixpea-og.jpg",
    twitterHandle: "@pixpeastudio",
    locale: "en_IN",
    keywords: [
      "CGI studio",
      "3D animation studio",
      "3D product animation",
      "product film production",
      "photoreal product rendering",
      "Unreal Engine commercials",
      "3D motion graphics",
      "VFX for commercials",
      "packshot animation",
      "hard surface product animation",
      "hire CGI studio India",
      "3D product video services",
      "ecommerce product animation",
      "D2C brand product videos",
      "CGI ads for launches",
      "social ad CGI videos",
      "anamorphic billboard content",
      "3D anamorphic LED ads",
      "mixed reality CGI compositing",
      "AR assets USDZ",
      "WebGL glTF 3D assets",
      "real-time 3D visuals",
      "interactive product configurator",
      "Unreal Engine cinematics",
      "Blender product animation",
      "geometry nodes simulations",
      "procedural materials",
      "physics and liquid simulations",
      "particle simulations",
      "lookdev and compositing",
      "consumer goods CGI",
      "FMCG product animation",
      "beauty and cosmetics CGI",
      "electronics product films",
      "appliance product renders",
      "architectural visualization",
      "CGI studio Pune",
      "CGI studio Mumbai",
      "Pixpea Studio",
    ].join(", "),
  };

  const seo = { ...defaults, ...(pageProps?.seo || {}) };

  // --- Canonical: strip query + hash for clean URLs
  const path = router.asPath || "/";
  const cleanPath = path.split("?")[0].split("#")[0];
  const canonical = `${seo.url.replace(/\/$/, "")}${cleanPath === "/" ? "" : cleanPath
    }`;

  // ---- GA4: page_view on route changes + helper for custom events ----
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if ((window as any).gtag) {
        (window as any).gtag("config", "G-JEJRC8LSJV", { page_path: url });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  // Optional: global event helper
  useEffect(() => {
    (window as any).pixpeaTrack = (action: string, params = {}) => {
      if ((window as any).gtag) (window as any).gtag("event", action, params);
    };
  }, []);

  // ===== Add opentype.js shim: lazy-load local package and attach to window =====
  // This prevents runtime code from fetching opentype from a CDN (unpkg)
  // while keeping load non-blocking for initial paint.
  useEffect(() => {
    if (typeof window === "undefined" || (window as any).opentype) return;

    const loadOpentype = async () => {
      try {
        const mod = await import("opentype.js");
        const ot = mod && (mod.default || mod);
        if (ot && typeof window !== "undefined") {
          (window as any).opentype = ot;
          // optional debug:
          // if (process.env.NODE_ENV !== "production") console.debug("opentype attached to window");
        }
      } catch (err) {
        // swallow errors in production; optionally log in dev
        // if (process.env.NODE_ENV !== "production") console.warn("opentype import failed", err);
      }
    };

    if ("requestIdleCallback" in window) {
      try {
        (window as any).requestIdleCallback(loadOpentype, { timeout: 2000 });
      } catch {
        // fallback
        setTimeout(loadOpentype, 600);
      }
    } else {
      // fallback: after load with a small delay
      (window as any).addEventListener("load", () => setTimeout(loadOpentype, 600), {
        once: true,
      });
    }
  }, []);
  // ============================================================================

  return (
    <>
      {/* Consent Mode v2 default: deny until user chooses (best practice) */}
      <Script id="cm-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
        `}
      </Script>

      {/* ---- Google tag (gtag.js) — global (once) ---- */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JEJRC8LSJV"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-JEJRC8LSJV', { page_path: window.location.pathname });
        `}
      </Script>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Pixpea Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {!seo.noindex && (
          <meta
            name="robots"
            content="index, follow, max-image-preview:large"
          />
        )}
        {seo.noindex && <meta name="robots" content="noindex, nofollow" />}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={canonical} />

        <title>{seo.title}</title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:locale" content={seo.locale} />
        <meta property="og:site_name" content="Pixpea Studio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.twitterHandle && (
          <>
            <meta name="twitter:site" content={seo.twitterHandle} />
            <meta name="twitter:creator" content={seo.twitterHandle} />
          </>
        )}
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.ogImage} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Fonts (consider moving to pages/_document.js to silence Next warning) */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Organization Schema (AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pixpea Studio",
              url: "https://pixpeastudios.com/",
              logo: "https://pixpeastudios.com/pixpea.png",
              sameAs: [
                "https://www.instagram.com/yourpixpea",
                "https://www.linkedin.com/company/pixpea",
              ],
              description:
                "Pixpea Studio creates cinematic CGI videos, 3D product films, and real-time visuals for brands.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "MH",
                postalCode: "411001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-83083-34529",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
              knowsAbout: [
                "CGI product films",
                "3D animation for advertising",
                "Unreal Engine commercials",
                "photoreal rendering",
                "3D anamorphic billboard content",
                "mixed reality CGI compositing",
                "AR and WebGL product assets",
              ],
              areaServed: ["IN", "US", "GB", "AE", "SG", "AU"],
            }),
          }}
        />

        {/* WebSite + SearchAction (AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://pixpeastudios.com/",
              name: "Pixpea Studio",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://pixpeastudios.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Service (AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType:
                "CGI & 3D Product Animation, Anamorphic Billboard Content, Unreal Engine Commercials",
              provider: {
                "@type": "Organization",
                name: "Pixpea Studio",
                url: "https://pixpeastudios.com/",
              },
              areaServed: ["IN", "US", "GB", "AE", "SG", "AU"],
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
              keywords: [
                "3D product animation",
                "photoreal rendering",
                "Unreal Engine commercials",
                "anamorphic LED billboard",
                "mixed reality compositing",
                "AR eCommerce assets",
              ],
            }),
          }}
        />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />

      {/* Cookie Consent banner (handles consent + first page_view after accept) */}
      <CookieConsent />
    </>
  );
}

export default MyApp;
