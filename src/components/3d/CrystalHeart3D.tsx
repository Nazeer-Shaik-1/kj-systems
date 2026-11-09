import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface CrystalHeartProps {
  isAnalyzing?: boolean;
  bpm?: number;
  isOrbiting?: boolean;
}

export const CrystalHeartModel: React.FC<CrystalHeartProps> = ({
  isAnalyzing = false,
  bpm = 120,
}) => {
  const rootRef = useRef<THREE.Group>(null);
  const outerHeartRef = useRef<THREE.Group>(null);
  const vesselsRef = useRef<THREE.Group>(null);
  const vascularMatRef = useRef<THREE.MeshStandardMaterial>(null);

  // Translucent refractive glass material matching reference image
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#cbf3e5'),
      transmission: 0.92,
      opacity: 0.9,
      transparent: true,
      roughness: 0.08,
      metalness: 0.02,
      ior: 1.48,
      thickness: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      attenuationColor: new THREE.Color('#10b981'),
      attenuationDistance: 1.2,
      depthWrite: false,
    });
  }, []);

  // Glowing emerald vascular material for the inner coronary vessels
  const vascularMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0d5940'),
      emissive: new THREE.Color('#10b981'),
      emissiveIntensity: 0.65,
      roughness: 0.25,
      metalness: 0.1,
    });
  }, []);

  // Internal chamber core material
  const innerChamberMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#187958'),
      emissive: new THREE.Color('#059669'),
      emissiveIntensity: 0.35,
      roughness: 0.3,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Ambient floating tilt and gentle natural sway
    if (rootRef.current) {
      rootRef.current.rotation.y = Math.sin(t * 0.4) * 0.18;
      rootRef.current.rotation.x = Math.cos(t * 0.3) * 0.08;
    }

    // Cardiac Lub-Dub beat cycle matching target BPM
    const beatRate = bpm / 60; // cycles per second
    const phase = (t * beatRate) % 1;

    let scale = 1;
    let emissiveBoost = 0.65;

    // Lub (Systolic contraction)
    if (phase < 0.12) {
      const s = Math.sin((phase / 0.12) * Math.PI);
      scale = 1 + s * 0.09;
      emissiveBoost = 0.65 + s * 0.8;
    }
    // Dub (Diastolic atrial kick)
    else if (phase >= 0.16 && phase < 0.28) {
      const s = Math.sin(((phase - 0.16) / 0.12) * Math.PI);
      scale = 1 + s * 0.05;
      emissiveBoost = 0.65 + s * 0.4;
    }

    if (outerHeartRef.current) {
      outerHeartRef.current.scale.set(scale, scale, scale);
    }
    if (vesselsRef.current) {
      vesselsRef.current.scale.set(scale * 0.98, scale * 0.98, scale * 0.98);
    }

    if (vascularMaterial) {
      if (isAnalyzing) {
        // Scanning laser pulse
        const scan = (Math.sin(t * 8) + 1) * 0.5;
        vascularMaterial.emissiveIntensity = 0.8 + scan * 1.5;
      } else {
        vascularMaterial.emissiveIntensity = emissiveBoost;
      }
    }
  });

  return (
    <group ref={rootRef} position={[0, -0.15, 0]} scale={1.22}>
      {/* 1. Translucent Glass Outer Shell */}
      <group ref={outerHeartRef}>
        {/* Main Ventricular Mass */}
        <mesh material={glassMaterial} position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.9, 36, 36]} />
        </mesh>

        {/* Ventricular Apex (pointed bottom) */}
        <mesh material={glassMaterial} position={[-0.15, -0.9, 0.08]} rotation={[0.2, 0, -0.2]}>
          <coneGeometry args={[0.68, 1.25, 36]} />
        </mesh>

        {/* Left Atrium glass mass */}
        <mesh material={glassMaterial} position={[-0.48, 0.52, -0.08]}>
          <sphereGeometry args={[0.56, 32, 32]} />
        </mesh>

        {/* Right Atrium glass mass */}
        <mesh material={glassMaterial} position={[0.52, 0.46, 0.1]}>
          <sphereGeometry args={[0.58, 32, 32]} />
        </mesh>

        {/* Aortic Arch (Great Glass Curved Vessel) */}
        <group position={[-0.08, 0.75, 0]} rotation={[0, 0, -0.35]}>
          <mesh material={glassMaterial}>
            <torusGeometry args={[0.52, 0.2, 24, 36, Math.PI * 1.15]} />
          </mesh>
          {/* Brachiocephalic glass branches extending upward */}
          <mesh material={glassMaterial} position={[-0.32, 0.55, 0]} rotation={[0, 0, 0.2]}>
            <cylinderGeometry args={[0.075, 0.085, 0.48, 20]} />
          </mesh>
          <mesh material={glassMaterial} position={[-0.08, 0.62, 0]} rotation={[0, 0, 0.05]}>
            <cylinderGeometry args={[0.065, 0.075, 0.48, 20]} />
          </mesh>
          <mesh material={glassMaterial} position={[0.18, 0.56, 0]} rotation={[0, 0, -0.2]}>
            <cylinderGeometry args={[0.07, 0.08, 0.48, 20]} />
          </mesh>
        </group>

        {/* Pulmonary Trunk */}
        <mesh material={glassMaterial} position={[0.22, 0.62, 0.26]} rotation={[0.4, 0.3, -0.3]}>
          <cylinderGeometry args={[0.18, 0.21, 0.85, 24]} />
        </mesh>

        {/* Superior Vena Cava */}
        <mesh material={glassMaterial} position={[0.7, 0.9, -0.18]} rotation={[0.1, 0, 0.1]}>
          <cylinderGeometry args={[0.16, 0.18, 0.95, 24]} />
        </mesh>
      </group>

      {/* 2. Inner Glowing Vascular Tree Structure (branching coronary network) */}
      <group ref={vesselsRef}>
        {/* Core interior chamber glow */}
        <mesh material={innerChamberMat} position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.55, 24, 24]} />
        </mesh>

        {/* Left Anterior Descending (LAD) Main Trunk */}
        <mesh material={vascularMaterial} position={[-0.05, -0.2, 0.85]} rotation={[0.15, -0.1, 0.35]}>
          <cylinderGeometry args={[0.045, 0.03, 1.15, 14]} />
        </mesh>

        {/* LAD Sub-branch 1 (Left Diagonal) */}
        <mesh material={vascularMaterial} position={[-0.26, -0.32, 0.82]} rotation={[0.2, -0.35, 0.8]}>
          <cylinderGeometry args={[0.028, 0.016, 0.62, 12]} />
        </mesh>

        {/* LAD Sub-branch 2 (Lower Septal) */}
        <mesh material={vascularMaterial} position={[-0.14, -0.68, 0.72]} rotation={[0.1, 0.2, 0.5]}>
          <cylinderGeometry args={[0.024, 0.012, 0.55, 12]} />
        </mesh>

        {/* Circumflex Artery Trunk */}
        <mesh material={vascularMaterial} position={[0.28, -0.15, 0.82]} rotation={[0.25, 0.35, -0.5]}>
          <cylinderGeometry args={[0.04, 0.025, 0.95, 14]} />
        </mesh>

        {/* Circumflex Marginal branch 1 */}
        <mesh material={vascularMaterial} position={[0.44, -0.38, 0.72]} rotation={[0.15, 0.45, -0.85]}>
          <cylinderGeometry args={[0.025, 0.014, 0.58, 12]} />
        </mesh>

        {/* Circumflex Marginal branch 2 */}
        <mesh material={vascularMaterial} position={[0.28, -0.62, 0.68]} rotation={[0.1, -0.1, -0.4]}>
          <cylinderGeometry args={[0.022, 0.012, 0.52, 12]} />
        </mesh>

        {/* Right Coronary Artery (Posterior descending) */}
        <mesh material={vascularMaterial} position={[0.42, 0.1, 0.4]} rotation={[-0.2, 0.4, -0.2]}>
          <cylinderGeometry args={[0.038, 0.022, 0.88, 12]} />
        </mesh>

        {/* Fine capillary network arborization */}
        <mesh material={vascularMaterial} position={[-0.35, -0.48, 0.6]} rotation={[0.3, -0.4, 1.1]}>
          <cylinderGeometry args={[0.018, 0.008, 0.42, 10]} />
        </mesh>
        <mesh material={vascularMaterial} position={[0.15, -0.78, 0.55]} rotation={[0.1, 0.3, -0.2]}>
          <cylinderGeometry args={[0.018, 0.008, 0.42, 10]} />
        </mesh>
        <mesh material={vascularMaterial} position={[-0.05, -0.92, 0.4]} rotation={[0.15, -0.2, 0.1]}>
          <cylinderGeometry args={[0.016, 0.008, 0.38, 10]} />
        </mesh>
      </group>

      {/* 3. Glowing Core Diagnostic Center Node */}
      <mesh position={[0, -0.05, 0.15]}>
        <sphereGeometry args={[0.18, 18, 18]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#34d399"
          emissiveIntensity={isAnalyzing ? 2.5 : 1.2}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
};
