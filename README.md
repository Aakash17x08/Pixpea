# Pixpea Studios — Cinematic CGI, 3D Product Animation & AI Visuals

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pixpeastudios.netlify.app-00ff88?style=for-the-badge&logo=netlify&logoColor=black)](https://pixpeastudios.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.19-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Cloudflare R2](https://img.shields.io/badge/Cloudflare%20R2-Storage-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/products/r2/)

> **Pixpea Studio** is a global visual production studio crafting cinematic CGI videos, photoreal 3D product films, Unreal Engine commercials, and AI-driven marketing visuals for high-growth D2C brands, luxury enterprises, and digital agencies worldwide.

🌐 **Live URL**: [https://pixpeastudios.netlify.app/](https://pixpeastudios.netlify.app/)  
📂 **GitHub Repository**: [https://github.com/mayur-web9/pixpea-studios](https://github.com/mayur-web9/pixpea-studios)

---

## 🌟 Executive Summary & Repository Description

**Pixpea Studios** is a state-of-the-art, high-performance web experience developed to showcase high-fidelity 3D CGI rendering, video commercial reels, and creative production pipelines. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, the application leverages advanced **Framer Motion** physics, custom **HTML5 Canvas 2D frame interpolation**, and smooth scroll interactions to deliver an award-winning agency look and feel.

Assets are streamed smoothly through **Cloudflare R2 CDN**, enabling instant rendering of video reels and frame-scrubbed 3D renders without bogging down client load times.

---

## 🚀 Key Highlights & Interactive Features

### 1. 🎞️ Dual-Phase Scroll-Scrubbed Hero Experience
- **Phase 1 (Video Showreel)**: An immersive fullscreen video reel (`Landing page_1.mp4`) that subtly scales up as the user scrolls.
- **Phase 2 (Canvas Frame Scrubbing)**: A Sheryians-inspired frame-by-frame 3D sequence rendered dynamically onto an HTML5 Canvas using a buttery-smooth **Linear Interpolation (Lerp)** algorithm (`factor = 0.1`) that preloads image frames from Cloudflare R2 and renders frame transforms in sync with window scroll.

### 2. 🔦 Interactive "Flashlight" Dynamic Glow Mask (`GlowText.tsx`)
- Mouse-tracking radial gradient glow layer using Framer Motion springs (`damping: 25, stiffness: 200, mass: 0.5`).
- Dual-layer typography composed of a stroked outline base layer and a top masked neon emerald layer (`#00ff88`) revealed precisely under the cursor position via `maskImage: radial-gradient(...)`.

### 3. ♾️ Infinite Seamless Brand Marquee (`BrandLogos.tsx`)
- Infinite horizontal scroll displaying trust badges from world-class brands (Dior, Nykaa, Skechers, Loreal, Vodafone, Lenskart, Arrow, etc.).
- Dual bilateral alpha gradient masks (`from-black to-transparent`) creating seamless fade edges, with hover-pause functionality.

### 4. 🎬 Dynamic Viewport-Triggered Project Showcase (`Service.tsx`)
- Fullscreen scroll-snapping narrative layout showcasing flagship CGI works (Air Purifier, Skechers Commercial, Casio Watch).
- Uses `useInView` & `useScroll` to trigger autoplay on entering the viewport, with dynamic parallax text translations (`yText`) and responsive video scale transforms (`scaleVideo`).
- Dynamic background ambient glow that shifts hue depending on the active project card.

### 5. 🎴 3D Perspective Sticky Parallax Stacking Cards (`VideoGallery.tsx`)
- Stacked "AI UNLEASHED" showcase using Framer Motion 3D perspective transforms (`transformPerspective: 2000`).
- Progressively scales cards down (`scale: [1, 0.8]`), rotates them along the X-axis (`rotateX: [0, -15]`), and translates them upwards (`y: ["0%", "-20%"]`) as users scroll through the deck.

### 6. 🔄 6-Stage Creative Pipeline Journey (`studio.tsx`)
- Step-by-step sticky pipeline breakdown (Discovery, Concept, 3D Modeling, Animation, Lighting, Sound & Delivery) ending with a dynamic completion card and direct CTA.

### 7. 📬 Integrated Project Briefing System (`contact.tsx` & `Footer.tsx`)
- Clean asynchronous enquiry and brief submission form integrated with **Formspree** (`https://formspree.io/f/xkgbprgn`).
- Instant state management with custom success modals and responsive client feedback.

### 8. 🔍 Advanced SEO, AEO & Google Analytics 4 Consent Mode v2
- Comprehensive Schema.org JSON-LD structured data: `Organization`, `WebSite`, `Service`, `FAQPage`.
- Pre-configured Canonical URL generation, OpenGraph tags, and Twitter Cards.
- Google Analytics 4 integration (`G-JEJRC8LSJV`) governed by Google Consent Mode v2 default denials until cookie consent is approved.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology / Library | Purpose |
|---|---|---|
| **Framework** | [Next.js 13.5](https://nextjs.org/) | SSG static exports (`output: 'export'`), route optimization |
| **Language** | [TypeScript 6.0](https://www.typescriptlang.org/) | Strict type safety, interface contracts |
| **UI Library** | [React 18.2](https://reactjs.org/) | Component-driven reactive architecture |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Dark-mode design system, glassmorphism, responsive utilities |
| **Motion & Physics** | [Framer Motion 12.19](https://www.framer.com/motion/) | Spring physics, motion values, parallax scroll, 3D rotateX |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Modern UI glyphs and social media brand vectors |
| **Asset Delivery** | [Cloudflare R2 CDN](https://www.cloudflare.com/products/r2/) | High-speed global edge streaming for heavy MP4s and frame sequences |
| **Typography** | Inter & Manrope | Clean, futuristic agency typography |
| **Form Backend** | [Formspree](https://formspree.io/) | Serverless contact and brief submissions |
| **Deployment** | [Netlify](https://www.netlify.com/) | Automated CI/CD edge hosting |

---

## 📂 Project Structure

```
pixpea-studios/
├── public/
│   ├── BrandLogos/          # Enterprise client logos (Nykaa, Dior, Skechers, etc.)
│   ├── Internals_images/    # Project stills and high-res renders
│   ├── videos/              # Local commercial MP4s
│   ├── frames/              # Canvas frame sequence assets
│   ├── favicon.ico          # Browser favicons & app icons
│   ├── pp.webp              # Optimized studio brand logos
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Glassmorphic floating nav with mobile overlay & dropdown
│   │   ├── Hero.tsx         # Dual-phase Video + Canvas 3D Lerp frame scrubber
│   │   ├── GlowText.tsx     # Framer Motion flashlight mouse cursor reveal
│   │   ├── BrandLogos.tsx   # Continuous marquee carousel with gradient fades
│   │   ├── Service.tsx      # Viewport-aware scroll-triggered showcase cards
│   │   ├── VideoGallery.tsx # Sticky 3D perspective stacked card deck
│   │   ├── Showreel.tsx     # Embedded video showreel player
│   │   ├── CookieConsent.tsx# Consent Mode v2 compliant banner
│   │   └── Footer.tsx       # Multi-column footer with live enquiry form
│   ├── pages/
│   │   ├── _app.tsx         # Global layout, GA4, OpenType shim, JSON-LD Schemas
│   │   ├── index.tsx        # Homepage landing composition
│   │   ├── studio.tsx       # Studio vision, statistics & 6-step creative pipeline
│   │   ├── about.tsx        # About studio, mission, vision & core value cards
│   │   ├── services.tsx     # Services portal page
│   │   ├── contact.tsx      # Comprehensive project brief submission form
│   │   ├── faq.tsx          # Frequently asked questions with structured answers
│   │   ├── blog.tsx         # Blog and insights directory
│   │   ├── privacy.tsx      # Privacy policy
│   │   ├── terms.tsx        # Terms and conditions
│   │   ├── sitemap.tsx      # HTML interactive sitemap
│   │   └── work/            # Dedicated CGI case study pages
│   │       ├── 2d-animation.tsx
│   │       ├── 3d-cgi.tsx
│   │       ├── 3d-product-commercial.tsx
│   │       ├── ai-video-generation.tsx
│   │       ├── build-with-influencers.tsx
│   │       └── video-editing.tsx
│   ├── styles/
│   │   └── globals.css      # Tailwind base and smooth scrolling rules
│   └── types/
│       └── global.d.ts      # Global TypeScript definitions
├── next.config.js           # Static export configuration
├── tailwind.config.js       # Custom marquee keyframes & fonts
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & build scripts
```

---

## 🎨 Visual Design & Styling Philosophy

- **Color Harmony**: Deep OLED blacks (`#000000`, `#020202`, `#050505`) paired with vivid neon emerald accents (`#00ff88`, `#22c55e`), subtle slate borders (`rgba(255, 255, 255, 0.1)`), and glowing ambient radial backdrops.
- **Glassmorphism**: Translucent floating surfaces utilizing `backdrop-blur-md` and `backdrop-blur-xl` for modern dimensional layering.
- **Typography Hierarchy**: High-contrast headline typography with extra-bold weights (`font-black`, `tracking-tighter`) combined with mono-spaced metadata badges (`tracking-[0.4em]`).
- **Responsive Layout**: Designed mobile-first, adapting seamlessly across mobile viewports, tablets, standard desktop screens, and ultrawide 4K monitors.

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayur-web9/pixpea-studios.git
   cd pixpea-studios
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Building for Production

To create a static production export:
```bash
npm run build
```
The optimized static build output will be generated inside the `out/` directory ready to be hosted on **Netlify**, **Vercel**, or **Cloudflare Pages**.

---

## 🌐 Deployment

This project is configured with `output: 'export'` in `next.config.js` and is continuously deployed on **Netlify**:
- **Production URL**: [https://pixpeastudios.netlify.app/](https://pixpeastudios.netlify.app/)
- **Custom Domain**: [https://pixpeastudios.com/](https://pixpeastudios.com/)

---

## 📬 Contact & Connect

- **Website**: [pixpeastudios.netlify.app](https://pixpeastudios.netlify.app/)
- **Instagram**: [@pixpeastudios](https://www.instagram.com/pixpeastudios/)
- **LinkedIn**: [Pixpea Studio](https://www.linkedin.com/company/pixpea)
- **Email**: [sales@pixpeastudios.com](mailto:sales@pixpeastudios.com) / [hello@pixpea.studio](mailto:hello@pixpea.studio)

---

<div align="center">
  <sub>© 2016 – 2026 Pixpea Studio. Crafted with precision for forward-thinking brands.</sub>
</div>
