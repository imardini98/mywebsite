"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  projectTitle: string;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext, projectTitle }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(8px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 24px",
          background: "rgba(10,10,15,0.8)",
          borderBottom: "1px solid var(--color-bg-subtle)",
          zIndex: 1001,
        }}
      >
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-accent)" }}>
            {projectTitle}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-text-muted)", marginLeft: 12 }}>
            {index + 1} / {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--color-text-muted)", padding: 4,
            display: "flex", alignItems: "center",
            transition: "color var(--dur-fast) var(--ease-standard)",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-primary)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          aria-label="Close"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Image */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "min(1200px, 92vw)",
          maxHeight: "80vh",
          width: "100%",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          border: "1px solid var(--color-bg-subtle)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
        }}
      >
        <Image
          src={images[index]}
          alt={`${projectTitle} screenshot ${index + 1}`}
          width={1400}
          height={900}
          style={{ width: "100%", height: "auto", display: "block", maxHeight: "80vh", objectFit: "contain" }}
          priority
        />
      </div>

      {/* Prev/Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); onPrev(); }}
            style={{
              position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)",
              background: "rgba(10,10,15,0.8)", border: "1px solid var(--color-bg-subtle)",
              borderRadius: "var(--radius-md)", width: 44, height: 44,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--color-text-secondary)",
              transition: "all var(--dur-fast) var(--ease-standard)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(34,211,238,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-secondary)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-bg-subtle)";
            }}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <button
            onClick={e => { e.stopPropagation(); onNext(); }}
            style={{
              position: "fixed", right: 16, top: "50%", transform: "translateY(-50%)",
              background: "rgba(10,10,15,0.8)", border: "1px solid var(--color-bg-subtle)",
              borderRadius: "var(--radius-md)", width: 44, height: 44,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--color-text-secondary)",
              transition: "all var(--dur-fast) var(--ease-standard)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(34,211,238,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-secondary)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-bg-subtle)";
            }}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "fixed", bottom: 24,
          display: "flex", gap: 6,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { /* handled by parent */ }}
            style={{
              width: i === index ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === index ? "var(--color-accent)" : "var(--color-bg-subtle)",
              border: "none", cursor: "default", padding: 0,
              transition: "all var(--dur-base) var(--ease-standard)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
