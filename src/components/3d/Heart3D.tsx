import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Activity, Heart, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface HotspotProps {
  position: [number, number, number];
  title: string;
  metric: string;
  value: string;
  status: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Hotspot: React.FC<HotspotProps> = ({
  position,
  title,
  metric,
  value,
  status,
  isOpen,
  onToggle,
}) => {
  return (
    <Html position={position} center distanceFactor={8} zIndexRange={[100, 0]}>
      <div className="relative group">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#2b7f5c] text-white shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-emerald-400"
          title={title}
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping" />
          <span className="text-[11px] font-bold">+</span>
        </button>

        {isOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-9 -top-6 w-56 p-3 bg-neutral-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-neutral-700/60 text-white z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto"
          >
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-neutral-800">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                {title}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">
                {status}
              </span>
            </div>
            <div className="text-[11px] text-neutral-300 flex justify-between items-center py-0.5">
              <span>{metric}:</span>
              <span className="font-semibold text-white font-mono">{value}</span>
            </div>
            <div className="text-[9px] text-neutral-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> Verified via KJ Systems AI ECG
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

// Procedural anatomical heart model with organic muscular curves and pulsating ventricles
const AnatomicalHeartModel: React.FC<{ activeHotspot: number | null; onSelectHotspot: (i: number | null) => void }> = ({
  activeHotspot,
  onSelectHotspot,
}) => {
  const heartGroup = useRef<THREE.Group>(null);
  const ventriclesRef = useRef<THREE.Mesh>(null);
  const aortaRef = useRef<THREE.Mesh>(null);
  const leftAtriumRef = useRef<THREE.Mesh>(null);
  const rightAtriumRef = useRef<THREE.Mesh>(null);

  // Organic muscular materials
  const muscleMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#9e1b2f'), // Deep anatomical myocardium crimson
      roughness: 0.35,
      metalness: 0.15,
      bumpScale: 0.05,
    });
  }, []);

  const arteryMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#c92a3f'), // Oxygenated aorta red
      roughness: 0.25,
      metalness: 0.2,
    });
  }, []);

  const veinMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#25508a'), // Deoxygenated vena cava blue
      roughness: 0.3,
      metalness: 0.2,
    });
  }, []);

  const coronaryMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f03e3e'),
      emissive: new THREE.Color('#e03131'),
      emissiveIntensity: 0.3,
      roughness: 0.2,
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (heartGroup.current) {
      // Gentle continuous ambient rotation
      heartGroup.current.rotation.y = Math.sin(t * 0.3) * 0.25;
      heartGroup.current.rotation.x = Math.cos(t * 0.25) * 0.1;
    }

    // Cardiac contraction cycle: Lub-Dub rhythm (Systole / Diastole)
    const beatPhase = (t * 1.2) % 1; // ~72 BPM
    let pulseScale = 1;
    if (beatPhase < 0.12) {
      pulseScale = 1 + Math.sin((beatPhase / 0.12) * Math.PI) * 0.09; // Lub
    } else if (beatPhase >= 0.15 && beatPhase < 0.27) {
      pulseScale = 1 + Math.sin(((beatPhase - 0.15) / 0.12) * Math.PI) * 0.05; // Dub
    }

    if (ventriclesRef.current) {
      ventriclesRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }
  });

  return (
    <group ref={heartGroup} dispose={null} scale={1.25} position={[0, -0.2, 0]}>
      {/* Main Ventricular Mass (Left & Right Ventricles) */}
      <mesh ref={ventriclesRef} material={muscleMaterial} position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.95, 32, 32]} />
      </mesh>

      {/* Ventricular Apex (Bottom tip pointing down-left) */}
      <mesh material={muscleMaterial} position={[-0.2, -1.0, 0.1]} rotation={[0.2, 0, -0.2]}>
        <coneGeometry args={[0.7, 1.2, 32]} />
      </mesh>

      {/* Left Atrium */}
      <mesh ref={leftAtriumRef} material={muscleMaterial} position={[-0.45, 0.55, -0.1]}>
        <sphereGeometry args={[0.55, 24, 24]} />
      </mesh>

      {/* Right Atrium */}
      <mesh ref={rightAtriumRef} material={muscleMaterial} position={[0.55, 0.45, 0.1]}>
        <sphereGeometry args={[0.58, 24, 24]} />
      </mesh>

      {/* Aorta Arch (Great arterial vessel) */}
      <group position={[-0.1, 0.75, 0]} rotation={[0, 0, -0.35]}>
        <mesh ref={aortaRef} material={arteryMaterial}>
          <torusGeometry args={[0.5, 0.19, 20, 32, Math.PI * 1.1]} />
        </mesh>
        {/* Brachiocephalic branches */}
        <mesh material={arteryMaterial} position={[-0.3, 0.52, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.07, 0.08, 0.45, 16]} />
        </mesh>
        <mesh material={arteryMaterial} position={[-0.05, 0.6, 0]} rotation={[0, 0, 0.05]}>
          <cylinderGeometry args={[0.06, 0.07, 0.45, 16]} />
        </mesh>
        <mesh material={arteryMaterial} position={[0.2, 0.52, 0]} rotation={[0, 0, -0.2]}>
          <cylinderGeometry args={[0.06, 0.07, 0.45, 16]} />
        </mesh>
      </group>

      {/* Pulmonary Trunk */}
      <mesh material={arteryMaterial} position={[0.2, 0.6, 0.25]} rotation={[0.4, 0.3, -0.3]}>
        <cylinderGeometry args={[0.18, 0.2, 0.8, 20]} />
      </mesh>

      {/* Superior Vena Cava (Deoxygenated blue inflow) */}
      <mesh material={veinMaterial} position={[0.7, 0.85, -0.2]} rotation={[0.1, 0, 0.1]}>
        <cylinderGeometry args={[0.16, 0.17, 0.9, 20]} />
      </mesh>

      {/* Inferior Vena Cava */}
      <mesh material={veinMaterial} position={[0.55, -0.9, -0.3]} rotation={[-0.2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.16, 0.7, 20]} />
      </mesh>

      {/* Left Anterior Descending (LAD) Coronary Artery branch */}
      <mesh material={coronaryMaterial} position={[-0.1, -0.35, 0.9]} rotation={[0.1, -0.2, 0.4]}>
        <cylinderGeometry args={[0.035, 0.02, 1.1, 12]} />
      </mesh>

      {/* Circumflex artery branch */}
      <mesh material={coronaryMaterial} position={[0.3, -0.2, 0.85]} rotation={[0.2, 0.3, -0.5]}>
        <cylinderGeometry args={[0.03, 0.018, 0.9, 12]} />
      </mesh>

      {/* Interactive Clinical Hotspots */}
      <Hotspot
        position={[-0.2, 1.3, 0]}
        title="Aortic Arch"
        metric="Peak Systolic Pressure"
        value="122 mmHg"
        status="Optimal"
        isOpen={activeHotspot === 0}
        onToggle={() => onSelectHotspot(activeHotspot === 0 ? null : 0)}
      />

      <Hotspot
        position={[-0.4, -0.6, 0.8]}
        title="Left Ventricle"
        metric="Ejection Fraction (EF)"
        value="64%"
        status="Normal"
        isOpen={activeHotspot === 1}
        onToggle={() => onSelectHotspot(activeHotspot === 1 ? null : 1)}
      />

      <Hotspot
        position={[0.7, 1.1, -0.2]}
        title="Superior Vena Cava"
        metric="Venous Saturation (SvO2)"
        value="76%"
        status="Stable"
        isOpen={activeHotspot === 2}
        onToggle={() => onSelectHotspot(activeHotspot === 2 ? null : 2)}
      />

      <Hotspot
        position={[0, -0.2, 0.95]}
        title="Coronary LAD"
        metric="Coronary Perfusion"
        value="88 mL/min"
        status="Clear"
        isOpen={activeHotspot === 3}
        onToggle={() => onSelectHotspot(activeHotspot === 3 ? null : 3)}
      />
    </group>
  );
};

export const Heart3D: React.FC<{ className?: string; interactive?: boolean }> = ({
  className = 'w-full h-[460px]',
  interactive = true,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1613] via-[#09100d] to-[#040806] border border-emerald-900/30 ${className}`}>
      {/* Ambient glowing radial backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,127,92,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 text-white text-xs pointer-events-auto">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] font-medium tracking-wide">
            LIVE 3D BIO-TELEMETRY &bull; 72 BPM
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-2.5 py-1 text-[11px] rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-700/50 transition-colors"
          >
            {isRotating ? 'Pause Orbit' : 'Auto Rotate'}
          </button>
          <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline">
            Drag to Orbit &bull; Click + for Vitals
          </span>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -4, -3]} intensity={0.6} color="#33a474" />
        <pointLight position={[0, 0, 2]} intensity={0.8} color="#ffffff" />

        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.3}>
          <AnatomicalHeartModel
            activeHotspot={activeHotspot}
            onSelectHotspot={setActiveHotspot}
          />
        </Float>

        {interactive && (
          <OrbitControls
            enableZoom={false}
            autoRotate={isRotating}
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.6}
          />
        )}
      </Canvas>

      {/* Bottom status badge */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] text-neutral-400 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/5">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Interactive Anatomical Simulation</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-emerald-400/90">
          <span>QRS: 88ms</span>
          <span>&bull;</span>
          <span>QTc: 410ms</span>
          <span>&bull;</span>
          <span>SpO2: 99%</span>
        </div>
      </div>
    </div>
  );
};
