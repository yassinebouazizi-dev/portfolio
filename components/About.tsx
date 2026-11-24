"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, Award, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 block mb-2">
          04 // Background & Philosophy
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          ABOUT & EDUCATION
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Editorial Bio */}
        <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed font-light text-base sm:text-lg">
          <p>
            I am a 3rd-year Computer Science student specializing in <strong className="text-white font-medium">Web & Multimedia Development (DWM)</strong> at the Higher Institute of Technological Studies of Sidi Bouzid (<strong className="text-white font-medium">ISET Sidi Bouzid</strong>).
          </p>
          <p>
            My engineering philosophy centers around <span className="text-blue-300 font-normal">Clean Architecture</span>, resilient microservices, and end-to-end responsiveness. Whether designing secure RESTful APIs with JWT authentication in <span className="text-white font-normal">Spring Boot</span> and <span className="text-white font-normal">Node.js</span>, or configuring enterprise log analytics dashboards in <span className="text-white font-normal">Kibana</span>, I strive for absolute stability and peak developer ergonomics.
          </p>
          <p className="text-sm text-neutral-400">
            Currently seeking a demanding <strong className="text-white">PFE End-of-Studies Internship (4 to 6 months, starting Feb 2027)</strong> where I can build and optimize enterprise platforms alongside world-class engineering teams.
          </p>

          {/* Languages & Methods */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#111116] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-white font-medium text-sm">
                <Languages className="w-4 h-4 text-blue-400" />
                <span>Languages</span>
              </div>
              <ul className="text-xs font-mono text-neutral-400 space-y-1">
                <li>• French : Professional (B2)</li>
                <li>• English : Technical (B2)</li>
                <li>• Arabic : Native</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#111116] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-white font-medium text-sm">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Core Strengths</span>
              </div>
              <ul className="text-xs font-mono text-neutral-400 space-y-1">
                <li>• Agile / Scrum & Git Flow</li>
                <li>• Relational & Modular Modeling</li>
                <li>• Continuous Learning & Autonomy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Education Card & Stats */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121218] to-[#1a1a24] border border-white/15 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block">
                  Degree / Formation
                </span>
                <h4 className="text-lg font-bold text-white">
                  Licence en Technologies de l'Informatique
                </h4>
              </div>
            </div>

            <p className="text-sm font-medium text-neutral-300">
              Développement Web & Multimédia (DWM)
            </p>
            <p className="text-xs font-mono text-neutral-400 mt-1">
              Institut Supérieur des Études Technologiques de Sidi Bouzid
            </p>
            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
              2024 — 2027
            </span>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400 font-light">
              Key Focus: Advanced Algorithms, Software Engineering, OOP (Java), Relational Databases (MySQL), Full-Stack Systems.
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-[#111116] border border-white/10 text-center"
              >
                <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
