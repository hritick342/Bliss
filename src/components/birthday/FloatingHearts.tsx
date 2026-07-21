import { useMemo } from "react";

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 28,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 8,
        rose: Math.random() > 0.5,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            color: h.rose ? "var(--primary)" : "var(--gold)",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.08))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
