"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 block mb-2">
          05 // Initiation & Inquiries
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          GET IN TOUCH
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct info & Copy Email */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-lg text-neutral-300 font-light leading-relaxed">
            Interested in discussing a <strong className="text-white font-medium">PFE opportunity</strong>, full-stack architecture, or exploring a new project? Reach out directly.
          </p>

          {/* Email Card with 1-click copy */}
          <div className="p-6 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all">
            <span className="text-xs font-mono text-neutral-400 block mb-2">Direct Email:</span>
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-mono text-white hover:text-blue-400 transition-colors truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={copyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Copy email to clipboard"
                data-cursor="Copy"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Phone / Mobile */}
          <div className="p-6 rounded-2xl bg-[#111116] border border-white/10">
            <span className="text-xs font-mono text-neutral-400 block mb-2">Phone / WhatsApp:</span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-base sm:text-lg font-mono text-white hover:text-blue-400 transition-colors"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-4 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
              data-cursor="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-4 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
              data-cursor="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-neutral-400 font-light">
                  Thank you for reaching out. I will respond to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Collaborator Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 text-white placeholder-neutral-600 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 text-white placeholder-neutral-600 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-2">
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We have an open PFE / Full-Stack internship role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 text-white placeholder-neutral-600 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01]"
                  data-cursor="Send"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
