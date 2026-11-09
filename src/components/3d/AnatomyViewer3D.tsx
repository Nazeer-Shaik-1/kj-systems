import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Layers, Activity, Eye, Zap, Shield, Sparkles } from 'lucide-react';

interface AnatomyViewerProps {
  className?: string;
}

type SystemLayer = 'cardio' | 'skeletal' | 'neural' | 'all';

const AnatomyModel: React.FC<{ activeLayer: SystemLayer; selectedOrgan: string | null; onSelectOrgan: (o: string | null) => void }> = ({
  activeLayer,
  selectedOrgan,
  onSelectOrgan,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  // Skeletal materials
  const boneMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#e8e6df', roughness: 0.4, metalness: 0.1 }),
    []
  );

  // Cardio vascular materials
  const arteryMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.3, emissive: '#991b1b', emissiveIntensity: 0.2 }),
    []
  );
  const veinMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#2563eb', roughness: 0.3, emissive: '#1d4ed8', emissiveIntensity: 0.2 }),
    []
  );

  // Neural fiber materials
  const neuralMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#38bdf8', roughness: 0.2, emissive: '#0284c7', emissiveIntensity: 0.6 }),
    []
  );

  const showSkeletal = activeLayer === 'skeletal' || activeLayer === 'all';
  const showCardio = activeLayer === 'cardio' || activeLayer === 'all';
  const showNeural = activeLayer === 'neural' || activeLayer === 'all';

  return (
    <group ref={groupRef} position={[0, -0.6, 0]} scale={1.1}>
      {/* Head / Cranium Representation */}
      {showSkeletal && (
        <group position={[0, 1.9, 0]}>
          <mesh material={boneMat}>
            <sphereGeometry args={[0.38, 24, 24]} />
          </mesh>
          {/* Facial structure */}
          <mesh material={boneMat} position={[0, -0.15, 0.2]}>
            <boxGeometry args={[0.26, 0.25, 0.24]} />
          </mesh>
        </group>
      )}

      {/* Brain & Neural Net */}
      {showNeural && (
        <group position={[0, 1.95, 0]}>
          <mesh material={neuralMat}>
            <sphereGeometry args={[0.32, 16, 16]} />
          </mesh>
          {/* Spinal Cord */}
          <mesh material={neuralMat} position={[0, -1.0, -0.05]}>
            <cylinderGeometry args={[0.03, 0.03, 1.9, 12]} />
          </mesh>
        </group>
      )}

      {/* Spinal Column & Ribcage (Skeletal) */}
      {showSkeletal && (
        <group position={[0, 0.8, 0]}>
          {/* Spine */}
          <mesh material={boneMat} position={[0, 0, -0.08]}>
            <cylinderGeometry args={[0.06, 0.08, 1.6, 16]} />
          </mesh>

          {/* Ribs (10 pairs) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <group key={i} position={[0, 0.6 - i * 0.14, 0]}>
              <mesh material={boneMat} rotation={[0.15, 0, 0]}>
                <torusGeometry args={[0.42 + i * 0.015, 0.025, 10, 24, Math.PI * 0.9]} />
              </mesh>
            </group>
          ))}

          {/* Sternum */}
          <mesh material={boneMat} position={[0, 0.2, 0.44]}>
            <boxGeometry args={[0.08, 0.75, 0.04]} />
          </mesh>

          {/* Clavicles */}
          <mesh material={boneMat} position={[0, 0.75, 0.2]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 1.1, 16]} />
          </mesh>

          {/* Pelvis */}
          <mesh material={boneMat} position={[0, -0.85, 0]}>
            <torusGeometry args={[0.48, 0.09, 12, 24, Math.PI]} />
          </mesh>
        </group>
      )}

      {/* Cardiovascular Circuit */}
      {showCardio && (
        <group position={[0, 0.8, 0]}>
          {/* Heart Central Core */}
          <mesh material={arteryMat} position={[-0.05, 0.25, 0.15]}>
            <sphereGeometry args={[0.22, 24, 24]} />
          </mesh>

          {/* Ascending & Descending Aorta */}
          <mesh material={arteryMat} position={[-0.03, 0.4, 0.08]} rotation={[0, 0, -0.2]}>
            <cylinderGeometry args={[0.05, 0.05, 0.5, 14]} />
          </mesh>
          <mesh material={arteryMat} position={[-0.04, -0.4, 0.05]}>
            <cylinderGeometry args={[0.04, 0.035, 1.1, 14]} />
          </mesh>

          {/* Vena Cava (Deoxygenated blue) */}
          <mesh material={veinMat} position={[0.08, 0.35, 0.08]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6, 14]} />
          </mesh>
          <mesh material={veinMat} position={[0.07, -0.4, 0.05]}>
            <cylinderGeometry args={[0.04, 0.035, 1.1, 14]} />
          </mesh>

          {/* Carotid & Jugular Neck Vessels */}
          <mesh material={arteryMat} position={[-0.1, 0.95, 0.05]}>
            <cylinderGeometry args={[0.025, 0.025, 0.6, 12]} />
          </mesh>
          <mesh material={veinMat} position={[0.1, 0.95, 0.05]}>
            <cylinderGeometry args={[0.025, 0.025, 0.6, 12]} />
          </mesh>

          {/* Subclavian Branching (Arms) */}
          <mesh material={arteryMat} position={[-0.45, 0.65, 0.05]} rotation={[0, 0, 0.4]}>
            <cylinderGeometry args={[0.02, 0.02, 0.7, 10]} />
          </mesh>
          <mesh material={veinMat} position={[0.45, 0.65, 0.05]} rotation={[0, 0, -0.4]}>
            <cylinderGeometry args={[0.02, 0.02, 0.7, 10]} />
          </mesh>
        </group>
      )}

      {/* Lungs (Subtle translucent pulmonary parenchyma) */}
      <group position={[0, 0.8, 0]}>
        <mesh position={[-0.26, 0.22, 0.05]}>
          <capsuleGeometry args={[0.18, 0.4, 12, 16]} />
          <meshStandardMaterial color="#33a474" transparent opacity={0.25} roughness={0.3} />
        </mesh>
        <mesh position={[0.26, 0.22, 0.05]}>
          <capsuleGeometry args={[0.18, 0.4, 12, 16]} />
          <meshStandardMaterial color="#33a474" transparent opacity={0.25} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
};

export const AnatomyViewer3D: React.FC<AnatomyViewerProps> = ({
  className = 'w-full h-[520px]',
}) => {
  const [activeLayer, setActiveLayer] = useState<SystemLayer>('all');
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);

  const layers: { id: SystemLayer; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Systems', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'cardio', label: 'Cardiovascular', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'skeletal', label: 'Skeletal Framework', icon: <Shield className="w-3.5 h-3.5" /> },
    { id: 'neural', label: 'Central Nervous', icon: <Zap className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl ${className}`}>
      {/* Header controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 backdrop-blur border border-neutral-700/60 text-white text-xs pointer-events-auto">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">3D Multi-Layer Anatomy Scanner</span>
        </div>

        {/* Layer Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/90 backdrop-blur border border-neutral-800 pointer-events-auto">
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg transition-all ${
                activeLayer === l.id
                  ? 'bg-emerald-600 text-white font-medium shadow'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {l.icon}
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#33a474" />
        <pointLight position={[0, 1, 2]} intensity={0.7} color="#38bdf8" />

        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.15}>
          <AnatomyModel
            activeLayer={activeLayer}
            selectedOrgan={selectedOrgan}
            onSelectOrgan={setSelectedOrgan}
          />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      {/* Footer Specs */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-neutral-400 text-xs pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur border border-neutral-800">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Interactive 3D Anatomical Telemetry Engine</span>
        </div>
        <span className="hidden sm:inline font-mono text-[11px] text-emerald-400">
          Resolution: High-Poly Real-time WebGL
        </span>
      </div>
    </div>
  );
};
