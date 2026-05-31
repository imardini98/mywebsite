export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-bg-subtle)",
      padding: "28px var(--pad-inline)",
    }}>
      <div style={{
        maxWidth: "var(--max-content)",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--color-text-muted)",
      }}>
        <span>© {new Date().getFullYear()} — built with Next.js &amp; Tailwind</span>
        <span>dev@ivanmardini<span style={{ color: "var(--color-accent)" }}>:~$</span></span>
      </div>
    </footer>
  );
}
