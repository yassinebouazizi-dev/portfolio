"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { PROJECTS, Project } from "@/lib/data";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack Web", "AI & Mobile", "Cloud & DevOps", "Backend Systems"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 block mb-2">
            01 // Portfolio & Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid / Editorial Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative rounded-3xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            data-cursor="Open"
          >
            {/* Visual Header / Cover Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />

              {/* Top Meta Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-neutral-400 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between -mt-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-sm font-medium text-blue-400/90 font-mono mt-1">
                  {project.tagline}
                </p>

                <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono"
                    >
                      <Zap className="w-3 h-3 text-blue-400" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Tags & Links */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="Code"
                  >
                    <Github className="w-4 h-4 text-neutral-400" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
