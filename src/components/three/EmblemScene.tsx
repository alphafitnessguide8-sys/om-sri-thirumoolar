import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = "#D4A24C";
const GOLD_LIGHT = "#F5D78A";
const EMERALD = "#18392B";

type SceneProps = { reducedMotion: boolean; quality: "low" | "high" };

/** A calm gold medallion: concentric rings that breathe and drift slowly. */
function Emblem({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const rings = useMemo(
    () => [
      { r: 1.05, tube: 0.02, seg: 96, speed: 0.05, tilt: 0.0, opacity: 0.5 },
      { r: 1.5, tube: 0.012, seg: 96, speed: -0.035, tilt: 0.35, opacity: 0.36 },
      { r: 1.95, tube: 0.008, seg: 96, speed: 0.022, tilt: -0.28, opacity: 0.26 },
    ],
    [],
  );

  useFrame((_, rawDelta) => {
    const g = group.current;
    if (!g) return;
    if (reducedMotion) {
      g.rotation.set(0.12, 0.3, 0);
      return;
    }
    const dt = Math.min(rawDelta, 0.05);
    const t = performance.now() * 0.001;
    g.position.y = Math.sin(t * 0.42) * 0.05;
    g.rotation.x += (0.12 + pointer.y * 0.06 - g.rotation.x) * Math.min(1, dt * 2);
    g.rotation.z += (pointer.x * -0.05 - g.rotation.z) * Math.min(1, dt * 2);
    g.children.forEach((c, i) => {
      const cfg = rings[i];
      if (cfg) c.rotation.z += dt * cfg.speed;
    });
  });

  return (
    <group ref={group} rotation={[0.12, 0, 0]}>
      {rings.map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + r.tilt, 0, 0]}>
          <torusGeometry args={[r.r, r.tube, 12, r.seg]} />
          <meshStandardMaterial
            color={i === 0 ? GOLD : GOLD_LIGHT}
            metalness={0.85}
            roughness={0.28}
            emissive={new THREE.Color(GOLD)}
            emissiveIntensity={0.35}
            transparent
            opacity={r.opacity}
          />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.42, 32, 24]} />
        <meshStandardMaterial
          color={EMERALD}
          metalness={0.6}
          roughness={0.35}
          emissive={new THREE.Color(GOLD)}
          emissiveIntensity={0.22}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

/** Warm, slow light motes — the shared ambient particle motif. */
function Motes({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.8 + Math.random() * 2.6;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    return arr;
  }, [count]);

  useFrame((_, rawDelta) => {
    if (reducedMotion || !ref.current) return;
    const dt = Math.min(rawDelta, 0.05);
    ref.current.rotation.y += dt * 0.015;
    const p = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const a = p.array as Float32Array;
    for (let i = 1; i < a.length; i += 3) {
      a[i] += dt * 0.05;
      if (a[i] > 1.7) a[i] = -1.7;
    }
    p.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={GOLD_LIGHT}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function EmblemScene({ reducedMotion = false, quality = "high" }: Partial<SceneProps>) {
  const rm = !!reducedMotion;
  const q = quality ?? "high";
  return (
    <Canvas
      dpr={[1, q === "high" ? 1.6 : 1.2]}
      camera={{ position: [0, 0.6, 5.2], fov: 42 }}
      gl={{ antialias: q === "high", alpha: true, powerPreference: "high-performance" }}
      frameloop={rm ? "demand" : "always"}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color={GOLD_LIGHT} />
      <pointLight position={[-3, -1, 2]} intensity={9} distance={10} color={EMERALD} />
      <Environment>
        <Lightformer intensity={1.4} position={[0, 4, 1]} scale={[8, 8, 1]} color={GOLD_LIGHT} />
        <Lightformer intensity={0.7} color={EMERALD} position={[-4, 0, 2]} rotation-y={Math.PI / 2} scale={[10, 6, 1]} />
      </Environment>
      <Emblem reducedMotion={rm} />
      <Motes count={q === "high" ? 60 : 24} reducedMotion={rm} />
    </Canvas>
  );
}
