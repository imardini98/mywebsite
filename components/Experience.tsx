"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

const TIMELINE = [
  {
    active: true,
    date: "Jun 2025 — Present",
    role: "Software Engineer",
    co: "Verivox GmbH · Berlin, DE",
    bullets: [
      "Leading API and system design for the Insurance Business Unit using Nest.js and GCP",
      "Designed secure Terraform module for secrets management",
      "Integrated ChatGPT-powered application for insurance policy searches",
      "Managing DevOps pipelines with Jenkins, Kibana, Kubernetes, and Docker",
    ],
    skills: ["Nest.js", "Terraform", "Kubernetes", "Docker", "GCP", "Jenkins"],
  },
  {
    active: false,
    date: "Mar 2023 — Mar 2025",
    role: "Software Developer",
    co: "Mertus Consulting GmbH · Hamburg, DE",
    bullets: [
      "Built AI particle detection system achieving 90% accuracy improvement with YOLO",
      "Automated Salesforce-to-WordPress CV migrations via OpenAI API",
      "Developed freelancer approval platform reducing workload by 85%",
      "Optimized CV-builder app achieving 25% faster profile creation",
    ],
    skills: ["PyTorch", "YOLO", "Next.js", "FastAPI", "Salesforce", "OpenAI API", "AWS"],
  },
  {
    active: false,
    date: "Feb 2022 — Mar 2023",
    role: "Full Stack Developer",
    co: "Lean Tech · Medellín, CO",
    bullets: [
      "Maintained CapacityNow — real-time freight rate web app for USA logistics",
      "Built REST APIs, documentation with Postman, and unit tests with Jest",
      "Developed cross-platform B2B watch marketplace with React Native",
    ],
    skills: ["Node.js", "Express.js", "React", "React Native", "MongoDB", "Jest"],
  },
  {
    active: false,
    date: "Jul 2021 — Sep 2022",
    role: "Web UI Developer",
    co: "Globant · Medellín, CO",
    bullets: [
      "Reduced loading times by 60% via microfrontend architecture on ACHS (700k+ users)",
      "Built REST APIs and queue processes in NestJS microservices",
      "Optimized SQL queries and managed CI/CD with Azure DevOps",
    ],
    skills: ["React", "Redux Toolkit", "Nest.js", "Azure", "Redis", "Jest", "SonarQube"],
  },
  {
    active: false,
    date: "Sep 2020 — Apr 2021",
    role: "Development Engineer",
    co: "SRR Seguridad / Universidad del Norte · Barranquilla, CO",
    bullets: [
      "Built open-source reliability analysis app with Sentiment Analysis, NER, and Face Recognition",
      "Integrated IBM NLU, RabbitMQ, and Firebase Storage",
    ],
    skills: ["React", "Django", "AWS", "IBM NLU", "RabbitMQ", "Firebase", "Python"],
  },
];

const EDUCATION = [
  {
    degree: "M.Sc. Electronic Engineering",
    focus: "Artificial Intelligence & Machine Learning",
    school: "Universidad del Norte",
    period: "2019 — 2021",
    detail: "GPA 4.56 / 5.0 · Barranquilla, CO",
  },
  {
    degree: "B.Sc. Electronic Engineering",
    focus: "Silver medal for academic excellence",
    school: "Universidad del Norte",
    period: "2015 — 2019",
    detail: "GPA 4.31 / 5.0 · Barranquilla, CO",
  },
];

const CERTS = [
  { name: "Curso de Claude Code", issuer: "Platzi", date: "Feb 2026" },
  { name: "TELC B2 Zertifikat (German)", issuer: "telc gGmbH", date: "Apr 2024" },
  { name: "Machine Learning with Big Data", issuer: "Coursera", date: "2021" },
  { name: "GCP Big Data & ML Fundamentals", issuer: "Google / Coursera", date: "2021" },
];

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: "var(--pad-section) var(--pad-inline)",
      background: "var(--color-bg-surface)",
    }}>
      <div style={{ maxWidth: "var(--max-content)", margin: "0 auto" }}>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE} style={{
          fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", fontWeight: 500,
          letterSpacing: "0.04em", color: "var(--color-accent)", margin: "0 0 18px",
        }}>
          // 05 — experience
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 48 }}>
          Where I&apos;ve been
        </motion.h2>

        {/* Timeline */}
        <div className="timeline-wrap" style={{ position: "relative", paddingLeft: 34 }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 5, top: 8, bottom: 8,
            width: 1, background: "var(--color-bg-subtle)",
          }} />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              style={{ position: "relative", marginBottom: i < TIMELINE.length - 1 ? 40 : 0 }}
            >
              {/* Node */}
              <span className="timeline-node" style={{
                position: "absolute",
                left: -34,
                top: 5,
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: item.active ? "var(--color-accent)" : "var(--color-bg-base)",
                border: item.active ? "none" : "1.5px solid var(--color-text-muted)",
                boxShadow: item.active ? "0 0 12px rgba(34,211,238,0.6)" : "none",
                display: "inline-block",
              }} />

              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 12,
                color: "var(--color-text-muted)",
              }}>{item.date}</div>

              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600,
                color: "var(--color-text-primary)", margin: "4px 0 8px",
              }}>
                {item.role} · <span style={{ color: "var(--color-accent)" }}>{item.co}</span>
              </div>

              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {item.bullets.map((b, bi) => (
                  <li key={bi} style={{
                    fontSize: 15, color: "var(--color-text-secondary)",
                    marginBottom: 6, lineHeight: 1.6,
                  }}>{b}</li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                {item.skills.map(s => (
                  <span key={s} style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "var(--color-accent)",
                    background: "rgba(34,211,238,0.06)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: "var(--radius-xs)",
                    padding: "3px 8px",
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE}
          style={{ marginTop: 80 }}>
          <motion.p variants={fadeUp} style={{
            fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", fontWeight: 500,
            letterSpacing: "0.04em", color: "var(--color-accent)", margin: "0 0 18px",
          }}>// education</motion.p>
          <motion.h2 variants={fadeUp} style={{ marginBottom: 32 }}>Academic background</motion.h2>
          <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {EDUCATION.map(e => (
              <motion.div key={e.degree} variants={fadeUp} style={{
                padding: "24px",
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-bg-subtle)",
                borderRadius: "var(--radius-md)",
                transition: "border-color var(--dur-base) var(--ease-standard)",
              }}
                onMouseEnter={el => (el.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,211,238,0.3)"}
                onMouseLeave={el => (el.currentTarget as HTMLDivElement).style.borderColor = "var(--color-bg-subtle)"}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-text-muted)", margin: "0 0 8px" }}>{e.period}</p>
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 6px" }}>{e.degree}</h4>
                <p style={{ fontSize: 14, color: "var(--color-accent)", margin: "0 0 6px" }}>{e.focus}</p>
                <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: 0 }}>{e.school} · {e.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE}
          style={{ marginTop: 56 }}>
          <motion.p variants={fadeUp} style={{
            fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", fontWeight: 500,
            letterSpacing: "0.04em", color: "var(--color-accent)", margin: "0 0 18px",
          }}>// certifications</motion.p>
          <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
            {CERTS.map(c => (
              <motion.div key={c.name} variants={fadeUp} style={{
                padding: 16,
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-bg-subtle)",
                borderRadius: "var(--radius-md)",
                transition: "border-color var(--dur-base) var(--ease-standard)",
              }}
                onMouseEnter={el => (el.currentTarget as HTMLDivElement).style.borderColor = "rgba(34,211,238,0.3)"}
                onMouseLeave={el => (el.currentTarget as HTMLDivElement).style.borderColor = "var(--color-bg-subtle)"}
              >
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 4px" }}>{c.name}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-muted)", margin: "0 0 4px" }}>{c.issuer}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-accent)", margin: 0 }}>{c.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
