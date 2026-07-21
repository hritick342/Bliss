import { useEffect, useState } from "react";
import { LETTER } from "@/lib/birthday";

export function Letter({ onNext }: { onNext: () => void }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= LETTER.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 18);
    return () => clearTimeout(t);
  }, [shown]);

  const done = shown >= LETTER.length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <div className="max-w-2xl w-full">
        <div className="rounded-3xl bg-card p-8 md:p-12 shadow-glow border border-rose/40 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl bg-background px-3 rounded-full">
            💌
          </div>
          <pre className="whitespace-pre-wrap font-display text-lg md:text-xl leading-relaxed text-foreground/90">
            {LETTER.slice(0, shown)}
            {!done && <span className="animate-sparkle text-primary">▍</span>}
          </pre>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {!done && (
            <button
              onClick={() => setShown(LETTER.length)}
              className="px-5 py-2 rounded-full text-sm border border-primary/40 text-plum hover:bg-primary/5"
            >
              Skip typing
            </button>
          )}
          <button
            onClick={onNext}
            disabled={!done}
            className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
