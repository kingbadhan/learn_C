"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative min-h-screen snap-start flex items-center justify-center py-24 px-6 bg-[#09090B] overflow-hidden">

      {/* Background glow (Hero consistency) */}
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-blue-500/10 blur-[180px]" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-blue-400 tracking-[0.4em] text-xs font-medium">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Projects
          </h2>

          <p className="text-zinc-400 mt-4 max-w-xl">
            A collection of things I’ve built while exploring systems, design, and engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack?.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-300 bg-black/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover CTA */}
              <div className="mt-6 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">
                View Case Study →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}