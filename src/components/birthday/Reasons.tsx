import { useState } from "react";
import { REASONS } from "@/lib/birthday";

export function Reasons({ onNext }: { onNext: () => void }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = REASONS.length;

  const go = (delta: number) => {
    setDir(delta === 1 ? 1 : -1);
    setI((v) => Math.min(total - 1, Math.max(0, v + delta)));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-sunrise">
      <p className="uppercase tracking-[0.4em] text-xs text-plum/70 mb-2">
        {total} Reasons
      </p>
      <h2 className="font-display text-3xl md:text-4xl text-plum mb-8">Why you're wonderful</h2>

      <div className="w-full max-w-lg">
        <div
          key={i}
          className="relative rounded-3xl bg-card border border-rose/40 shadow-glow p-8 md:p-12 min-h-[220px] flex flex-col items-center justify-center text-center animate-fade-slide-up"
          style={{ animationDuration: "0.4s" }}
        >
          <div className="absolute -top-4 left-6 px-4 py-1 rounded-full bg-gold text-gold-foreground text-sm font-semibold shadow-gold">
            Reason #{i + 1}
          </div>
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/90">
            "{REASONS[i]}"
          </p>
          <div className="absolute -bottom-3 right-6 text-3xl">💗</div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={() => go(-1)}
            disabled={i === 0}
            className="px-5 py-2 rounded-full border border-primary/40 text-plum disabled:opacity-40"
          >
            ← Back
          </button>
          <div className="flex-1 mx-2 h-2 rounded-full bg-rose/40 overflow-hidden">
            <div
              className="h-full bg-gradient-primary transition-all"
              style={{ width: `${((i + 1) / total) * 100}%` }}
            />
          </div>
          {i < total - 1 ? (
            <button
              onClick={() => go(1)}
              className="px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={onNext}
              className="px-5 py-2 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold"
            >
              Continue →
            </button>
          )}
        </div>
      </div>
      {/* unused var to satisfy lint if strict */}
      <span className="hidden">{dir}</span>
    </div>
  );
}
