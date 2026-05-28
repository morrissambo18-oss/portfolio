"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-space"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-heading text-4xl font-bold text-text-primary mb-1">
              Morris
              <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
                .
              </span>
            </p>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">
              Portfolio
            </p>
            <div className="w-48 h-px bg-border-subtle overflow-hidden rounded-full mx-auto">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #3B82F6, #22D3EE)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
