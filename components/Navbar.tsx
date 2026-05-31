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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
    <>
      <header style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        background: scrolled || open ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled || open ? "blur(12px)" : "none",
        borderBottom: scrolled || open ? "1px solid var(--color-bg-subtle)" : "1px solid transparent",
        transition: "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      }}>
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem, 5vw, 3rem)",
          maxWidth: "var(--max-content)",
          margin: "0 auto",
          height: 60,
        }}>
          {/* Logo */}
          <button
            onClick={() => handleNav("top")}
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "clamp(12px, 3.5vw, 15px)",
              color: "var(--color-text-primary)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              whiteSpace: "nowrap",
            }}
          >
            dev@ivanmardini<span style={{ color: "var(--color-accent)" }}>:~$</span>
          </button>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: "flex", gap: 26, alignItems: "center" }}>
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
                    position: "absolute", left: 0, bottom: -4,
                    height: 2, width: "100%",
                    background: "var(--color-accent)", borderRadius: 1,
                  }} />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNav("contact")}
              style={{
                fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
                background: "var(--color-accent)", color: "#04141a",
                border: "none", borderRadius: "var(--radius-sm)",
                padding: "8px 18px", cursor: "pointer",
                transition: "all var(--dur-fast) var(--ease-standard)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
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

          {/* Hamburger — mobile only */}
          <button
            className="burger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              color: "var(--color-text-primary)",
            }}
          >
            {open ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div style={{
            borderTop: "1px solid var(--color-bg-subtle)",
            padding: "12px clamp(1rem, 5vw, 3rem) 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {links.map((l) => (
              <button
                key={l}
                onClick={() => handleNav(l)}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: 16,
                  background: "none", border: "none", cursor: "pointer",
                  color: active === l ? "var(--color-accent)" : "var(--color-text-secondary)",
                  textAlign: "left", padding: "10px 0",
                  borderBottom: "1px solid var(--color-bg-subtle)",
                  transition: "color var(--dur-fast) var(--ease-standard)",
                }}
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => handleNav("contact")}
              style={{
                fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
                background: "var(--color-accent)", color: "#04141a",
                border: "none", borderRadius: "var(--radius-sm)",
                padding: "12px 0", cursor: "pointer", marginTop: 8,
                width: "100%", textAlign: "center",
              }}
            >
              Contact
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
