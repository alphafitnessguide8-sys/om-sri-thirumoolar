/**
 * Cinematic VFX layer — god rays, mist, film grain, vignette.
 * Pure CSS, GPU-friendly, very subtle. Drop inside any relative section.
 */
type Props = {
  rays?: boolean;
  mist?: boolean;
  grain?: boolean;
  vignette?: boolean;
  className?: string;
};

export function CinematicFX({
  rays = true,
  mist = true,
  grain = true,
  vignette = true,
  className = "",
}: Props) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {rays && (
        <>
          <div className="cine-ray cine-ray-1" />
          <div className="cine-ray cine-ray-2" />
          <div className="cine-ray cine-ray-3" />
        </>
      )}
      {mist && (
        <>
          <div className="cine-mist cine-mist-1" />
          <div className="cine-mist cine-mist-2" />
        </>
      )}
      {grain && <div className="cine-grain" />}
      {vignette && <div className="cine-vignette" />}
    </div>
  );
}
