"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

const PROJECTS = [
  {
    id: "podask",
    title: "Podask",
    desc: "Winner of Best Use of Gemini at the Cursor AI-Hackathon Hamburg. Automated daily podcast generation from scientific papers using the Gemini API.",
    tags: ["Gemini API", "Next.js", "Python", "AI"],
    grad: "linear-gradient(135deg, #0e7490 0%, #0a0a0f 60%)",
    link: "https://podask.vercel.app",
    github: "#",
    featured: true,
  },
  {
    id: "domo",
    title: "Domo Accommodation",
    desc: "Multi-agent AI architecture for room rental support automation. Custom AI evaluation framework optimizing token usage, handling 298 messages/day peak.",
    tags: ["Multi-agent AI", "WhatsApp API", "Next.js", "Claude"],
    grad: "linear-gradient(135deg, #0e4e5e 0%, #0a0a0f 60%)",
    link: "https://domo-accommodation-website-imardini98s-projects.vercel.app",
    github: "#",
    featured: false,
  },
  {
    id: "particle",
    title: "AI Particle Detection",
    desc: "Industrial defect detection system achieving 90% accuracy improvement with YOLO transfer learning. Real-time analysis of ventilation duct videos.",
    tags: ["PyTorch", "YOLO", "FastAPI", "AWS"],
    grad: "linear-gradient(135deg, #065f46 0%, #0a0a0f 60%)",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: "invoice",
    title: "Invoice Management System",
    desc: "Automated invoice processing pipeline reducing manual effort by 85%. Built with Next.js and ML-powered extraction for enterprise clients.",
    tags: ["Next.js", "FastAPI", "Docker", "OpenAI API"],
    grad: "linear-gradient(135deg, #1e1b4b 0%, #0a0a0f 60%)",
    link: "#",
    github: "#",
    featured: false,
  },
];

const ALL_TAGS = ["all", ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

function IconGitHub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconExternal({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = PROJECTS.filter(p => filter === "all" || p.tags.includes(filter));

  return (
    <section id="projects" style={{
      padding: "var(--pad-section) var(--pad-inline)",
      background: "var(--color-bg-surface)",
    }}>
      <div style={{ maxWidth: "var(--max-content)", margin: "0 auto" }}>
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
          }}>// 02 — projects</motion.p>
          <motion.h2 variants={fadeUp} style={{ marginBottom: 12 }}>Selected work</motion.h2>
          <motion.p variants={fadeUp} style={{ maxWidth: "56ch", marginBottom: 32 }}>
            Things I&apos;ve built and shipped. Hover a card for details — filter by stack.
          </motion.p>

          {/* Filter tags */}
          <motion.div variants={fadeUp} style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  padding: "5px 11px",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all var(--dur-fast) var(--ease-standard)",
                  color: filter === tag ? "var(--color-accent)" : "var(--color-text-secondary)",
                  background: filter === tag ? "rgba(34,211,238,0.08)" : "var(--color-bg-elevated)",
                  borderColor: filter === tag ? "rgba(34,211,238,0.45)" : "var(--color-bg-subtle)",
                }}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Project cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 18,
        }}>
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              style={{
                position: "relative",
                minHeight: p.featured ? 300 : 240,
                gridColumn: p.featured ? "1 / -1" : undefined,
                background: "var(--color-bg-base)",
                border: "1px solid var(--color-bg-subtle)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.35s var(--ease-standard)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-accent)";
                el.style.boxShadow = "0 0 0 1px rgba(34,211,238,0.15), 0 0 30px rgba(34,211,238,0.18)";
                el.style.transform = "translateY(-2px)";
                const bg = el.querySelector(".pcard-bg") as HTMLElement;
                const scrim = el.querySelector(".pcard-scrim") as HTMLElement;
                const body = el.querySelector(".pcard-body") as HTMLElement;
                if (bg) bg.style.opacity = "1";
                if (scrim) scrim.style.opacity = "1";
                if (body) { body.style.opacity = "1"; body.style.transform = "translateY(0)"; }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-bg-subtle)";
                el.style.boxShadow = "";
                el.style.transform = "";
                const bg = el.querySelector(".pcard-bg") as HTMLElement;
                const scrim = el.querySelector(".pcard-scrim") as HTMLElement;
                const body = el.querySelector(".pcard-body") as HTMLElement;
                if (bg) bg.style.opacity = "0";
                if (scrim) scrim.style.opacity = "0";
                if (body) { body.style.opacity = "0"; body.style.transform = "translateY(16px)"; }
              }}
            >
              {/* Gradient fill */}
              <div className="pcard-bg" style={{
                position: "absolute", inset: 0,
                background: p.grad, opacity: 0,
                transition: "opacity 0.35s var(--ease-standard)",
              }} />
              {/* Scrim overlay */}
              <div className="pcard-scrim" style={{
                position: "absolute", inset: 0,
                background: "rgba(0,0,0,0.6)", opacity: 0,
                transition: "opacity 0.35s var(--ease-standard)",
              }} />

              {p.featured && (
                <span style={{
                  position: "absolute", top: 24, right: 24,
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  letterSpacing: "0.08em", color: "var(--color-accent)",
                  zIndex: 3,
                }}>★ featured</span>
              )}

              {/* Title + tags (always visible) */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: p.featured ? 30 : 20,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  paddingRight: p.featured ? 80 : 0,
                }}>{p.title}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      color: "var(--color-accent)",
                      background: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.28)",
                      borderRadius: "var(--radius-xs)",
                      padding: "3px 8px",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Hover reveal body */}
              <div className="pcard-body" style={{
                position: "relative", zIndex: 2,
                marginTop: "auto", paddingTop: 18,
                opacity: 0, transform: "translateY(16px)",
                transition: "all 0.35s var(--ease-standard)",
              }}>
                <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 18, marginTop: 14, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-accent)" }}>
                  {p.link !== "#" && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                      onClick={e => e.stopPropagation()}>
                      <IconExternal size={14} /> Live
                    </a>
                  )}
                  {p.github !== "#" && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                      onClick={e => e.stopPropagation()}>
                      <IconGitHub size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
