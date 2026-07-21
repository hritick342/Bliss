import { RECIPIENT, getDailyQuote } from "@/lib/birthday";
import { FloatingHearts } from "./FloatingHearts";

export function Welcome({ onStart }: { onStart: () => void }) {
  const quote = getDailyQuote();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-sunrise overflow-hidden">
      <FloatingHearts count={14} />
      {/* Balloons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {["🎈", "🎈", "🎈", "🎈", "🎈"].map((b, i) => (
          <span
            key={i}
            className="absolute animate-float-soft text-5xl md:text-6xl"
            style={{
              left: `${8 + i * 20}%`,
              top: `${10 + (i % 2) * 8}%`,
              animationDelay: `${i * 0.4}s`,
              filter: "drop-shadow(0 8px 12px rgba(184,51,106,0.25))",
            }}
          >
            {b}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center animate-fade-slide-up max-w-xl">
        <p className="uppercase tracking-[0.4em] text-xs text-plum/70 mb-4">Happy Birthday</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-plum leading-none">
          {RECIPIENT.name}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-plum/80 italic font-display">"{quote}"</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onStart}
            className="px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform animate-pulse-glow"
          >
            Open your surprise →
          </button>
        </div>
      </div>
    </div>
  );
}
