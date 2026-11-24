"use client";

import { useState } from "react";
import { Download, Github, Mail, Phone, ExternalLink, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function WhoAmIHud() {
  const [activeTab, setActiveTab] = useState<"overview" | "cloud" | "fullstack" | "pfe">("overview");

  return (
    <section id="whoami" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Top HUD Header Tab */}
      <div className="flex items-center justify-between text-xs font-mono text-blue-300 mb-2">
        <div className="flex items-center gap-2 bg-blue-950/60 border-t border-l border-r border-blue-500/40 px-3 py-1 rounded-t">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>INITIATING USER...</span>
        </div>
        <div className="font-mono text-sm tracking-wider text-blue-400 font-bold hidden sm:block">
          // WHO AM I ??
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span>CPU: 8 CORES</span>
          <span>MEM: 16GB</span>
          <span className="text-blue-400">NODE_ENV: PROD</span>
        </div>
      </div>

      {/* Main Cyber HUD Panel */}
      <div className="rounded-xl border border-blue-500/40 bg-[#0a1020] p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-blue-950/50">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Avatar & System Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Avatar Container */}
            <div className="relative rounded border border-blue-500/40 bg-slate-950/80 p-3 overflow-hidden group">
              <div className="relative h-64 sm:h-72 w-full rounded bg-gradient-to-b from-blue-950/40 via-slate-900 to-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 flex items-center justify-center font-mono text-[9px] text-blue-400 select-none overflow-hidden leading-tight p-2">
                  01011001 01000001 01010011 01010011 01001001 01001110 01000101<br />
                  BOUAZIZI // FULL-STACK WEB // CLOUD SYSTEMS // PFE 2027<br />
                  REACT // SPRING BOOT // NODE // KIBANA // LINUX // AZURE<br />
                  ISET SIDI BOUZID // DWM // BAC+3 // LICENSE INFORMATIQUE
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full border-2 border-blue-400/90 p-1 bg-blue-950/60 shadow-2xl shadow-blue-500/40 flex items-center justify-center overflow-hidden ring-4 ring-blue-500/20">
                    <img
                      src="/yassine_avatar.jpg"
                      alt="Yassine Bouazizi"
                      className="w-full h-full object-cover filter contrast-105 brightness-105 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <span className="mt-3 font-mono text-sm font-bold text-white tracking-wider">
                    YASSINE BOUAZIZI
                  </span>
                  <span className="font-mono text-xs text-blue-300">@yassinebouazizi-dev</span>
                </div>

                <div className="absolute top-2 left-2 text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                  STATUS: VERIFIED
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  AVAILABLE (FEB 2027)
                </div>
              </div>
            </div>

            {/* uname -a Diagnostic Box */}
            <div className="p-3.5 rounded bg-slate-950/90 border border-blue-500/30 font-mono text-xs space-y-1.5">
              <div className="text-blue-400 font-bold border-b border-blue-900/50 pb-1 flex items-center justify-between">
                <span>uname -a</span>
                <span className="text-[10px] text-slate-400">Linux core</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[11px] pt-1">
                <span className="text-slate-400">Kernel:</span>
                <span className="col-span-2 text-white font-semibold">6.8.0-generic</span>

                <span className="text-slate-400">Hostname:</span>
                <span className="col-span-2 text-blue-300">yassine-workstation</span>

                <span className="text-slate-400">Architecture:</span>
                <span className="col-span-2 text-white">x86_64</span>

                <span className="text-slate-400">OS Build:</span>
                <span className="col-span-2 text-cyan-300">Ubuntu 24.04 LTS</span>
              </div>
            </div>

            {/* Bio & Exfiltrate Button */}
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                Hello, I am Yassine Bouazizi
              </div>
              <p className="leading-relaxed text-slate-400">
                Specializing in scalable web platforms, clean REST architectures (Spring Boot, Node.js), and resilient cloud supervision systems (Kibana, Linux, WAF). With dual internship experience at <strong className="text-blue-300">VERMEG</strong> and <strong className="text-blue-300">EDDIUM PLATINUM</strong>, I deliver robust, production-ready systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/cv_yassine_bouazizi.pdf"
                  target="_blank"
                  download="CV_Yassine_Bouazizi.pdf"
                  className="px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>EXFILTRATE RÉSUMÉ (CV)</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/yassinebouazizi-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:bouazizi.yassine55@gmail.com"
                    className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+21690225448"
                    className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-blue-400 hover:text-blue-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Certifications & Badges */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="flex items-center gap-2 flex-wrap border-b border-blue-900/50 pb-3 font-mono text-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                [ Overview ]
              </button>
              <button
                onClick={() => setActiveTab("cloud")}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === "cloud"
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                Cloud Systems & Security
              </button>
              <button
                onClick={() => setActiveTab("fullstack")}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === "fullstack"
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                Full-Stack Architecture
              </button>
              <button
                onClick={() => setActiveTab("pfe")}
                className={`px-3 py-1 rounded transition-all ${
                  activeTab === "pfe"
                    ? "bg-emerald-600 text-white font-bold"
                    : "bg-slate-900 text-emerald-400 hover:text-white"
                }`}
              >
                PFE Stage 2027
              </button>
            </div>

            {/* Identity Grid */}
            <div className="p-4 rounded bg-slate-950/60 border border-blue-500/20 font-mono text-xs space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">User Handle:</span>
                  <span className="text-white font-semibold">guest@yassine.dev</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Real Name:</span>
                  <span className="text-blue-300 font-semibold">Yassine Bouazizi</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Current Role:</span>
                  <span className="text-white font-semibold">Full-Stack Developer & Cloud Systems</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Academic Degree:</span>
                  <span className="text-cyan-300 font-semibold">Licence Informatique (DWM) - ISET Sidi Bouzid</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Target Internship:</span>
                  <span className="text-emerald-400 font-bold">Stage PFE (4-6 mois, Fév — Juin 2027)</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Mobility & Relocation:</span>
                  <span className="text-white">Tunisia (National & Remote International)</span>
                </div>
              </div>
            </div>

            {/* Certifications Achieved */}
            <div className="space-y-2 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-wider text-blue-400 font-semibold uppercase">
                  Credentials & Certifications
                </span>
                <span className="text-[10px] text-slate-500">5 ACCREDITATIONS</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2.5 rounded bg-slate-950 border border-blue-500/30 text-center text-xs">
                  <div className="text-[10px] text-blue-400 font-bold">ISET SIDI BOUZID</div>
                  <div className="font-semibold text-white">Licence DWM</div>
                  <div className="text-[9px] text-slate-500">2024 - 2027</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-blue-500/30 text-center text-xs">
                  <div className="text-[10px] text-cyan-400 font-bold">MICROSOFT</div>
                  <div className="font-semibold text-white">Azure Fundamentals</div>
                  <div className="text-[9px] text-slate-500">Cloud Operations</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-blue-500/30 text-center text-xs">
                  <div className="text-[10px] text-emerald-400 font-bold">ELASTIC STACK</div>
                  <div className="font-semibold text-white">Kibana Analytics</div>
                  <div className="text-[9px] text-slate-500">VERMEG Production</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-blue-500/30 text-center text-xs">
                  <div className="text-[10px] text-indigo-400 font-bold">SECURITY</div>
                  <div className="font-semibold text-white">JWT & WAF Defense</div>
                  <div className="text-[9px] text-slate-500">Perimeter Protection</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-blue-500/30 text-center text-xs col-span-2 sm:col-span-2">
                  <div className="text-[10px] text-amber-400 font-bold">METHODOLOGY</div>
                  <div className="font-semibold text-white">Agile / Scrum & Git Flow</div>
                  <div className="text-[9px] text-slate-500">Clean Code & CI/CD Discipline</div>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="space-y-2 font-mono">
              <span className="text-xs tracking-wider text-blue-400 font-semibold uppercase">
                Programming Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {["JavaScript (ES6+)", "TypeScript", "Java (Spring Boot)", "Python", "PHP", "SQL (MySQL/PostgreSQL)", "C / C++"].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-white">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div className="space-y-2 font-mono">
              <span className="text-xs tracking-wider text-blue-400 font-semibold uppercase">
                Developer & Cloud Infrastructure Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {["Linux (Ubuntu/Debian)", "Docker", "Kibana", "Git / GitHub", "Postman", "VMware vSphere", "VS Code"].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded bg-slate-950 border border-blue-500/20 text-xs text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
