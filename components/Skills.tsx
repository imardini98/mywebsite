"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";
import {
  SiTypescript, SiPython, SiJavascript, SiPostgresql, SiGnubash,
  SiNextdotjs, SiReact, SiNestjs, SiFastapi, SiDjango, SiExpress, SiNodedotjs,
  SiPytorch, SiTensorflow, SiHuggingface, SiOpenai,
  SiGooglecloud, SiTerraform,
  SiKubernetes, SiDocker, SiJenkins,
  SiMongodb, SiRedis, SiFirebase, SiPrisma,
  SiGit, SiFigma, SiSalesforce,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType };

const SKILLS: { group: string; items: Skill[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: SiPostgresql },
      { name: "Bash", icon: SiGnubash },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Nest.js", icon: SiNestjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "React Native", icon: TbBrandReactNative },
    ],
  },
  {
    group: "AI & Machine Learning",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "HuggingFace", icon: SiHuggingface },
      { name: "OpenAI API", icon: SiOpenai },
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Azure", icon: FaMicrosoft },
      { name: "Terraform", icon: SiTerraform },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
    ],
  },
  {
    group: "Databases & Tools",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
      { name: "Prisma", icon: SiPrisma },
      { name: "Salesforce", icon: SiSalesforce },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

function SkillTag({ name, icon: Icon }: Skill) {
  return (
    <motion.span
      variants={fadeUp}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--color-accent)",
        background: "rgba(34,211,238,0.06)",
        border: "1px solid rgba(34,211,238,0.22)",
        borderRadius: "var(--radius-xs)",
        padding: "6px 12px",
        cursor: "default",
        transition: "all var(--dur-fast) var(--ease-standard)",
        whiteSpace: "nowrap",
      }}
      whileHover={{
        background: "rgba(34,211,238,0.14)",
        borderColor: "rgba(34,211,238,0.5)",
        scale: 1.04,
      }}
    >
      <Icon size={15} style={{ flexShrink: 0 }} />
      {name}
    </motion.span>
  );
}

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

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {SKILLS.map((group) => (
            <motion.div
              key={group.group}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <motion.h3 variants={fadeUp} style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                margin: "0 0 14px",
              }}>
                {group.group}
              </motion.h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {group.items.map((skill) => (
                  <SkillTag key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
