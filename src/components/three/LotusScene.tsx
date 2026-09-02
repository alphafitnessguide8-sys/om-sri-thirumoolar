import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = "#D4A24C";
const GOLD_LIGHT = "#F5D78A";
const EMERALD = "#18392B";

type SceneProps = { reducedMotion: boolean; quality: "low" | "high" };

/** A single stylized petal: a flattened, tapered form built from a lathe profile. */
function petalGeometry() {
  const pts: THREE.Vector2[] = [];
  const steps = 12;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    // width profile — narrow at base, wide mid, pointed tip
    const w = Math.sin(t * Math.PI) * 0.34 + 0.02;
    pts.push(new THREE.Vector2(w, t * 1.25));
  }
  const g = new THREE.LatheGeometry(pts, 10);
  g.scale(1, 1, 0.22); // flatten into a petal
  g.computeVertexNormals();
  return g;
}

function Petals({ count, radius, tilt, scale, color, opacity }: {
  count: number; radius: number; tilt: number; scale: number; color: string; opacity: number;
}) {
  const geo = useMemo(() => petalGeometry(), []);
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.32,
        metalness: 0.75,
        transparent: true,
        opacity,
        emissive: new THREE.Color(GOLD),
        emissiveIntensity: 0.12,
        side: THREE.DoubleSide,
      }),
    [color, opacity],
  );

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        return (
          <group key={i} rotation={[0, a, 0]}>
            <mesh
              geometry={geo}
              material={mat}
              position={[radius, 0, 0]}
              rotation={[0, 0, -Math.PI / 2 + tilt]}
              scale={scale}
            />
          </group>
        );
      })}
    </group>
  );
}

function Lotus({ reducedMotion, quality }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, rawDelta) => {
    const g = group.current;
    if (!g) return;
    if (reducedMotion) {
      g.rotation.set(0.18, 0.4, 0);
      return;
    }
    const dt = Math.min(rawDelta, 0.05);
    g.rotation.y += dt * 0.09;
    const t = performance.now() * 0.001;
    g.position.y = Math.sin(t * 0.5) * 0.06;
    // gentle cursor parallax
    g.rotation.x += (0.16 + pointer.y * 0.09 - g.rotation.x) * Math.min(1, dt * 2.2);
    g.rotation.z += (pointer.x * -0.06 - g.rotation.z) * Math.min(1, dt * 2.2);
  });

  return (
    <group ref={group} rotation={[0.16, 0, 0]}>
      <Petals count={quality === "high" ? 10 : 7} radius={0.72} tilt={0.55} scale={1.15} color={GOLD} opacity={0.95} />
      <Petals count={quality === "high" ? 8 : 6} radius={0.44} tilt={0.95} scale={0.82} color={GOLD_LIGHT} opacity={0.92} />
      <Petals count={6} radius={0.22} tilt={1.25} scale={0.5} color={GOLD_LIGHT} opacity={0.9} />
      {/* seed pod */}
      <mesh position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.2, 20, 16]} />
        <meshStandardMaterial color={EMERALD} roughness={0.4} metalness={0.5} emissive={GOLD} emissiveIntensity={0.18} />
      </mesh>
    </group>
  );
}

/** Slow pollen / light-mote drift. */
function Motes({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.9 + Math.random() * 2.1;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    return arr;
  }, [count]);

  useFrame((_, rawDelta) => {
    if (reducedMotion || !ref.current) return;
    const dt = Math.min(rawDelta, 0.05);
    ref.current.rotation.y += dt * 0.02;
    const p = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const a = p.array as Float32Array;
    for (let i = 1; i < a.length; i += 3) {
      a[i] += dt * 0.06;
      if (a[i] > 1.6) a[i] = -1.6;
    }
    p.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={GOLD_LIGHT}
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function LotusScene({ reducedMotion = false, quality = "high" }: Partial<SceneProps>) {
  const rm = !!reducedMotion;
  const q = quality ?? "high";
  return (
    <Canvas
      dpr={[1, q === "high" ? 1.75 : 1.25]}
      camera={{ position: [0, 1.15, 3.4], fov: 42 }}
      gl={{ antialias: q === "high", alpha: true, powerPreference: "high-performance" }}
      frameloop={rm ? "demand" : "always"}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={1.3} color={GOLD_LIGHT} />
      <pointLight position={[-2.5, -1, 2]} intensity={12} distance={9} color={EMERALD} />
      <Environment>
        <Lightformer intensity={1.6} position={[0, 4, 1]} scale={[8, 8, 1]} color={GOLD_LIGHT} />
        <Lightformer intensity={0.8} color={EMERALD} position={[-4, 0, 2]} rotation-y={Math.PI / 2} scale={[10, 6, 1]} />
      </Environment>
      <Lotus reducedMotion={rm} quality={q} />
      <Motes count={q === "high" ? 70 : 28} reducedMotion={rm} />
    </Canvas>
  );
}
