"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-subtle text-text-muted hover:text-text-primary hover:border-electric/30 transition-all duration-200"
      aria-label="Toggle colour theme"
    >
      <motion.span
        key={String(isDark)}
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-sm leading-none"
      >
        {isDark ? "☀️" : "🌙"}
      </motion.span>
    </button>
  );
}
