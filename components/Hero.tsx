"use client";

import { motion } from "framer-motion";
import { heroWord, staggerContainer, EASE, DUR } from "@/lib/motion";

const words = ["Building", "reliable", "software,", "one", "commit", "at", "a", "time."];
const accentWords = new Set(["reliable"]);

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        padding: "120px var(--pad-inline) 80px",
        maxWidth: "var(--max-content)",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Terminal prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DUR.base, ease: EASE }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--color-text-muted)",
            margin: "0 0 24px",
          }}
        >
          $ whoami<BlinkCursor />
        </motion.p>

        {/* Animated headline */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-hero)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
            maxWidth: "16ch",
            margin: 0,
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={heroWord}
              style={{
                display: "inline-block",
                marginRight: "0.25em",
                color: accentWords.has(word) ? "var(--color-accent)" : undefined,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.base, delay: 0.6, ease: EASE }}
          style={{
            fontSize: "var(--text-body-lg)",
            maxWidth: "52ch",
            margin: "28px 0 0",
            lineHeight: 1.7,
            color: "var(--color-text-secondary)",
          }}
        >
          Software Architect &amp; Full-Stack Developer. 7 years building
          high-performance platforms — cloud infrastructure, DevOps, and AI
          integration. Based in Hamburg, DE.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.base, delay: 0.75, ease: EASE }}
          style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              background: "var(--color-accent)",
              color: "#04141a",
              border: "1px solid transparent",
              borderRadius: "var(--radius-sm)",
              padding: "11px 24px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              transition: "all var(--dur-fast) var(--ease-standard)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.08)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(34,211,238,0.45)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
            }}
          >
            Get in touch
          </a>
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              background: "transparent",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent)",
              borderRadius: "var(--radius-sm)",
              padding: "11px 24px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              transition: "all var(--dur-fast) var(--ease-standard)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-glow)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            View work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function BlinkCursor() {
  return (
    <span style={{
      color: "var(--color-accent)",
      animation: "blink 1.1s steps(1) infinite",
    }}>
      ▋
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
