const jobs = [
  {
    company: "Verivox GmbH",
    role: "Software Engineer",
    period: "Jun 2025 — Present",
    location: "Berlin, DE · Hybrid",
    description:
      "Leading API and system design for the Insurance Business Unit. Designed a secure Terraform module for secrets management and integrated a ChatGPT-powered application for insurance policy searches. Managing DevOps pipelines with Jenkins, Kibana, Kubernetes, and Docker on GCP.",
    skills: ["Nest.js", "Terraform", "Kubernetes", "Docker", "GCP", "Jenkins"],
  },
  {
    company: "Mertus Consulting GmbH",
    role: "Software Developer",
    period: "Mar 2023 — Mar 2025",
    location: "Hamburg, DE",
    description:
      "Led 6 cross-functional projects: built an AI particle detection system (90% accuracy gain with YOLO), automated Salesforce-to-WordPress CV migrations via OpenAI API, developed an automated video production platform, a freelancer approval platform (85% workload reduction), a CV-builder refactor with 25% faster profile creation, and Salesforce CRM integrations.",
    skills: ["PyTorch", "YOLO", "Next.js", "FastAPI", "Salesforce", "OpenAI API", "AWS", "Docker"],
  },
  {
    company: "Lean Tech",
    role: "Full Stack Developer",
    period: "Feb 2022 — Mar 2023",
    location: "Medellín, CO",
    description:
      "Maintained the CapacityNow web app for real-time freight rate calculations (USA logistics). Built and documented REST APIs with Postman, wrote unit tests with Jest, and developed a cross-platform B2B watch marketplace app using React Native.",
    skills: ["Node.js", "Express.js", "React", "React Native", "MongoDB", "Jest", "Firebase"],
  },
  {
    company: "Globant",
    role: "Web UI Developer",
    period: "Jul 2021 — Sep 2022",
    location: "Medellín, CO",
    description:
      "Worked on ACHS — a platform serving 700,000+ users in Chile. Reduced loading times by 60% via microfrontend architecture. Built REST APIs and queue processes in NestJS microservices, optimized SQL queries, and managed CI/CD with Azure DevOps.",
    skills: ["React", "Redux Toolkit", "Nest.js", "Azure", "Redis", "Jest", "SonarQube"],
  },
  {
    company: "SRR Seguridad / Universidad del Norte",
    role: "Development Engineer",
    period: "Sep 2020 — Apr 2021",
    location: "Barranquilla, CO",
    description:
      "Designed and developed an open-source reliability analysis web app integrating AI technologies: Sentiment Analysis, Entity Recognition, Text Summarization, and Face Recognition. Built with Django, React, AWS, IBM NLU, RabbitMQ, and Firebase.",
    skills: ["React", "Django", "AWS", "IBM NLU", "RabbitMQ", "Firebase", "Python"],
  },
];

const education = [
  {
    degree: "M.Sc. Electronic Engineering",
    focus: "Artificial Intelligence & Machine Learning",
    school: "Universidad del Norte",
    period: "2019 — 2021",
    detail: "GPA 4.56 / 5.0 · Barranquilla, CO",
  },
  {
    degree: "B.Sc. Electronic Engineering",
    focus: "Distinguished student — Silver medal for academic excellence",
    school: "Universidad del Norte",
    period: "2015 — 2019",
    detail: "GPA 4.31 / 5.0 · Barranquilla, CO",
  },
];

const certifications = [
  { name: "Curso de Claude Code", issuer: "Platzi", date: "Feb 2026" },
  { name: "TELC B2 Zertifikat (German)", issuer: "telc gGmbH", date: "Apr 2024" },
  { name: "Machine Learning with Big Data", issuer: "Coursera", date: "2021" },
  { name: "GCP Big Data & ML Fundamentals", issuer: "Google / Coursera", date: "2021" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 max-w-6xl mx-auto px-6">
      <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">
        Career
      </p>
      <h2 className="text-4xl font-bold text-white mb-16">Experience</h2>

      <div className="relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <div key={i} className="md:pl-10 relative">
              <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 hidden md:block ring-4 ring-[#0a0a0f]" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <span className="hidden sm:block text-gray-600 mx-1">@</span>
                <span className="text-indigo-400 font-medium">{job.company}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                <span className="text-gray-700">·</span>
                <span className="text-sm text-gray-600">{job.location}</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-24">
        <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">Education</p>
        <h2 className="text-3xl font-bold text-white mb-10">Academic background</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.degree} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-indigo-500/30 transition-all">
              <p className="text-xs text-gray-500 font-mono mb-2">{e.period}</p>
              <h4 className="text-white font-semibold mb-1">{e.degree}</h4>
              <p className="text-indigo-400 text-sm mb-2">{e.focus}</p>
              <p className="text-gray-500 text-sm">{e.school} · {e.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">Certifications</p>
        <h2 className="text-3xl font-bold text-white mb-10">Licenses &amp; certs</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((c) => (
            <div key={c.name} className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-indigo-500/30 transition-all">
              <p className="text-white text-sm font-medium mb-1">{c.name}</p>
              <p className="text-gray-500 text-xs">{c.issuer}</p>
              <p className="text-indigo-400 text-xs mt-1 font-mono">{c.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
