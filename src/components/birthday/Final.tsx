import { FINAL_MESSAGE, RECIPIENT } from "@/lib/birthday";
import { Confetti } from "./Confetti";
import { FloatingHearts } from "./FloatingHearts";

export function Final({ onReplay }: { onReplay: () => void }) {
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `Happy Birthday ${RECIPIENT.name} ❤️`;
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share({
          title: text,
          text,
          url,
        });
      } catch {
        /* cancelled */
      }
    } else if (typeof navigator !== "undefined") {
      const nav = navigator as Navigator;
      if (nav.clipboard) {
        await nav.clipboard.writeText(url);
        alert("Link copied!");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-plum text-primary-foreground overflow-hidden">
      <Confetti pieces={100} />
      <FloatingHearts count={22} />

      <div className="relative z-10 text-center max-w-xl animate-fade-slide-up">
        <div className="text-7xl mb-4">🎂</div>
        <p className="uppercase tracking-[0.4em] text-xs opacity-80 mb-4">The final surprise</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
          Happy Birthday,
          <br />
          <span className="text-gold">{RECIPIENT.name}</span>
        </h1>
        <pre className="mt-8 whitespace-pre-wrap font-display text-lg md:text-xl italic opacity-90">
          {FINAL_MESSAGE}
        </pre>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <button
            onClick={onReplay}
            className="px-6 py-3 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
          >
            ↺ Replay
          </button>
          <button
            onClick={share}
            className="px-6 py-3 rounded-full bg-primary-foreground text-plum font-semibold hover:scale-105 transition-transform"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
