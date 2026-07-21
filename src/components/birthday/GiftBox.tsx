import { useState } from "react";
import { Confetti } from "./Confetti";

export function GiftBox({ onOpen }: { onOpen: () => void }) {
  const [stage, setStage] = useState<"idle" | "shaking" | "opening">("idle");

  const handleTap = () => {
    if (stage !== "idle") return;
    setStage("shaking");
    setTimeout(() => setStage("opening"), 900);
    setTimeout(onOpen, 2400);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-sunrise overflow-hidden">
      {stage === "opening" && <Confetti pieces={120} />}
      <p className="uppercase tracking-[0.4em] text-xs text-plum/70 mb-6 animate-fade-slide-up">
        Tap the gift
      </p>

      <button
        onClick={handleTap}
        aria-label="Open the gift"
        className={`text-[10rem] md:text-[14rem] leading-none select-none transition-transform ${
          stage === "shaking" ? "animate-shake" : ""
        } ${stage === "opening" ? "animate-pop-open" : ""}`}
        style={{ filter: "drop-shadow(0 20px 30px rgba(184,51,106,0.35))" }}
      >
        🎁
      </button>

      {stage === "idle" && (
        <p className="mt-8 text-plum/80 font-display italic animate-fade-slide-up">
          Something's inside just for you...
        </p>
      )}
      {stage === "opening" && (
        <p className="mt-8 text-2xl md:text-3xl font-display text-plum font-semibold animate-fade-slide-up">
          ✨ Surprise! ✨
        </p>
      )}
    </div>
  );
}
