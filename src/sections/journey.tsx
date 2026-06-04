"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2021",
    title: "Curiosity",
    description:
      "Everything started with a simple question — how do websites, apps and software actually work behind the scenes?",
  },
  {
    year: "2022",
    title: "Learning",
    description:
      "Dived into frontend, backend, databases, APIs, deployment and system design through relentless experimentation.",
  },
  {
    year: "2023",
    title: "Building",
    description:
      "Stopped consuming tutorials and started creating projects. Ideas became products and code became experience.",
  },
  {
    year: "2024",
    title: "Exploration",
    description:
      "Entered the world of AI, automation and intelligent systems. Focus shifted from coding features to building systems.",
  },
  {
    year: "Now",
    title: "Creating Impact",
    description:
      "Building meaningful products, exploring AI deeply and preparing for larger real-world challenges.",
  },
];

export default function Journey() {
  return (
    <section className="relative min-h-screen snap-start flex items-center overflow-hidden bg-[#09090B]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full" />

      {/* Huge Background Text */}
      <h1 className="absolute top-20 left-10 text-[18vw] font-black text-white/[0.02] leading-none select-none">
        JOURNEY
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 tracking-[0.4em] text-xs font-medium">
            THE PATH
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-bold text-white">
            From Curiosity
            <br />
            To Creation
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
            Every project, mistake, experiment and breakthrough shaped the
            developer I am becoming today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

          <div className="space-y-16">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                className="relative pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent" />

                  <span className="text-cyan-400 text-sm tracking-widest">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}