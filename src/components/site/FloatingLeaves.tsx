import { Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = { density?: number; className?: string };

/**
 * Slow drifting leaves with light parallax.
 * Very low opacity, GPU-friendly transforms.
 */
export function FloatingLeaves({ density = 6, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.setProperty("--py", `${y * 0.06}px`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const leaves = Array.from({ length: density });
  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ transform: "translate3d(0, var(--py, 0), 0)" }}
    >
      {leaves.map((_, i) => {
        const left = (i * 73) % 100;
        const top = (i * 41) % 100;
        const size = 16 + ((i * 5) % 22);
        const dur = 22 + ((i * 4) % 14);
        const delay = (i % 5) * 1.6;
        const tone = i % 2 === 0 ? "text-accent/20" : "text-gold/20";
        return (
          <Leaf
            key={i}
            className={`absolute ${tone}`}
            size={size}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `leaf-drift ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
