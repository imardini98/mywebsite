"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/motion";

function FloatingField({
  label,
  type = "text",
  area = false,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  area?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const Tag = area ? "textarea" : "input";
  const elevated = focused || value.length > 0;

  return (
    <div style={{ position: "relative" }}>
      <label style={{
        position: "absolute",
        left: 13,
        top: elevated ? 7 : 16,
        fontFamily: "var(--font-mono)",
        fontSize: elevated ? 10 : 13,
        color: elevated ? "var(--color-accent)" : "var(--color-text-muted)",
        pointerEvents: "none",
        transition: "all 0.2s var(--ease-standard)",
        zIndex: 1,
      }}>
        {label}
      </label>
      <Tag
        type={!area ? type : undefined}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: "var(--color-bg-elevated)",
          border: `1px solid ${focused ? "var(--color-accent)" : "var(--color-bg-subtle)"}`,
          borderRadius: "var(--radius-sm)",
          padding: area ? "28px 13px 9px" : "20px 13px 9px",
          color: "var(--color-text-primary)",
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          outline: "none",
          boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.15)" : "none",
          transition: "all 0.2s var(--ease-standard)",
          resize: area ? "vertical" : undefined,
          minHeight: area ? 110 : undefined,
          display: "block",
        }}
        rows={area ? 4 : undefined}
      />
    </div>
  );
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const iconBtnStyle = {
    width: 40, height: 40,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: "transparent",
    border: "1px solid var(--color-accent)",
    borderRadius: "var(--radius-sm)",
    color: "var(--color-accent)",
    cursor: "pointer",
    transition: "all var(--dur-fast) var(--ease-standard)",
  };

  return (
    <section id="contact" style={{ padding: "var(--pad-section) var(--pad-inline)" }}>
      <div style={{ maxWidth: "var(--max-content)", margin: "0 auto" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE}>
            <motion.p variants={fadeUp} style={{
              fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", fontWeight: 500,
              letterSpacing: "0.04em", color: "var(--color-accent)", margin: "0 0 18px",
            }}>// 06 — contact</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontSize: "var(--text-h1)", marginBottom: 12 }}>
              Let&apos;s build something
            </motion.h2>
            <motion.p variants={fadeUp} style={{ marginTop: 12, marginBottom: 0 }}>
              Open to senior/staff roles and consulting engagements. Based in Hamburg — remote-friendly.
            </motion.p>
          </motion.div>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ padding: "48px 0", textAlign: "center" }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "rgba(52,211,153,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--color-success)" }}>
                ✓ message sent — I&apos;ll reply within a day.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              onSubmit={handleSubmit}
              className="contact-form-grid"
              style={{ display: "grid", gap: 18, marginTop: 36, textAlign: "left" }}
            >
              <FloatingField label="name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} />
              <FloatingField label="email" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} />
              <FloatingField label="message" area value={form.message} onChange={v => setForm(f => ({ ...f, message: v }))} />
              {status === "error" && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-danger)", margin: 0 }}>
                  ✗ Something went wrong — try emailing me directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
                  background: "var(--color-accent)", color: "#04141a",
                  border: "none", borderRadius: "var(--radius-sm)",
                  padding: "13px 24px", cursor: "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                  transition: "all var(--dur-fast) var(--ease-standard)",
                }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </motion.form>
          )}

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--color-text-secondary)", marginTop: 28 }}>
              or email me directly —{" "}
              <a href="mailto:imardinig@gmail.com" style={{ color: "var(--color-accent)" }}>
                imardinig@gmail.com
              </a>
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 22 }}>
              {[
                { href: "https://github.com/imardini98", icon: <IconGitHub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/imardinig/", icon: <IconLinkedIn />, label: "LinkedIn" },
                { href: "mailto:imardinig@gmail.com", icon: <IconMail />, label: "Email" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={iconBtnStyle}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-glow)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
