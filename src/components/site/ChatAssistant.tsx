import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Leaf } from "lucide-react";

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, busy]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open STM assistant"
        className="fixed bottom-[5.5rem] right-6 z-50 w-14 h-14 rounded-full grid place-items-center text-[#18392B] shadow-[0_12px_40px_-10px_rgba(212,162,76,0.7)] hover:scale-105 transition-transform"
        style={{ background: "linear-gradient(135deg,#F5D78A 0%,#E2C06B 50%,#C9A84C 100%)" }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-[10rem] right-6 z-50 w-[92vw] max-w-[380px] h-[560px] max-h-[70vh] rounded-2xl overflow-hidden flex flex-col border border-[#D4A24C]/40 bg-[#0a1a0e] text-[#F5F5F2] shadow-2xl animate-fade-in">
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 border-b border-[#D4A24C]/30"
            style={{ background: "linear-gradient(135deg,#0d2010,#06140c)" }}
          >
            <div
              className="w-9 h-9 rounded-full grid place-items-center text-[#18392B]"
              style={{ background: "linear-gradient(135deg,#F5D78A,#C9A84C)" }}
            >
              <Leaf size={16} />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-[#F7F2E8]">STM Assistant</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#F5F5F2]/60">
                Treatments · Hours · Care
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-sm text-[#F5F5F2]/70 leading-relaxed">
                Namaste 🙏 I can answer questions about our Siddha, Ayurveda, Varma and Yoga
                treatments, working hours, and how to book. How can I help?
              </div>
            )}
            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 ${
                      isUser
                        ? "bg-[#D4A24C] text-[#18392B] rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-[#F5F5F2] rounded-bl-sm"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              );
            })}
            {status === "submitted" && (
              <div className="text-xs text-[#F5F5F2]/60 italic">Thinking…</div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-[#D4A24C]/30 bg-[#06140c] flex items-center gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about treatments or hours…"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-[#D4A24C]/60 placeholder:text-[#F5F5F2]/40"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="w-10 h-10 rounded-full grid place-items-center text-[#18392B] disabled:opacity-50"
              style={{ background: "linear-gradient(135deg,#F5D78A,#C9A84C)" }}
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
