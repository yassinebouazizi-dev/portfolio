"use client";

import { useState, useEffect } from "react";
import { Terminal, Activity, RotateCw, CheckCircle2 } from "lucide-react";

const CODE_SNIPPETS = {
  engine: `/**
 * @file YassineEngine.ts
 * @author Yassine Bouazizi <bouazizi.yassine55@gmail.com>
 * @description Core Full-Stack & Cloud Architecture Definition
 */

import { FullStackDeveloper, CloudSupervisor } from '@yassine/core';
import { SecurityPerimeter, DatabaseCluster } from '@yassine/systems';

export class YassineEngine extends FullStackDeveloper {
  public readonly candidate = "Yassine Bouazizi";
  public readonly education = "Licence Informatique (DWM) - ISET Sidi Bouzid";
  public readonly targetInternship = "PFE Stage (Feb - Jun 2027)";

  public async bootstrap(): Promise<void> {
    // Step 1: Initializing Multi-Tier API Gateway & Security
    const firewall = new SecurityPerimeter({
      authScheme: "JWT (JSON Web Tokens)",
      wafActive: true,
      defenseLayer: "Strict Parameterized Queries"
    });

    // Step 2: Ingesting Real-Time Kibana Telemetry (VERMEG Protocol)
    const monitoring = new CloudSupervisor({
      platform: "Elastic / Kibana Stack",
      virtualCluster: ["Ubuntu 24.04 LTS", "Windows Server", "VMware"],
      anomalyAlerts: "ACTIVE"
    });

    await firewall.verifyIntegrity();
    console.log(">> STATUS 200: Architecture Ready for Deployment");
  }
}`,
  spring: `package com.yassine.academic.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 * Enterprise Academic & Student Resource Controller
 * Layered Clean Architecture (Controller -> Service -> Repository)
 */
@RestController
@RequestMapping("/api/v1/students")
@CrossOrigin(origins = "https://yassinebouazizi.dev")
public class StudentManagementController {

    private final StudentService studentService;

    public StudentManagementController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('INSTRUCTOR')")
    public ResponseEntity<StudentResponseDTO> getStudentProfile(@PathVariable Long id) {
        StudentResponseDTO response = studentService.findAndVerifyStudent(id);
        return ResponseEntity.ok(response);
    }
}`,
  cloud: `#!/bin/bash
# ====================================================================
# Cloud & Container Deployment Script - Yassine Bouazizi
# Environment: Linux Ubuntu 24.04 LTS // Kibana Supervision Node
# ====================================================================

echo "[INIT] Deploying Virtualized Microservice Cluster..."
docker compose -f ./docker-compose.prod.yml up -d --build

echo "[INFO] Verifying Elasticsearch & Kibana Telemetry Pipelines..."
curl -s -o /dev/null -w "%{http_code}" http://localhost:5601/api/status | grep "200"

if [ $? -eq 0 ]; then
  echo "[OK] Kibana Dashboard ONLINE at port 5601"
  echo "[OK] WAF Perimeter Rules Engaged"
  echo "[STATUS] PFE Stage System Fully Operational."
fi`
};

export default function LiveCodeSynthesizer() {
  const [activeKey, setActiveKey] = useState<"engine" | "spring" | "cloud">("engine");
  const [displayedCode, setDisplayedCode] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let index = 0;
    const fullText = CODE_SNIPPETS[activeKey];
    setDisplayedCode("");
    setProgress(0);

    const speed = 15;
    const chunkSize = 3;

    const interval = setInterval(() => {
      index += chunkSize;
      if (index <= fullText.length) {
        setDisplayedCode(fullText.slice(0, index));
        setProgress(Math.floor((index / fullText.length) * 100));
      } else {
        setDisplayedCode(fullText);
        setProgress(100);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [activeKey]);

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-blue-900/40 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span>02 // LIVE CODE COMPILATION ENGINE</span>
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl text-white tracking-wide">
            SYNTHESIZING ARCHITECTURE LIVE
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time code generation streaming live with compilation telemetry.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveKey("engine")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeKey === "engine"
                ? "bg-blue-600 text-white font-bold"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            YassineEngine.ts
          </button>
          <button
            onClick={() => setActiveKey("spring")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeKey === "spring"
                ? "bg-blue-600 text-white font-bold"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            ApiController.java
          </button>
          <button
            onClick={() => setActiveKey("cloud")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeKey === "cloud"
                ? "bg-blue-600 text-white font-bold"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            deploy-cloud.sh
          </button>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-blue-500/40 bg-[#060a12] shadow-2xl shadow-blue-950/60 font-mono">
        <div className="px-4 py-2.5 bg-slate-950/90 border-b border-blue-900/40 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="text-slate-400 ml-2">
              {activeKey === "engine"
                ? "src/core/YassineEngine.ts"
                : activeKey === "spring"
                ? "src/main/java/StudentManagementController.java"
                : "scripts/deploy-cloud.sh"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              LIVE SYNTAX STREAM
            </span>
            <button
              onClick={() => {
                const k = activeKey;
                setActiveKey("engine");
                setTimeout(() => setActiveKey(k), 10);
              }}
              className="px-2 py-0.5 rounded bg-blue-950 hover:bg-blue-900 text-blue-300 text-[11px] border border-blue-700/50 flex items-center gap-1"
            >
              <RotateCw className="w-3 h-3" />
              Replay
            </button>
          </div>
        </div>

        <div className="p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[280px] text-slate-200">
          <pre className="whitespace-pre">{displayedCode}</pre>
        </div>

        <div className="px-4 py-3 bg-slate-950/95 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-blue-400">BUILD STATUS:</span>
            <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-blue-300 font-bold">{progress}%</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>TESTS: <span className="text-emerald-400 font-semibold">12 PASSING</span></span>
            <span>BUNDLE: <span className="text-cyan-300 font-semibold">14.2 KB (GZIPPED)</span></span>
            <span>JWT VERIFIED: <span className="text-white font-semibold">100%</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
