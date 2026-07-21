import { useMemo } from "react";

export function Confetti({ pieces = 80 }: { pieces?: number }) {
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        tx: (Math.random() - 0.5) * 200,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 1.5,
        size: 6 + Math.random() * 8,
        color: ["var(--primary)", "var(--gold)", "var(--plum)", "var(--primary-glow)"][i % 4],
        rot: Math.random() * 360,
      })),
    [pieces],
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50" aria-hidden>
      {bits.map((b) => (
        <span
          key={b.id}
          className="absolute animate-confetti"
          style={{
            left: `${b.left}%`,
            top: 0,
            width: `${b.size}px`,
            height: `${b.size * 1.6}px`,
            background: b.color,
            transform: `rotate(${b.rot}deg)`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            borderRadius: "2px",
            ["--tx" as never]: `${b.tx}px`,
          }}
        />
      ))}
    </div>
  );
}
