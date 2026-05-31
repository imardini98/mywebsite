"use client";

import { useState, useEffect } from "react";

const links = ["about", "projects", "skills", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    setActive(id);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-bg-subtle)" : "1px solid transparent",
        transition: "all var(--dur-base) var(--ease-standard)",
      }}
    >
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px var(--pad-inline)",
        maxWidth: "var(--max-content)",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Logo */}
        <button
          onClick={() => handleNav("top")}
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: 15,
            color: "var(--color-text-primary)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          dev@ivanmardini<span style={{ color: "var(--color-accent)" }}>:~$</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === l ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                position: "relative",
                padding: "4px 0",
                transition: "color var(--dur-fast) var(--ease-standard)",
              }}
            >
              {l}
              {active === l && (
                <span style={{
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  height: 2,
                  width: "100%",
                  background: "var(--color-accent)",
                  borderRadius: 1,
                }} />
              )}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 500,
              background: "var(--color-accent)",
              color: "#04141a",
              border: "none",
              borderRadius: "var(--radius-sm)",
              padding: "8px 18px",
              cursor: "pointer",
              transition: "all var(--dur-fast) var(--ease-standard)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.08)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(34,211,238,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
            }}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "var(--color-bg-surface)",
          borderTop: "1px solid var(--color-bg-subtle)",
          padding: "16px var(--pad-inline)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-text-secondary)",
                textAlign: "left",
                padding: "4px 0",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
