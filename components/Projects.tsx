const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack SaaS platform with real-time collaboration, built with Next.js, Supabase, and Stripe payments.",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Dev Dashboard",
    description:
      "An analytics dashboard for developers tracking API usage, error rates, and latency across services.",
    tags: ["React", "Node.js", "PostgreSQL", "Recharts"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "AI Writing Tool",
    description:
      "A browser extension that uses the Claude API to help users write and improve text in any text field.",
    tags: ["Chrome Extension", "Claude API", "TypeScript"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "E-commerce Store",
    description:
      "A performant storefront with cart, checkout, and CMS-driven product pages.",
    tags: ["Next.js", "Tailwind", "Shopify"],
    link: "#",
    github: "#",
    featured: false,
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">
          Work
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">
          Selected projects
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          A handful of things I&apos;ve built — from solo side projects to
          production apps.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl border p-6 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/5 ${
                p.featured
                  ? "border-white/10 bg-white/3"
                  : "border-white/5 bg-white/2"
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 text-xs text-indigo-400 font-mono border border-indigo-500/30 px-2 py-0.5 rounded-full">
                  featured
                </span>
              )}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={p.link}
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Live demo <ArrowIcon />
                </a>
                <a
                  href={p.github}
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
