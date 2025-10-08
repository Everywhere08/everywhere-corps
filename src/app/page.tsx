"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Moon, MessageCircle, Globe, Brain, Cloud } from "lucide-react";

export default function EverywhereCorps() {
  const [darkMode, setDarkMode] = useState(false);

  const whatsappNumber = "6281234567";
  const whatsappMessage = "Hi everywhere corps i would like to ask for partnership";
  const whatsappLink = `https://wa.me/6289677866163?text=Hi%20everywhere%20corps%20i%20would%20like%20to%20ask%20for%20partnership`;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#f0fdfa] to-[#e0f7f5] dark:from-[#0b1622] dark:via-[#0f1f2d] dark:to-[#0a141f] text-gray-900 dark:text-gray-100 font-body relative overflow-hidden">
        {/* Navbar */}
        <header className="flex items-center justify-between px-8 py-6 fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl font-heading font-bold text-[#00C897]">Everywhere Corps</h1>
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="#home" className="hover:text-[#00C897] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#00C897] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#00C897] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#00C897] transition-colors">Contact</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-[#00C897]/10 hover:bg-[#00C897]/20 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </header>

        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-[#00C897] to-[#00B3A4] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Digital Solutions That Work, Everywhere
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg max-w-2xl mb-10 text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Everywhere Corps provides IT solutions, website development, and AI automation — helping businesses grow smarter.
          </motion.p>

          <Button
            asChild
            className="bg-[#00C897] text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform shadow-lg font-heading"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              🚀 Chat on WhatsApp
            </a>
          </Button>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-center mb-14 text-[#00C897]">
            Our Services
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Globe size={36} />, title: "Web Development", desc: "Custom-built, scalable websites for your business." },
              { icon: <Brain size={36} />, title: "AI Integration", desc: "Leverage automation and data intelligence with AI." },
              { icon: <Cloud size={36} />, title: "Cloud Solutions", desc: "Reliable and secure cloud infrastructure setup." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-[#00C897] mb-4 flex justify-center">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#00C897] mb-6">
            About Us
          </h3>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Everywhere Corps is a digital innovation company focused on sustainability and smart automation. We deliver end-to-end IT solutions combining design, development, and artificial intelligence for modern enterprises.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#00C897] mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Have a project or partnership idea? We’d love to hear from you.
          </p>
          <Button
            className="bg-[#00C897] text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform shadow-lg font-heading"
          >
            <a href="https://wa.me/6289677866163?text=Hi%20everywhere%20corps%20i%20would%20like%20to%20ask%20for%20partnership" target="_blank" rel="noopener noreferrer">
              💬 Contact Us on WhatsApp
            </a>
          </Button>
        </section>

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/6289677866163?text=Hi%20everywhere%20corps%20i%20would%20like%20to%20ask%20for%20partnership"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full p-4 shadow-xl cursor-pointer hover:scale-110 transition-transform"
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} />
        </motion.a>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} Everywhere Corps. All rights reserved.
        </footer>
      </main>
    </>
  );
}
