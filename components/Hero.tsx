"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal, ScanLine, FolderGit2, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

interface HeroProps {
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 py-20 text-center overflow-hidden">
      {/* Background ambient glow in normal basic color (Electric Blue / Tech Cyan) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Top Diagnostic Pills */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 font-mono text-xs mb-8 shadow-lg shadow-blue-500/10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="tracking-widest uppercase font-semibold">SECURITY PROTOCOLS VERIFIED</span>
        <span className="text-blue-500">•</span>
        <span>LATENCY: 14ms</span>
        <span className="text-blue-500 hidden sm:inline">•</span>
        <span className="hidden sm:inline">UBUNTU 24.04 LTS</span>
      </motion.div>

      {/* Cyber Title matching Image 3 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-mono font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-white uppercase max-w-5xl leading-tight"
      >
        WELCOME TO YASSINE&apos;S ARCHIVE
      </motion.h1>

      {/* Roles & Subtitles */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-mono text-xs sm:text-sm md:text-base text-blue-300 mt-6 tracking-[0.2em] uppercase font-medium flex items-center justify-center flex-wrap gap-2 sm:gap-4"
      >
        <span>FULL-STACK DEVELOPER</span>
        <span className="text-blue-500">|</span>
        <span>CLOUD SYSTEMS SPECIALIST</span>
        <span className="text-blue-500">|</span>
        <span className="text-emerald-400 font-bold">PFE CANDIDATE 2027</span>
      </motion.p>

      {/* Editorial Summary */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="text-slate-300 max-w-2xl mt-6 text-sm sm:text-base font-light leading-relaxed font-sans"
      >
        Engineering modular client-server web ecosystems (<span className="text-blue-300 font-mono">React, Vite, Node.js, Spring Boot</span>) paired with enterprise cloud supervision (<span className="text-cyan-300 font-mono">Kibana, Linux, WAF, Azure</span>). Dedicated to zero-vulnerability architectures and ultra-responsive UX.
      </motion.p>

      {/* Action Buttons matching Image 3 & 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <a
          href="#whoami"
          className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30"
        >
          <ScanLine className="w-4 h-4" />
          <span>SCAN PROFILE</span>
        </a>

        <a
          href="#projects"
          className="px-6 py-3 rounded bg-slate-900/80 border border-blue-500/40 text-blue-200 hover:text-white hover:bg-blue-600/20 font-mono text-sm font-semibold transition-all flex items-center gap-2"
        >
          <FolderGit2 className="w-4 h-4 text-blue-400" />
          <span>ACCESS ARCHIVES</span>
        </a>

        <button
          onClick={onOpenTerminal}
          className="px-6 py-3 rounded bg-blue-950/60 border border-blue-400/50 text-blue-300 hover:text-white hover:bg-blue-600/30 font-mono text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>LAUNCH BASH</span>
        </button>
      </motion.div>

      {/* Quick Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-16 text-slate-500 text-xs font-mono flex flex-col items-center gap-1 animate-bounce"
      >
        <span>INITIALIZING TELEMETRY</span>
        <ArrowDown className="w-4 h-4 text-blue-400" />
      </motion.div>
    </section>
  );
}
