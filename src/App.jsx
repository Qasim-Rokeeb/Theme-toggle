import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} h-screen flex flex-col items-center justify-center transition-colors duration-500`}>
      <h1 className="text-3xl font-bold mb-6">
        {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className={`px-6 py-2 rounded shadow ${
          isDark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}
