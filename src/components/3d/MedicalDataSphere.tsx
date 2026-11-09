import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSphere: React.FC<{ count?: number }> = ({ count = 450 }) => {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate spherical distribution of medical network nodes
  const [positions, linePositions] = useMemo(() => {
    const coords: number[] = [];
    const pts: THREE.Vector3[] = [];
    const radius = 1.8;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      coords.push(x, y, z);
      pts.push(new THREE.Vector3(x, y, z));
    }

    // Connect close neighbors with subtle data lines
    const lineCoords: number[] = [];
    for (let i = 0; i < pts.length; i += 3) {
      for (let j = i + 1; j < pts.length; j += 4) {
        if (pts[i].distanceTo(pts[j]) < 0.65) {
          lineCoords.push(pts[i].x, pts[i].y, pts[i].z);
          lineCoords.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return [new Float32Array(coords), new Float32Array(lineCoords)];
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.12;
      linesRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
  });

  return (
    <group>
      {/* Network Nodes */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#33a474"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Interconnecting Data Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#2b7f5c"
          transparent
          opacity={0.35}
        />
      </lineSegments>

      {/* Central Pulsing Health Node Core */}
      <mesh>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial
          color="#2b7f5c"
          emissive="#33a474"
          emissiveIntensity={0.6}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
};

export const MedicalDataSphere: React.FC<{ className?: string }> = ({
  className = 'w-full h-[400px]',
}) => {
  return (
    <div className={`relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,164,116,0.15)_0%,transparent_75%)] pointer-events-none" />
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 4]} intensity={1.2} />
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.2}>
          <ParticleSphere count={420} />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
};
