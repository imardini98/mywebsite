const jobs = [
  {
    company: "Acme Corp",
    role: "Senior Full-Stack Developer",
    period: "2024 — Present",
    description:
      "Lead development of the core product, architected a microservices migration, and mentored junior developers. Reduced load times by 40% through caching and code-splitting.",
    skills: ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    company: "Startup XYZ",
    role: "Full-Stack Developer",
    period: "2022 — 2024",
    description:
      "Built features end-to-end for a B2B SaaS product used by 5,000+ companies. Owned the billing integration with Stripe and redesigned the onboarding flow.",
    skills: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2021 — 2022",
    description:
      "Worked with small businesses and agencies to deliver custom websites and e-commerce stores. Managed projects from discovery to deployment.",
    skills: ["WordPress", "Shopify", "JavaScript", "PHP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 max-w-6xl mx-auto px-6">
      <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">
        Career
      </p>
      <h2 className="text-4xl font-bold text-white mb-16">Experience</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <div key={i} className="md:pl-10 relative">
              {/* Dot */}
              <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 hidden md:block ring-4 ring-[#0a0a0f]" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <span className="hidden sm:block text-gray-600">@</span>
                <span className="text-indigo-400 font-medium">{job.company}</span>
                <span className="sm:ml-auto text-sm text-gray-500 font-mono">{job.period}</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
