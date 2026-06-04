"use client";

import { motion } from "framer-motion";

const frontend = ["Next.js", "React", "TypeScript", "Tailwind"];
const backend = ["Node.js", "Express", "Prisma"];
const database = ["PostgreSQL", "MongoDB"];
const learning = ["System Design", "AI/LLMs", "Cloud"];

export default function Stack() {
  return (
    <section className="h-screen snap-start flex items-center justify-center relative overflow-hidden bg-[#09090B] px-6">

      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-250px] left-[-150px] w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full" />

      {/* Animated light sweep */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-full w-[250px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-14 text-white"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">
              {frontend.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full border border-white/10 text-white/80 hover:bg-white/5 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2">
              {backend.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full border border-white/10 text-white/80 hover:bg-white/5 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Database
            </h3>

            <div className="flex flex-wrap gap-2">
              {database.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full border border-white/10 text-white/80 hover:bg-white/5 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Currently Exploring
            </h3>

            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full border border-white/10 text-green-300 hover:bg-white/5 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}