import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/xkgbprgn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white pt-24 px-6 md:px-20 text-lg">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,_#00ff88_10%,_transparent_60%)] opacity-20 animate-[spin_8s_linear_infinite] top-[-50%] left-[-50%]" />
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,_#00ff88_10%,_transparent_60%)] opacity-10 animate-[spin_8s_linear_infinite] top-[-60%] left-[-40%]" />
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,_#00ff88_10%,_transparent_60%)] opacity-10 animate-[spin_8s_linear_infinite] top-[-55%] left-[-45%]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Column 1 */}
        <div className="flex flex-col">
          <img src="/pp.webp" alt="Pixpea Studios" className="w-40 mb-1" />

          <p className="text-gray-400 mb-6">
            Crafting visual experiences that connect, convert, and captivate.
          </p>

          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>

          <div className="flex gap-5 text-2xl mb-2">
            <div className="group relative">
              <a
                href="https://www.instagram.com/pixpeastudios/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"
              >
                <FaInstagram className="text-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110" />
              </a>

              <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-xs px-3 py-1 rounded">
                Instagram
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base mb-2 break-all">
            sales@pixpeastudios.com
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>

          {submitted ? (
            <div className="bg-green-100 border border-green-300 p-6 rounded-md text-center">
              <h4 className="text-2xl font-bold text-green-700 mb-2">
                Thank you!
              </h4>
              <p className="text-gray-700">We’ve received your message.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-md"
            >
              <input
                type="text"
                name="name"
                placeholder="First Name"
                autoComplete="name"
                required
                className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />

              <label className="flex items-start gap-2 text-sm text-gray-400">
                <input type="checkbox" required />
                <span>
                  I agree to the{" "}
                  <a href="/terms" className="underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="bg-black text-white py-2 rounded-md hover:bg-orange-600 transition-colors font-semibold"
                disabled={loading}
              >
                {loading ? "Sending..." : "ENQUIRE"}
              </button>
            </form>
          )}
        </div>

        {/* Links */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 md:pt-0">
          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About Us"].map((item, i) => (
                <li key={i}>
                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About Us"
                          ? "/about"
                          : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="relative inline-block group text-gray-400 hover:text-white transition"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Terms</h3>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Sitemap"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={
                        item === "Terms & Conditions"
                          ? "/terms"
                          : item === "Privacy Policy"
                            ? "/privacy"
                            : item === "Sitemap"
                              ? "/sitemap"
                              : `/${item.toLowerCase().split(" ")[0]}`
                      }
                      className="relative inline-block group text-gray-400 hover:text-white transition"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Global Contacts</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <strong>US:</strong> +1 614 591 3140
              </li>
              <li>
                <strong>UK:</strong> +44 845 154 9652
              </li>
              <li>
                <strong>APAC:</strong> +653 1251 975
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600 space-y-1">
        <p>© 2016 – 2026 Pixpea Studio. All rights reserved.</p>
        <p className="text-gray-500">
          <a
            href="https://houseofcgi.com"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            House of CGI
          </a>{" "}
          is an authorized and official distribution partner of Pixpea Studios.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
