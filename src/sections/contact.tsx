"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="h-screen snap-start relative flex items-center justify-center overflow-hidden bg-[#09090B]">

      {/* Background Base */}
      <div className="absolute inset-0 bg-[#09090B]" />

      {/* Glow Effects (matching Hero style) */}
      <div className="absolute top-[-200px] right-[-120px] w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-[180px]" />
      <div className="absolute bottom-[-250px] left-[-150px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090B]/40 to-[#09090B]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-400 tracking-[0.4em] text-xs md:text-sm font-medium"
        >
          LET’S CONNECT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-white text-5xl md:text-7xl font-bold leading-[1]"
        >
          Let’s Build Something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          I’m currently open to freelance work, remote opportunities,
          and collaborations. If you’re building something interesting,
          let’s talk.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-5"
        >

          {/* Email */}
          <a
            href="mailto:yourmail@gmail.com"
            className="group flex items-center justify-between border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
          >
            <span className="text-white group-hover:text-blue-400 transition">
              Email
            </span>
            <Mail size={18} className="text-zinc-400 group-hover:text-blue-400" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pankajbadhann"
            target="_blank"
            className="group flex items-center justify-between border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
          >
            <span className="text-white group-hover:text-blue-400 transition">
              GitHub
            </span>
            {/* <Github size={18} className="text-zinc-400 group-hover:text-blue-400" /> */}
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="group flex items-center justify-between border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
          >
            <span className="text-white group-hover:text-blue-400 transition">
              LinkedIn
            </span>
            {/* <Linkedin size={18} className="text-zinc-400 group-hover:text-blue-400" /> */}
          </a>

        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-xs text-zinc-600"
        >
          Built with Next.js • Designed for performance • Deployed on Vercel
        </motion.div>

      </div>
    </section>
  );
}