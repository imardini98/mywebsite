export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span>
          Ivan<span className="text-indigo-400">.</span> — Built with Next.js &amp; Tailwind
        </span>
        <span>© {new Date().getFullYear()} Ivan Mardini. All rights reserved.</span>
      </div>
    </footer>
  );
}
