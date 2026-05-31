"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

const stats = [
  { value: "7+", label: "years shipping" },
  { value: "10+", label: "projects delivered" },
  { value: "3", label: "continents worked" },
  { value: "2", label: "hackathon wins" },
];

const terminalLines = [
  { prompt: "$", cmd: "cat stack.txt", out: "typescript · python · postgres · docker" },
  { prompt: "$", cmd: "echo $LOCATION", out: "Hamburg, DE / remote-friendly" },
  { prompt: "$", cmd: "cat interests.txt", out: "AI · cloud · devops · open-source" },
  { prompt: "$", cmd: "uptime", out: "7 years · builds: green · coffee: ∞" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "var(--pad-section) var(--pad-inline)" }}>
      <div style={{ maxWidth: "var(--max-content)", margin: "0 auto" }}>
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 56,
          alignItems: "start",
        }}>
          {/* Left: bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <motion.p variants={fadeUp} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "var(--color-accent)",
              margin: "0 0 18px",
            }}>
              // 01 — about
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ marginBottom: 24, color: "var(--color-text-primary)" }}>
              Crafting scalable systems that matter
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: "var(--text-body-lg)", margin: "0 0 18px", lineHeight: 1.7 }}>
              I&apos;m a fullstack developer passionate about building impactful digital
              solutions that merge cutting-edge technology with intuitive design. With
              over 7 years of experience, I&apos;ve built scalable, efficient, and
              user-focused applications across diverse industries.
            </motion.p>
            <motion.p variants={fadeUp} style={{ margin: "0 0 32px", lineHeight: 1.7 }}>
              I specialize in AI integration, cloud infrastructure, and DevOps — applying
              machine learning and computer vision to solve complex problems. Currently
              at Verivox GmbH in Berlin, leading API and system design for the Insurance
              Business Unit.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={staggerContainer} style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}>
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} style={{
                  border: "1px solid var(--color-bg-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "18px 20px",
                  background: "var(--color-bg-surface)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 30,
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    letterSpacing: "-0.02em",
                  }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 4 }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: terminal block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <div style={{
              background: "var(--color-bg-surface)",
              border: "1px solid var(--color-bg-subtle)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}>
              {/* Terminal title bar */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "11px 14px",
                borderBottom: "1px solid var(--color-bg-subtle)",
              }}>
                {[["#f87171"], ["#fbbf24"], ["#34d399"]].map(([c], i) => (
                  <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
                ))}
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-text-muted)",
                  marginLeft: 8,
                }}>~/about — zsh</span>
              </div>

              {/* Terminal body */}
              <div style={{
                padding: 18,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                lineHeight: 1.9,
              }}>
                {terminalLines.map((line, i) => (
                  <div key={i}>
                    <div>
                      <span style={{ color: "var(--color-accent)" }}>{line.prompt} </span>
                      <span style={{ color: "var(--color-text-primary)" }}>{line.cmd}</span>
                    </div>
                    <div style={{ color: "var(--color-text-secondary)" }}>{line.out}</div>
                  </div>
                ))}
                <div>
                  <span style={{ color: "var(--color-accent)" }}>$ </span>
                  <span style={{ color: "var(--color-accent)", animation: "blink 1.1s steps(1) infinite" }}>▋</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
