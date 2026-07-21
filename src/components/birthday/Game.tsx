import { useEffect, useRef, useState } from "react";

type Heart = { id: number; x: number; y: number; size: number; bornAt: number };

const TARGET = 15;
const GAME_LENGTH = 30; // seconds

export function Game({ onWin }: { onWin: () => void }) {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_LENGTH);
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    if (!started || won) return;
    const tick = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    const spawn = setInterval(() => {
      setHearts((prev) => [
        ...prev.filter((h) => Date.now() - h.bornAt < 2200),
        {
          id: ++idRef.current,
          x: 5 + Math.random() * 85,
          y: 15 + Math.random() * 70,
          size: 28 + Math.random() * 24,
          bornAt: Date.now(),
        },
      ]);
    }, 550);
    return () => {
      clearInterval(tick);
      clearInterval(spawn);
    };
  }, [started, won]);

  useEffect(() => {
    if (score >= TARGET && !won) {
      setWon(true);
    }
  }, [score, won]);

  const tap = (id: number) => {
    setHearts((h) => h.filter((x) => x.id !== id));
    setScore((s) => s + 1);
  };

  const restart = () => {
    setHearts([]);
    setScore(0);
    setTime(GAME_LENGTH);
    setWon(false);
    setStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-plum text-primary-foreground">
      <div className="p-6 flex items-center justify-between">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs opacity-70">Collect Hearts</p>
          <h2 className="font-display text-2xl">Catch {TARGET} to unlock a surprise</h2>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <div className="text-xs opacity-70">Score</div>
            <div className="font-display text-3xl">{score}</div>
          </div>
          <div>
            <div className="text-xs opacity-70">Time</div>
            <div className="font-display text-3xl">{time}s</div>
          </div>
        </div>
      </div>

      <div className="relative flex-1 mx-6 mb-6 rounded-3xl bg-background/10 backdrop-blur-sm border border-primary-foreground/20 overflow-hidden">
        {!started && !won && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-display text-3xl mb-2">Ready?</p>
            <p className="opacity-80 mb-6 max-w-sm">
              Tap the hearts as they appear. Catch {TARGET} to unlock your final surprise.
            </p>
            <button
              onClick={() => setStarted(true)}
              className="px-8 py-3 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
            >
              Start ♥
            </button>
          </div>
        )}

        {started && !won && time > 0 &&
          hearts.map((h) => (
            <button
              key={h.id}
              onClick={() => tap(h.id)}
              className="absolute select-none hover:scale-125 transition-transform"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                fontSize: `${h.size}px`,
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.25))",
                animation: "sparkle 2s ease-in-out infinite",
              }}
              aria-label="heart"
            >
              💖
            </button>
          ))}

        {(won || (started && time === 0)) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-plum/40 backdrop-blur-sm">
            {won ? (
              <>
                <p className="text-6xl mb-4">🎉</p>
                <p className="font-display text-3xl mb-2">You caught them all!</p>
                <p className="opacity-90 mb-6">Hidden message unlocked: you are so, so loved.</p>
                <button
                  onClick={onWin}
                  className="px-8 py-3 rounded-full bg-gold text-gold-foreground font-semibold shadow-gold"
                >
                  Continue →
                </button>
              </>
            ) : (
              <>
                <p className="font-display text-3xl mb-2">So close!</p>
                <p className="opacity-90 mb-6">
                  You caught {score}. Give it another go?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={restart}
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
                  >
                    Try again
                  </button>
                  <button
                    onClick={onWin}
                    className="px-6 py-3 rounded-full border border-primary-foreground/40"
                  >
                    Skip
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
