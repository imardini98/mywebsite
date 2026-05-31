const skills = [
  "TypeScript", "React", "Next.js", "Nest.js", "Node.js", "FastAPI", "Django",
  "Python", "PyTorch", "TensorFlow", "AWS", "GCP", "Azure", "Terraform",
  "Kubernetes", "Docker", "PostgreSQL", "MongoDB", "Redis", "Figma",
];

export default function About() {
  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">
            About me
          </p>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Crafting scalable systems that matter
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a fullstack developer passionate about building impactful
              digital solutions that merge cutting-edge technology with intuitive
              design. With over 7 years of experience, I&apos;ve built scalable,
              efficient, and user-focused applications across diverse industries.
            </p>
            <p>
              I specialize in AI integration, cloud infrastructure, and DevOps —
              applying machine learning and computer vision to solve complex
              problems. Currently at Verivox GmbH in Berlin, leading API and
              system design for the Insurance Business Unit.
            </p>
          </div>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 transition-all text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <div>
          <p className="text-gray-500 text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/8 text-gray-300 text-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { value: "7+", label: "Years exp." },
              { value: "10+", label: "Projects" },
              { value: "3", label: "Continents" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-2xl bg-white/3 border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
