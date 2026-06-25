import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../lib/api";

const GREETING = {
  role: "assistant",
  content:
    "Halo! Saya asisten virtual AIRDE. Tanyakan apa saja tentang Asset Intelligence, Reliability, Risk, Digital Engineering, Platform, Industri, atau halaman lain di website ini.",
};

function BotAvatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-primary text-base">smart_toy</span>
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(apiUrl("/api/chat"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch {
        // response wasn't JSON (e.g. backend unreachable)
      }

      if (!data) {
        throw new Error("Server chat tidak merespons dengan benar. Pastikan backend sedang berjalan.");
      }
      if (!res.ok) throw new Error(data.error || "Gagal mendapatkan balasan.");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err.message || "Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {open && (
        <div className="w-[340px] sm:w-[380px] h-[520px] bg-surface-container border border-primary/20 rounded-3xl shadow-2xl shadow-primary/10 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-surface-container-high via-surface-container-high to-surface-container border-b border-outline-variant/20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-tertiary border-2 border-surface-container-high pulse-dot"></span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm leading-tight">AIRDE Assistant</p>
                <p className="text-[11px] text-on-surface-variant">Online &middot; Siap membantu</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup chatbot"
              className="text-on-surface-variant hover:text-primary p-1.5 rounded-full hover:bg-surface-container-lowest transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-surface-container-low/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && <BotAvatar />}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                    m.role === "user"
                      ? "bg-primary-container text-on-primary-container rounded-2xl rounded-br-md"
                      : "bg-surface-container-lowest text-on-surface border border-outline-variant/20 rounded-2xl rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <BotAvatar />
                <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:-0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:-0.1s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-bounce"></span>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-error/10 border border-error/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-error text-base">error</span>
                </div>
                <div className="bg-error/10 text-error border border-error/30 px-3.5 py-2.5 rounded-2xl rounded-bl-md text-sm max-w-[78%]">
                  {error}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-outline-variant/20 bg-surface-container flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pertanyaan Anda..."
              rows={1}
              className="flex-1 resize-none bg-surface-container-low border border-outline-variant/30 rounded-2xl px-4 py-2.5 text-sm text-on-surface focus:border-primary outline-none transition-colors"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Kirim pesan"
              className="bg-primary-container text-on-primary-container w-10 h-10 rounded-full flex items-center justify-center hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all flex-shrink-0"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup chatbot" : "Buka chatbot AIRDE Assistant"}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-container to-tertiary-container text-on-primary-container shadow-2xl shadow-primary-container/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-primary-container/50 animate-ping"></span>}
        <span className="material-symbols-outlined text-3xl relative z-10">{open ? "close" : "smart_toy"}</span>
      </button>
    </div>
  );
}
