"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-32 bg-[#0d0d14]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-gray-500 mb-12">
          Have a project in mind or just want to say hi? Reach me at{" "}
          <a href="mailto:imardinig@gmail.com" className="text-indigo-400 hover:underline">
            imardinig@gmail.com
          </a>{" "}
          or fill out the form below.
        </p>

        {status === "sent" ? (
          <div className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-white text-lg font-medium">Message sent!</p>
            <p className="text-gray-500 mt-2">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a href="https://github.com/imardini98" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/imardinig/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href="mailto:imardinig@gmail.com" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
}
