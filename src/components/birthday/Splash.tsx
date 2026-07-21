import { useEffect } from "react";
import { RECIPIENT } from "@/lib/birthday";

export function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-plum text-primary-foreground">
      <div className="animate-fade-slide-up text-center">
        <div className="text-7xl mb-6 animate-float-soft">🎀</div>
        <p className="uppercase tracking-[0.4em] text-xs opacity-80 mb-4">A little world for</p>
        <h1 className="font-display text-6xl md:text-7xl font-bold">{RECIPIENT.name}</h1>
        <div className="mt-8 h-[2px] w-24 mx-auto bg-gold rounded-full animate-sparkle" />
      </div>
    </div>
  );
}
