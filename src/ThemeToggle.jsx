import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-5 right-5 z-40 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm border border-slate-200 dark:border-slate-700"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}