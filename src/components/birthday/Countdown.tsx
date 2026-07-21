import { useEffect, useState } from "react";
import { getCountdown, RECIPIENT } from "@/lib/birthday";

export function Countdown({ onNext }: { onNext: () => void }) {
  const [c, setC] = useState(() => getCountdown());
  useEffect(() => {
    const t = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(t);
  }, []);

  const cells: { label: string; value: number }[] = [
    { label: "Days", value: c.days },
    { label: "Hours", value: c.hours },
    { label: "Minutes", value: c.minutes },
    { label: "Seconds", value: c.seconds },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
      <p className="uppercase tracking-[0.4em] text-xs text-plum/70 mb-3">Next Birthday</p>
      <h2 className="font-display text-3xl md:text-5xl text-plum text-center">
        Until {RECIPIENT.name}'s next celebration
      </h2>
      <p className="mt-2 text-muted-foreground text-sm">August 14</p>

      <div className="mt-10 grid grid-cols-4 gap-3 md:gap-5 max-w-2xl w-full">
        {cells.map((cell) => (
          <div
            key={cell.label}
            className="rounded-2xl bg-gradient-primary text-primary-foreground p-4 md:p-6 text-center shadow-glow"
          >
            <div className="font-display text-4xl md:text-6xl font-bold tabular-nums">
              {String(cell.value).padStart(2, "0")}
            </div>
            <div className="mt-1 uppercase tracking-widest text-[10px] md:text-xs opacity-80">
              {cell.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 font-display italic text-lg text-foreground/80 text-center max-w-md">
        "Can't wait to celebrate with you again ❤️"
      </p>

      <button
        onClick={onNext}
        className="mt-10 px-8 py-3 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
      >
        One last surprise →
      </button>
    </div>
  );
}
