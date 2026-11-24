"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Server, ShieldCheck, Code } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 block mb-2">
          03 // Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          SKILLS & ARCHITECTURES
        </h2>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-3xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                  {getIcon(index)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>Ready for Production</span>
              <span className="text-emerald-400">● Active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
