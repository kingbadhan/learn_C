"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      {/* HERO */}
      <section className="h-screen snap-start flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">Hi, I’m Pankaj 👋</h1>
          <p className="text-gray-400 mt-4">
            Full Stack Developer
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="h-screen snap-start flex items-center justify-center bg-zinc-950 text-white">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-400 mt-6 leading-relaxed">
            I am a full stack developer focused on building scalable SaaS apps,
            modern UI systems and backend APIs with strong architecture.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="h-screen snap-start flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Skills</h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-xl">
            {[
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "TypeScript",
              "Tailwind",
              "Docker",
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-zinc-800 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="h-screen snap-start flex items-center justify-center bg-zinc-950 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full px-6"
        >
          <h2 className="text-4xl font-bold mb-8">Future Projects</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1,2,3,4,5,6].map((i) => (
              <div
                key={i}
                className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold">Project {i}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Full stack application with authentication and APIs.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="h-screen snap-start flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">Contact</h2>

          <p className="text-gray-400 mt-4">
            pankajbadhann@gmail.com
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg">
            Hire Me
          </button>
        </motion.div>
      </section>

    </main>
  );
}