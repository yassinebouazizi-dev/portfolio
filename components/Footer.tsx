"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Tunis",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>TUNIS, TN: <span className="text-white">{time || "15:30:00"}</span> (GMT+1)</span>
      </div>

      <div className="text-center">
        <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with Next.js & Framer Motion.</span>
      </div>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        data-cursor="Top"
      >
        <span>Back to summit</span>
        <ArrowUp className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
