import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br from-slate-900 to-slate-800"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      } h-screen flex flex-col items-center justify-center transition-colors duration-500`}
    >
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
        {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        aria-pressed={isDark}
        className="relative w-20 h-10 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300
          bg-gray-300 dark:bg-gray-700 shadow-inner"
      >
        {/* sliding knob */}
        <span
          className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ${
            isDark ? "translate-x-10" : "translate-x-0"
          }`}
        />
        {/* icons inside switch */}
        <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
          ☀️
        </span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-indigo-400">
          🌙
        </span>
      </button>
    </div>
  );
}