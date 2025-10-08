"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  MessageCircle,
  Globe,
  Brain,
  Cloud,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Configuration
 * - Replace whatsappNumber with your number (no +)
 */
const whatsappNumber = "6281234567";
const whatsappMessage = "Hi everywhere corps i would like to ask for partnership";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function EverywhereCorpsPro() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Everywhere Corps rebuilt our marketing site — load times dropped 72% and conversions went up.",
      author: "Sari — Head of Growth, BloomTech",
    },
    {
      quote:
        "They automated our onboarding and saved the team 10+ hours a week. Highly recommended.",
      author: "Riko — Ops Lead, AgroScale",
    },
    {
      quote:
        "Fast, clear communication and a scalable solution — launch to production in 3 weeks.",
      author: "Maya — Product Manager, Coral Labs",
    },
  ];

  useEffect(() => {
    // initialize from system preference
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);

    // quick auto-cycle testimonials
    const t = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Everywhere Corps — Digital Solutions & AI Automation</title>
        <meta name="description" content="Everywhere Corps builds fast websites, AI automation and cloud solutions. Let's partner." />
        <meta property="og:title" content="Everywhere Corps — Digital Solutions & AI Automation" />
        <meta property="og:description" content="Everywhere Corps builds fast websites, AI automation and cloud solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#f0fdfa] to-[#e6fff4] dark:from-[#06121a] dark:via-[#071824] dark:to-[#04101a] text-slate-900 dark:text-slate-100">
        {/* NAV */}
        <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 py-3 rounded-2xl backdrop-blur bg-white/40 dark:bg-slate-900/40 border border-white/10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C897] to-[#00B3A4] text-white font-semibold">
              EC
            </div>
            <div>
              <div className="text-sm font-semibold">Everywhere Corps</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Digital · AI · Cloud</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-[#00C897]">Home</a>
            <a href="#services" className="hover:text-[#00C897]">Services</a>
            <a href="#work" className="hover:text-[#00C897]">Work</a>
            <a href="#contact" className="hover:text-[#00C897]">Contact</a>
            <button
              onClick={() => setDarkMode((s) => !s)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setDarkMode((s) => !s)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        {/* HERO */}
        <section id="home" className="pt-28 pb-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#008e6b] to-[#00c897] leading-tight"
              >
                Beautiful builds. Smart automation. Everywhere.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-4 text-slate-700 dark:text-slate-300 max-w-xl"
              >
                We craft fast, accessible websites and AI-enabled automations that save time and convert visitors into customers. Focus on your vision — we build the tools.
              </motion.p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#00C897] hover:bg-[#00b98a] text-white font-medium shadow-lg transition"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>

                <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/90 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-transparent hover:shadow transition">
                  View Services
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/5 px-3 py-2 rounded-lg shadow-sm">
                  <CheckCircle size={16} className="text-[#00C897]" /> Rapid delivery
                </li>
                <li className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/5 px-3 py-2 rounded-lg shadow-sm">
                  <CheckCircle size={16} className="text-[#00C897]" /> Scalable systems
                </li>
                <li className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/5 px-3 py-2 rounded-lg shadow-sm">
                  <CheckCircle size={16} className="text-[#00C897]" /> Data-driven
                </li>
              </ul>
            </div>

            {/* Visual / illustration card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md shadow-xl"
            >
              <div className="mb-4">
                <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-[#f6fffb] to-[#ecfff7] dark:from-[#042226] dark:to-[#063033] p-6">
                  <h4 className="text-lg font-semibold mb-2">Demo dashboard</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Small example of the type of dashboards we build for monitoring and automation.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-inner">
                  <div className="text-xs text-slate-500">Visitors</div>
                  <div className="text-xl font-semibold">6.4k</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-inner">
                  <div className="text-xs text-slate-500">Conversions</div>
                  <div className="text-xl font-semibold">5.6%</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-inner col-span-2">
                  <div className="text-xs text-slate-500">Active Automations</div>
                  <div className="text-lg font-medium mt-1">12 workflows</div>
                </div>
              </div>

              {/* decorative floating blob */}
              <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full blur-3xl bg-gradient-to-br from-[#00C897]/20 to-[#00B3A4]/10 pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="services" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-semibold text-[#007a5a]">How we help</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">From marketing sites to full automation pipelines — we design for humans and scale for teams.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Globe size={24} />, title: "Web Development", text: "Fast, accessible, SEO-first web experiences." },
                { icon: <Brain size={24} />, title: "AI Automation", text: "Automations that reduce repetitive work." },
                { icon: <Cloud size={24} />, title: "Cloud & Infra", text: "Managed and secure cloud deployments." },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-[#ecfff9] dark:bg-[#012e2b] text-[#00C897]">{f.icon}</div>
                    <div>
                      <h4 className="font-semibold">{f.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK / TESTIMONIALS */}
        <section id="work" className="py-16 bg-white/40 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">What clients say</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous"
                  className="p-2 rounded-lg bg-white/70 dark:bg-slate-800/60"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                  aria-label="Next"
                  className="p-2 rounded-lg bg-white/70 dark:bg-slate-800/60"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <AnimatePresence initial={false} mode="wait">
                <motion.blockquote
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.45 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg"
                >
                  <p className="text-lg text-slate-700 dark:text-slate-200">{testimonials[testimonialIndex].quote}</p>
                  <footer className="mt-3 text-sm text-slate-500 dark:text-slate-400">— {testimonials[testimonialIndex].author}</footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold text-[#00B3A4]">Ready to get started?</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us about your project and we’ll propose a plan.</p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium shadow-lg transition"
              >
                <MessageCircle size={18} /> Message on WhatsApp
              </a>

              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-transparent hover:shadow transition">
                Request proposal
              </a>
            </div>
          </div>
        </section>

        {/* Floating Chat preview + CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            <AnimatePresence>
              {chatOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="mb-3 w-72 rounded-xl bg-white dark:bg-slate-800 shadow-2xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#ecfff9] rounded-md text-[#00C897]">
                      <MessageCircle size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-700 dark:text-slate-200 font-semibold">Chat with Everywhere Corps</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Hi! Tell us about your project — we usually reply within a few hours.</div>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-[#25D366] text-white font-medium"
                    >
                      Open WhatsApp
                    </a>
                    <button
                      onClick={() => setChatOpen(false)}
                      className="px-3 py-2 rounded-md bg-white/10 border dark:bg-transparent"
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setChatOpen((s) => !s)}
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full px-4 py-3 shadow-2xl"
              aria-expanded={chatOpen}
              aria-controls="whatsapp-chat"
              title="Chat with us"
            >
              <MessageCircle size={18} />
              <span className="hidden md:inline-block font-medium">Chat</span>
            </motion.button>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pb-10 text-center text-slate-600 dark:text-slate-400">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-4">© {new Date().getFullYear()} Everywhere Corps — Built for people and scale.</div>
            <div className="text-xs">Made with care • Privacy-first • Accessible</div>
          </div>
        </footer>

        {/* small keyframes */}
        <style jsx>{`
          @keyframes floaty {
            0% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0); }
          }
          button[aria-expanded="true"] {
            animation: floaty 2.8s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  );
}
