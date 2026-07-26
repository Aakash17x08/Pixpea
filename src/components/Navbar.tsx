"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiX, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemsLeft = [
    { name: "Services", path: "/services" },
    { name: "Studio", path: "/studio" },
  ];

  const navItemsRight = [
    { name: "About Us", path: "/about" },
    { name: "BRIEF US", path: "/contact" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-[1000] px-4 sm:px-6">
      {/* Desktop & Tablet Navbar */}
      <nav
        className={`hidden md:flex justify-between items-center h-16 px-8 max-w-3xl mx-auto text-white border border-white/10 rounded-2xl transition-all duration-300 ${isScrolled
            ? "bg-black/40 backdrop-blur-md shadow-2xl"
            : "bg-black/20 backdrop-blur-sm"
          }`}
      >
        {/* Logo Left */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/pp.webp"
              alt="Pixpea Logo"
              width={100}
              height={36}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links Center */}
        <div className="flex gap-8 uppercase tracking-widest text-[11px] font-medium">
          {[...navItemsLeft, ...navItemsRight].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Action / Icon (Matching reference layout) */}
        <div
          className="flex items-center gap-4 relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="text-white hover:text-gray-300 transition-colors py-4">
            <LayoutGrid size={20} />
          </button>

          {/* Hover Dropdown */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-0 w-48 pt-2"
              >
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl">
                  <div className="flex flex-col gap-4 text-left">
                    <Link href="/sitemap" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
                      SITEMAP
                    </Link>
                    <Link href="/faq" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
                      FAQ
                    </Link>

                    <div className="h-[1px] w-full bg-white/10 my-1" />

                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/pixpeastudios/" className="text-gray-400 hover:text-white transition-colors"><FiInstagram size={16} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden flex justify-between items-center px-4 h-14 text-white rounded-full border border-white/10 transition-all duration-300 ${isScrolled
            ? "bg-black/60 backdrop-blur-md"
            : "bg-black/40 backdrop-blur-sm"
          }`}
      >
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image src="/pp.png" alt="Pixpea Logo" width={100} height={32} />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-1">
          {menuOpen ? (
            <>Cancel <FiX size={24} /></>
          ) : (
            <LayoutGrid size={24} />
          )}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center gap-8 text-lg uppercase z-[999] backdrop-blur-lg">
          {[...navItemsLeft, ...navItemsRight].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-10 px-8 py-2 bg-white text-black rounded-full text-sm font-bold"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
