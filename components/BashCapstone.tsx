"use client";

import { useState } from "react";
import { Terminal, Trash2, ArrowUpRight } from "lucide-react";

interface CommandItem {
  prompt: string;
  output: React.ReactNode;
}

export default function BashCapstone() {
  const [history, setHistory] = useState<CommandItem[]>([
    {
      prompt: "contact",
      output: (
        <div className="space-y-1 text-slate-300">
          <p>• <span className="font-bold text-white">Email:</span> <a href="mailto:bouazizi.yassine55@gmail.com" className="text-blue-400 underline hover:text-blue-300">bouazizi.yassine55@gmail.com</a></p>
          <p>• <span className="font-bold text-white">Phone:</span> <a href="tel:+21690225448" className="text-blue-400 underline hover:text-blue-300">+216 90 225 448</a></p>
          <p>• <span className="font-bold text-white">GitHub:</span> <a href="https://github.com/yassinebouazizi-dev" target="_blank" rel="noreferrer" className="text-blue-400 underline hover:text-blue-300">https://github.com/yassinebouazizi-dev</a></p>
          <p>• <span className="font-bold text-white">Location:</span> Tunisia (Available for Remote & Relocation)</p>
        </div>
      )
    },
    {
      prompt: "help",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold mb-1">Available commands:</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">pfe</span> - PFE Internship specifics & dates</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">projects</span> - View significant projects & GitHub links</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">skills</span> - List full technical stack</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">experience</span> - View internships (Eddium, Vermeg)</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">contact</span> - Show email, phone & social handles</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">clear</span> - Clear terminal window</p>
          <p><span className="text-yellow-400 w-28 inline-block font-mono">exit</span> - Close terminal</p>
        </div>
      )
    }
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let out: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        out = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold mb-1">Available commands:</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">pfe</span> - PFE Internship specifics & dates</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">projects</span> - View significant projects & GitHub links</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">skills</span> - List full technical stack</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">experience</span> - View internships (Eddium, Vermeg)</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">contact</span> - Show email, phone & social handles</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">clear</span> - Clear terminal window</p>
            <p><span className="text-yellow-400 w-28 inline-block font-mono">exit</span> - Close terminal</p>
          </div>
        );
        break;

      case "contact":
        out = (
          <div className="space-y-1 text-slate-300">
            <p>• <span className="font-bold text-white">Email:</span> <a href="mailto:bouazizi.yassine55@gmail.com" className="text-blue-400 underline hover:text-blue-300">bouazizi.yassine55@gmail.com</a></p>
            <p>• <span className="font-bold text-white">Phone:</span> <a href="tel:+21690225448" className="text-blue-400 underline hover:text-blue-300">+216 90 225 448</a></p>
            <p>• <span className="font-bold text-white">GitHub:</span> <a href="https://github.com/yassinebouazizi-dev" target="_blank" rel="noreferrer" className="text-blue-400 underline hover:text-blue-300">https://github.com/yassinebouazizi-dev</a></p>
            <p>• <span className="font-bold text-white">Location:</span> Tunisia (Available for Remote & Relocation)</p>
          </div>
        );
        break;

      case "pfe":
        out = (
          <div className="space-y-1 text-slate-300 p-2.5 rounded bg-blue-950/40 border border-blue-500/30">
            <p className="text-emerald-400 font-bold">🎯 STAGE PFE (PROJET DE FIN D'ÉTUDES) 2027 DETAILS:</p>
            <p>• <strong className="text-white">Degree:</strong> Licence Informatique (DWM) - ISET Sidi Bouzid</p>
            <p>• <strong className="text-white">Period:</strong> February 2027 — June/July 2027 (4 to 6 months)</p>
            <p>• <strong className="text-white">Domain:</strong> Full-Stack Web Architecture, Cloud Systems, Secure REST Microservices</p>
            <p>• <strong className="text-white">Mobility:</strong> Throughout Tunisia & Remote International</p>
          </div>
        );
        break;

      case "projects":
        out = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold">Significant Declassified Projects:</p>
            <div className="border-l-2 border-blue-500 pl-2">
              <p className="text-white font-semibold">1. EduPath Platform (EDDIUM PLATINUM)</p>
              <p className="text-xs text-slate-400">React.js, Vite, Node.js, Express, MySQL, JWT Auth</p>
            </div>
            <div className="border-l-2 border-cyan-500 pl-2">
              <p className="text-white font-semibold">2. Kibana Supervision & Log Operations (VERMEG)</p>
              <p className="text-xs text-slate-400">Kibana, Elasticsearch, Linux, VMware, WAF Defense</p>
            </div>
            <div className="border-l-2 border-indigo-500 pl-2">
              <p className="text-white font-semibold">3. Layered Spring Boot REST API</p>
              <p className="text-xs text-slate-400">Java, Spring Boot, Maven, JPA/Hibernate, JUnit 5</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-2">
              <p className="text-white font-semibold">4. NutriGuard Health Scanner</p>
              <p className="text-xs text-slate-400">Android, FastAPI, Computer Vision, SQLite</p>
            </div>
          </div>
        );
        break;

      case "skills":
        out = (
          <div className="space-y-1 text-slate-300">
            <p className="text-indigo-400 font-bold">Technical Stack Arsenal:</p>
            <p>• <strong className="text-white">Frontend:</strong> React.js, Next.js 14, TypeScript, Tailwind CSS, Vite</p>
            <p>• <strong className="text-white">Backend:</strong> Node.js, Express.js, Java (Spring Boot), PHP, REST APIs</p>
            <p>• <strong className="text-white">Databases:</strong> MySQL, PostgreSQL, JPA/Hibernate, Merise/UML</p>
            <p>• <strong className="text-white">Cloud/DevOps:</strong> Linux (Ubuntu/Debian), Docker, Microsoft Azure, Git</p>
            <p>• <strong className="text-white">Security:</strong> Kibana (Log Analytics), WAF, API Gateway, JWT Auth</p>
          </div>
        );
        break;

      case "experience":
        out = (
          <div className="space-y-2 text-slate-300">
            <p className="text-pink-400 font-bold">Verified Production Internships:</p>
            <p>1. <strong className="text-white">EDDIUM PLATINUM</strong> (Aug 2026): Stagiaire Développeur Full-Stack Web (EduPath)</p>
            <p>2. <strong className="text-white">VERMEG</strong> (Jan 2025): Stagiaire Systèmes, Virtualisation & Supervision IT (Kibana & Linux)</p>
          </div>
        );
        break;

      case "whoami":
        out = (
          <div className="text-slate-300 space-y-1">
            <p className="text-blue-400 font-bold">Identity Record:</p>
            <p>Yassine Bouazizi — Full-Stack Developer & Cloud Systems Specialist</p>
            <p>Host: Linux yassine-workstation 6.8.0-generic x86_64</p>
          </div>
        );
        break;

      case "resume":
      case "cv":
        if (typeof window !== "undefined") {
          window.open("/cv_yassine_bouazizi.pdf", "_blank");
        }
        out = (
          <div className="text-slate-300 space-y-1">
            <p className="text-cyan-400 font-bold">[TRANSMIT] Opening official CV of Yassine Bouazizi in a new tab...</p>
            <p className="text-xs text-slate-400">File: <a href="/cv_yassine_bouazizi.pdf" target="_blank" className="text-blue-400 underline">cv_yassine_bouazizi.pdf</a></p>
          </div>
        );
        break;

      default:
        out = (
          <p className="text-red-400">
            bash: command not found: {trimmed}. Type <span className="text-yellow-400 font-bold">help</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { prompt: rawCmd, output: out }]);
    setInputVal("");
  };

  return (
    <section id="bash-capstone" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <Terminal className="w-4 h-4" />
          <span>05 // THE FINAL CAPSTONE • INTERACTIVE LINUX CONSOLE</span>
        </div>
        <h2 className="font-mono font-bold text-2xl sm:text-4xl text-white tracking-wide">
          BASH COMMAND INTERFACE
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
          The interactive shell replica matching Ubuntu 24.04 LTS. Type commands directly or use the quick triggers below.
        </p>

        {/* Quick Command Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-4 font-mono text-xs">
          <span className="text-slate-500 text-[11px]">Quick Triggers:</span>
          {["contact", "help", "pfe", "projects", "skills", "experience", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white transition-all text-xs"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Window matching Image 7 */}
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#161b22] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block cursor-pointer" onClick={() => setHistory([])} title="Clear"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block cursor-pointer" onClick={() => handleCommand("help")} title="Help"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block cursor-pointer" onClick={() => handleCommand("pfe")} title="PFE"></span>
            <span className="text-slate-400 text-xs ml-2 select-none">&gt;_ yassine@portfolio:~ (bash)</span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-xs">
            <span className="hidden sm:inline">bash 5.2.21</span>
            <button onClick={() => setHistory([])} className="hover:text-slate-300" title="Clear Buffer">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="p-6 space-y-4 max-h-[460px] overflow-y-auto leading-relaxed select-text">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-cyan-400">guest@yassine:~$</span>
                <span className="text-white">{item.prompt}</span>
              </div>
              <div className="mt-1 pl-4">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="px-6 py-4 bg-[#0a0d13] border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-semibold shrink-0">guest@yassine:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(inputVal);
              }
            }}
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-slate-600"
            placeholder="type 'help', 'pfe', 'projects'..."
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-3 py-1 rounded bg-blue-600/80 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-colors"
          >
            Enter ↵
          </button>
        </div>

      </div>
    </section>
  );
}
