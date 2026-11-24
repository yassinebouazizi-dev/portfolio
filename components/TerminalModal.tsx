"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_GROUPS } from "@/lib/data";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="text-neutral-300 space-y-1">
          <p className="text-emerald-400 font-bold">
            ⚡ Welcome to Yassine Bouazizi's Interactive Recruiter Shell (v1.0.0-pfe)
          </p>
          <p className="text-neutral-400 text-xs">
            Type <span className="text-yellow-400 font-mono">help</span> to view available commands or type <span className="text-yellow-400 font-mono">pfe</span> to inspect internship availability.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p className="text-blue-400 font-semibold mb-1">Available commands:</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">pfe</span> - PFE Internship specifics & dates</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">projects</span> - View significant projects & GitHub links</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">skills</span> - List full technical stack</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">experience</span> - View internships (Eddium, Vermeg)</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">contact</span> - Show email, phone & social handles</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">clear</span> - Clear terminal window</p>
            <p><span className="text-yellow-400 font-mono w-28 inline-block">exit</span> - Close terminal</p>
          </div>
        );
        break;

      case "pfe":
        response = (
          <div className="space-y-1 text-xs text-neutral-300 p-2 rounded bg-white/5 border border-white/10">
            <p className="text-emerald-400 font-bold">🎯 PFE Internship 2027 Objective:</p>
            <p>• <strong className="text-white">Degree:</strong> Licence en Informatique (DWM) - ISET Sidi Bouzid</p>
            <p>• <strong className="text-white">Duration:</strong> 4 to 6 months (February — June/July 2027)</p>
            <p>• <strong className="text-white">Target Roles:</strong> Full-Stack Web, Cloud/DevOps, Software Engineer</p>
            <p>• <strong className="text-white">Mobility:</strong> Throughout Tunisia & Remote international</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs">
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-blue-500 pl-2">
                <p className="text-white font-bold">{p.title} <span className="text-neutral-500 font-normal">({p.year})</span></p>
                <p className="text-neutral-400">{p.description}</p>
                <p className="text-blue-400 font-mono text-[11px] mt-0.5">Stack: {p.tags.join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-2 text-xs">
            {SKILL_GROUPS.map((g) => (
              <p key={g.name}>
                <span className="text-blue-400 font-bold">{g.name}:</span>{" "}
                <span className="text-neutral-300">{g.skills.join(" • ")}</span>
              </p>
            ))}
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-2 text-xs">
            {EXPERIENCES.map((e) => (
              <div key={e.company} className="border-l-2 border-emerald-500 pl-2">
                <p className="text-white font-bold">{e.role} @ {e.company} <span className="text-neutral-500 font-normal">({e.period})</span></p>
                <p className="text-neutral-400">{e.highlights[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs space-y-1 text-neutral-300">
            <p>• <strong className="text-white">Email:</strong> {PERSONAL_INFO.email}</p>
            <p>• <strong className="text-white">Phone:</strong> {PERSONAL_INFO.phone}</p>
            <p>• <strong className="text-white">GitHub:</strong> {PERSONAL_INFO.github}</p>
            <p>• <strong className="text-white">Location:</strong> {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case "resume":
      case "cv":
        if (typeof window !== "undefined") {
          window.open("/cv_yassine_bouazizi.pdf", "_blank");
        }
        response = (
          <p className="text-xs text-cyan-400">
            [TRANSMIT] Opening official CV of Yassine Bouazizi in a new tab...
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        onClose();
        return;

      default:
        response = (
          <p className="text-xs text-red-400">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-yellow-400 font-mono">help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputVal.trim()) {
      handleCommand(inputVal);
      setInputVal("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            className="w-full max-w-2xl rounded-2xl bg-[#0c0d12] border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Terminal Title Bar */}
            <div className="px-4 py-3 bg-[#13141c] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 ml-3 text-xs font-mono text-neutral-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>yassine@portfolio:~ (bash)</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Output scroll area */}
            <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs space-y-4 flex-1">
              {history.map((item, index) => (
                <div key={index} className="space-y-1">
                  {item.command !== "welcome" && (
                    <div className="flex items-center gap-2 text-neutral-500">
                      <span className="text-emerald-400">guest@yassine:~$</span>
                      <span className="text-white font-bold">{item.command}</span>
                    </div>
                  )}
                  <div>{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Line */}
            <div className="p-3 bg-[#101118] border-t border-white/10 flex items-center gap-2 font-mono text-xs">
              <span className="text-emerald-400 font-semibold">guest@yassine:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'pfe', 'projects'..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-neutral-600"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
