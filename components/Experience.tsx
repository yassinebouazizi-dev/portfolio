"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 block mb-2">
          02 // Track Record & Internships
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          PROFESSIONAL EXPERIENCE
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="rounded-3xl bg-[#111116] border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-white/20 transition-all"
          >
            {/* Top row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs">
                    {exp.type}
                  </span>
                </div>
                <p className="text-base text-neutral-300 font-medium mt-1">
                  {exp.role}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-light leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 mr-2">Tools & Tech:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
