"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
};

export default function Github() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/pankajbadhann/repos"
        );
        const data = await res.json();
        setRepos(data?.slice(0, 6) || []);
      } catch (err) {
        console.log("GitHub fetch failed", err);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center py-32 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        GitHub Activity
      </h2>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
              {repo.name}
            </h3>

            <p className="text-zinc-400 mt-2 text-sm">
              {repo.description || "No description provided"}
            </p>

            <div className="flex justify-between mt-6 text-xs text-zinc-500">
              <span>{repo.language || "Unknown"}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Blue Glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full bg-blue-500/15 blur-[180px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-[-250px] left-[-150px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[180px]" />
    </section>
  );
}