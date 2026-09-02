import { Suspense, lazy, useEffect, useState } from "react";

const LotusScene = lazy(() => import("@/components/three/LotusScene"));

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

/**
 * Lazy, client-only 3D lotus centerpiece for the hero.
 * Degrades to nothing (the existing CSS graphic stays visible) when
 * WebGL is unavailable. Honours prefers-reduced-motion by rendering a
 * static frame, and drops quality on small screens.
 */
export function HeroCenterpiece({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [quality, setQuality] = useState<"low" | "high">("high");

  useEffect(() => {
    if (!supportsWebGL()) return;
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setQuality(window.innerWidth < 1024 || (navigator.hardwareConcurrency ?? 8) <= 4 ? "low" : "high");

    // never block first paint
    const start = () => setReady(true);
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(start, { timeout: 2500 });
    else setTimeout(start, 1200);
  }, []);

  if (!ready) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 animate-fade-in ${className}`}
      style={{ animationDuration: "1.6s" }}
    >
      <Suspense fallback={null}>
        <LotusScene reducedMotion={reducedMotion} quality={quality} />
      </Suspense>
    </div>
  );
}
