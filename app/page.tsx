"use client";

import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoAmIHud from "@/components/WhoAmIHud";
import LiveCodeSynthesizer from "@/components/LiveCodeSynthesizer";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import BashCapstone from "@/components/BashCapstone";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TerminalModal from "@/components/TerminalModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global hotkey to open floating terminal (Ctrl+K or ` / ~)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === "k") || (e.metaKey && e.key === "k") || e.key === "`") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#070b14] text-[#f8fafc] overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Interactive Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Floating Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Section 1: Who Am I?? Cyber HUD Card (Image 1 replica) */}
      <WhoAmIHud />

      {/* Section 2: Live Code Synthesizer (Code creating live in front of you) */}
      <LiveCodeSynthesizer />

      {/* Section 3: Technical Arsenal & Skills (Image 4 replica) */}
      <Skills />

      {/* Section 4: Projects Scrollytelling Showcase (Images 2 & 5 replica) */}
      <Projects />

      {/* Section 5: Experience & Internships (EDDIUM, VERMEG) */}
      <Experience />

      {/* Section 6: About & Education (ISET Sidi Bouzid DWM) */}
      <About />

      {/* Section 7: The Bash Terminal - Final Capstone (Image 7 replica) */}
      <BashCapstone />

      {/* Section 8: Contact & Transmission (Image 6 replica) */}
      <Contact />

      {/* Footer & Telemetry */}
      <Footer />

      {/* Interactive Floating Recruiter Shell Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}
