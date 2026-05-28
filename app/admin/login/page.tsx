"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/messages");
      router.refresh();
    } else {
      setError("Incorrect password");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-space flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-heading text-2xl font-bold text-text-primary mb-1">
            Admin
            <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
              Panel
            </span>
          </p>
          <p className="text-text-muted text-sm">Portfolio dashboard</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border-subtle rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full bg-space border border-border-subtle rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold transition-all duration-200 disabled:opacity-50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
