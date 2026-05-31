export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Ivan Mardini
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
          Software Architect &amp; Full-Stack Developer
        </p>

        <p className="max-w-xl mx-auto text-gray-500 text-lg mb-12 leading-relaxed">
          7 years building high-performance platforms — cloud infrastructure,
          DevOps, and AI integration. Based in Hamburg, DE.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium transition-all hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
          <span>scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
