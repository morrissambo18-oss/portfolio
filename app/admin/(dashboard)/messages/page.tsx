"use client";

import { useEffect, useState } from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);

  const load = async () => {
    const res = await fetch("/api/admin/messages");
    if (res.ok) setMessages(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const markRead = async (id: number, read: boolean) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read }),
    });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read } : m)));
  };

  const del = async (id: number) => {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (expanded === id) setExpanded(null);
  };

  const unread = messages.filter((m) => !m.read).length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold text-text-primary">Messages</h1>
        <p className="text-text-muted text-sm mt-1">
          {unread > 0 ? (
            <span className="text-electric">{unread} unread</span>
          ) : (
            "All caught up"
          )}{" "}
          · {messages.length} total
        </p>
      </div>

      {loading ? (
        <div className="text-text-muted text-sm">Loading…</div>
      ) : messages.length === 0 ? (
        <div className="bg-card border border-border-subtle rounded-2xl p-12 text-center">
          <p className="text-text-muted">No messages yet. Share your portfolio link!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${
                m.read ? "border-border-subtle" : "border-electric/40"
              }`}
            >
              <button
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface/40 transition-colors"
                onClick={() => {
                  setExpanded(expanded === m.id ? null : m.id);
                  if (!m.read) markRead(m.id, true);
                }}
              >
                {!m.read && (
                  <span className="w-2 h-2 rounded-full bg-electric flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <span className="font-medium text-text-primary text-sm">{m.name}</span>
                    <span className="text-text-muted text-xs">{m.email}</span>
                  </div>
                  <p className="text-text-muted text-sm truncate">{m.message}</p>
                </div>
                <span className="text-text-muted text-xs flex-shrink-0">
                  {new Date(m.createdAt).toLocaleDateString("en-ZA", {
                    day: "numeric", month: "short", year: "numeric",
                  })}
                </span>
              </button>

              {expanded === m.id && (
                <div className="px-5 pb-5 border-t border-border-subtle">
                  <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-5 whitespace-pre-wrap">
                    {m.message}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${m.email}?subject=Re: your message`}
                      className="px-4 py-2 rounded-xl text-white text-sm font-medium"
                      style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
                    >
                      Reply ↗
                    </a>
                    <button
                      onClick={() => markRead(m.id, !m.read)}
                      className="px-4 py-2 rounded-xl text-sm text-text-secondary border border-border-subtle hover:border-white/20 hover:text-text-primary transition-colors"
                    >
                      Mark {m.read ? "unread" : "read"}
                    </button>
                    <button
                      onClick={() => del(m.id)}
                      className="px-4 py-2 rounded-xl text-sm text-red-400 hover:bg-red-400/10 transition-colors ml-auto"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
