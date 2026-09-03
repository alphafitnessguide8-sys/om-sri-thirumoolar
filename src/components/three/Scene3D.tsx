import { Suspense, lazy, useEffect, useState, type ComponentType } from "react";

export type Scene3DProps = { reducedMotion: boolean; quality: "low" | "high" };

const scenes = {
  lotus: lazy(() => import("@/components/three/LotusScene")),
  emblem: lazy(() => import("@/components/three/EmblemScene")),
} satisfies Record<string, ComponentType<Partial<Scene3DProps>>>;

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

/**
 * Shared loader for every 3D scene on the site.
 * - lazy + idle-deferred so it never blocks first paint / LCP
 * - WebGL feature detection with silent CSS fallback
 * - honours prefers-reduced-motion (static frame)
 * - drops quality (and can opt out entirely) on small / low-core devices
 */
export function Scene3D({
  scene,
  className = "",
  disableBelow = 0,
}: {
  scene: keyof typeof scenes;
  className?: string;
  /** viewport width (px) below which the scene is skipped entirely */
  disableBelow?: number;
}) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [quality, setQuality] = useState<"low" | "high">("high");

  useEffect(() => {
    if (!supportsWebGL()) return;
    if (window.innerWidth < disableBelow) return;
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setQuality(window.innerWidth < 1024 || (navigator.hardwareConcurrency ?? 8) <= 4 ? "low" : "high");

    const start = () => setReady(true);
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(start, { timeout: 2500 });
    else setTimeout(start, 1200);
  }, [disableBelow]);

  if (!ready) return null;
  const Scene = scenes[scene];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 animate-fade-in ${className}`}
      style={{ animationDuration: "1.6s" }}
    >
      <Suspense fallback={null}>
        <Scene reducedMotion={reducedMotion} quality={quality} />
      </Suspense>
    </div>
  );
}
