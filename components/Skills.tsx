"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

const SKILLS = [
  {
    group: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "Go", "SQL", "Bash"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["Next.js", "React", "Nest.js", "FastAPI", "Django", "Express.js", "React Native"],
  },
  {
    group: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "YOLO", "HuggingFace", "OpenAI API", "Gemini API", "Claude API", "BERT", "IBM NLU"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker", "Jenkins", "CI/CD", "Nginx"],
  },
  {
    group: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Prisma", "Firebase", "Salesforce"],
  },
  {
    group: "Languages (spoken)",
    items: ["Spanish (native)", "English (fluent)", "German (B2)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "var(--pad-section) var(--pad-inline)" }}>
      <div style={{ maxWidth: "var(--max-content)", margin: "0 auto" }}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-label)",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "var(--color-accent)",
            margin: "0 0 18px",
          }}
        >
          // 03 — skills
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          style={{ marginBottom: 48 }}
        >
          Toolbox
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.group}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <motion.h3 variants={fadeUp} style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                margin: "0 0 14px",
              }}>
                {group.group}
              </motion.h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--color-accent)",
                      background: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.28)",
                      borderRadius: "var(--radius-xs)",
                      padding: "5px 11px",
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
