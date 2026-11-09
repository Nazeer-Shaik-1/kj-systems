import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { CrystalHeartModel } from '../3d/CrystalHeart3D';
import { RotateCcw, Compass, Heart, Activity, Sparkles, CheckCircle2, Play, Pause } from 'lucide-react';

interface RealtimeHeartMountainProps {
  className?: string;
}

export const RealtimeHeartMountain: React.FC<RealtimeHeartMountainProps> = ({
  className = '',
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStatus, setAnalysisStatus] = useState<'finished' | 'analyzing'>('finished');
  const [isOrbiting, setIsOrbiting] = useState(true);
  const [showECG, setShowECG] = useState(true);
  const [heartRate, setHeartRate] = useState(120);
  const [bloodPressure, setBloodPressure] = useState('112/75');
  const [bloodCount, setBloodCount] = useState('80-90');

  // Trigger interactive re-analysis cycle
  const handleRetryAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStatus('analyzing');

    // Simulate real-time diagnostic scan
    setTimeout(() => {
      // Minor randomized physiological variations
      const newBpm = Math.floor(116 + Math.random() * 8);
      const systolic = Math.floor(110 + Math.random() * 5);
      const diastolic = Math.floor(74 + Math.random() * 4);
      setHeartRate(newBpm);
      setBloodPressure(`${systolic}/${diastolic}`);
      setBloodCount(`${Math.floor(82 + Math.random() * 4)}-${Math.floor(88 + Math.random() * 4)}`);
      setIsAnalyzing(false);
      setAnalysisStatus('finished');
    }, 2400);
  };

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xl bg-white ${className}`}
    >
      {/* 1. MOUNTAIN HILLS LANDSCAPE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/mountain_hills.jpg"
          alt="Lush green mountain hills background"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Soft atmospheric gradient & white top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-transparent h-[45%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.7)_50%,transparent_100%)]" />
      </div>

      {/* 2. CARD HEADER */}
      <div className="relative z-20 p-6 sm:p-8 flex items-start justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            Heart Overview
          </h2>
          <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-neutral-600 font-medium">
            <span>
              {analysisStatus === 'finished' ? 'Finished analyzing:' : 'Analyzing cardiac telemetry:'}
            </span>
            <button
              onClick={handleRetryAnalysis}
              disabled={isAnalyzing}
              className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group cursor-pointer"
            >
              <span className="underline underline-offset-2">
                {isAnalyzing ? 'Scanning...' : 'Retry'}
              </span>
              <RotateCcw
                className={`w-3.5 h-3.5 text-emerald-700 group-hover:rotate-180 transition-transform duration-500 ${
                  isAnalyzing ? 'animate-spin' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Top Right Control Pills */}
        <div className="flex items-center gap-2">
          {/* 3D Orbit Toggle */}
          <button
            onClick={() => setIsOrbiting(!isOrbiting)}
            title={isOrbiting ? 'Pause Auto Orbit' : 'Enable Auto Orbit'}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
              isOrbiting
                ? 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            <Compass className={`w-5 h-5 ${isOrbiting ? 'animate-spin-slow' : ''}`} />
          </button>

          {/* Heart Pulse / ECG Toggle */}
          <button
            onClick={() => setShowECG(!showECG)}
            title="Toggle Live ECG Telemetry"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
              showECG
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Heart className="w-5 h-5 fill-current text-emerald-600" />
          </button>
        </div>
      </div>

      {/* 3. CENTER 3D CRYSTAL HEART VIEWPORT & CALLOUTS */}
      <div className="relative z-10 w-full h-[460px] sm:h-[540px] flex items-center justify-center">
        {/* Soft Radial Circular Backdrop Plate (as in reference image) */}
        <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-emerald-100/50 backdrop-blur-[2px] pointer-events-none" />

        {/* 3D Three.js Canvas */}
        <div className="absolute inset-0 z-10">
          <Canvas
            camera={{ position: [0, 0, 4.2], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            className="cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={1.1} />
            <directionalLight position={[4, 6, 5]} intensity={1.6} color="#ffffff" />
            <directionalLight position={[-5, -2, -3]} intensity={0.9} color="#34d399" />
            <pointLight position={[0, 0, 3]} intensity={1.0} color="#ffffff" />

            <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.2}>
              <CrystalHeartModel
                isAnalyzing={isAnalyzing}
                bpm={heartRate}
                isOrbiting={isOrbiting}
              />
            </Float>

            <OrbitControls
              enableZoom={false}
              autoRotate={isOrbiting}
              autoRotateSpeed={0.9}
              maxPolarAngle={Math.PI / 1.75}
              minPolarAngle={Math.PI / 2.35}
            />
          </Canvas>
        </div>

        {/* SVG LEADER LINES OVERLAY (Matching reference curved lines and pin dots) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 800 540"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Top-Left: Blood status leader line */}
          <g className="transition-all duration-300">
            {/* Anchor dot on heart aorta */}
            <circle cx="348" cy="200" r="8" fill="white" stroke="#2d6a4f" strokeWidth="2.5" />
            <circle cx="348" cy="200" r="3.5" fill="#2d6a4f" />
            {/* Curved bezier leader line to callout */}
            <path
              d="M 348 200 C 270 200, 240 160, 160 160"
              fill="none"
              stroke="#2d6a4f"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Terminal end pin dot */}
            <circle cx="158" cy="160" r="4.5" fill="#2d6a4f" />
          </g>

          {/* Right: Heart rate leader line */}
          <g className="transition-all duration-300">
            {/* Anchor dot on heart central atrium/ventricle */}
            <circle cx="400" cy="280" r="8" fill="white" stroke="#2d6a4f" strokeWidth="2.5" />
            <circle cx="400" cy="280" r="3.5" fill="#2d6a4f" />
            {/* Curved bezier leader line to callout */}
            <path
              d="M 400 280 C 470 280, 520 200, 655 200"
              fill="none"
              stroke="#2d6a4f"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Terminal end pin dot */}
            <circle cx="658" cy="200" r="4.5" fill="#2d6a4f" />
          </g>

          {/* Bottom-Left: Blood count leader line */}
          <g className="transition-all duration-300">
            {/* Anchor dot on heart lower apex */}
            <circle cx="340" cy="360" r="8" fill="white" stroke="#2d6a4f" strokeWidth="2.5" />
            <circle cx="340" cy="360" r="3.5" fill="#2d6a4f" />
            {/* Curved bezier leader line to callout */}
            <path
              d="M 340 360 C 260 360, 240 455, 162 455"
              fill="none"
              stroke="#2d6a4f"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Terminal end pin dot */}
            <circle cx="160" cy="455" r="4.5" fill="#2d6a4f" />
          </g>
        </svg>

        {/* 4. REALTIME TELEMETRY CALLOUT LABELS (HTML layer) */}
        {/* Top-Left: Blood status */}
        <div className="absolute top-[20%] left-4 sm:left-10 z-30 pointer-events-auto">
          <div className="text-left">
            <span className="block text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight">
              Blood status
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#19533a] font-mono tracking-tight leading-tight">
              {bloodPressure}
            </span>
          </div>
        </div>

        {/* Right: Heart rate */}
        <div className="absolute top-[28%] right-4 sm:right-10 z-30 pointer-events-auto">
          <div className="text-left sm:text-left">
            <span className="block text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight">
              Heart rate
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#19533a] font-mono tracking-tight leading-tight">
                {heartRate}bpm
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
          </div>
        </div>

        {/* Bottom-Left: Blood count */}
        <div className="absolute bottom-[16%] left-4 sm:left-10 z-30 pointer-events-auto">
          <div className="text-left">
            <span className="block text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight">
              Blood count
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#19533a] font-mono tracking-tight leading-tight">
              {bloodCount}
            </span>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM REAL-TIME ECG TELEMETRY STRIP OVER MOUNTAIN HILLS */}
      {showECG && (
        <div className="relative z-20 px-6 py-4 bg-white/80 backdrop-blur-md border-t border-emerald-900/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-neutral-900 flex items-center gap-1.5 uppercase tracking-wide">
                <span>Real-Time Cardiac Waveform</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">
                Sampling Rate: 250 Hz &bull; Normal Sinus Rhythm &bull; KJ Systems AI Engine
              </div>
            </div>
          </div>

          {/* Animated SVG ECG rhythm line */}
          <div className="hidden sm:block w-48 h-7 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 200 30" preserveAspectRatio="none">
              <path
                d="M 0 15 L 40 15 L 45 15 L 50 2 L 55 28 L 60 15 L 68 15 L 75 10 L 82 15 L 140 15 L 145 15 L 150 2 L 155 28 L 160 15 L 168 15 L 175 10 L 182 15 L 200 15"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-600">
            <span className="hidden md:inline">Drag 3D model to orbit 360°</span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-700 text-white font-sans text-[11px] font-semibold">
              Live Monitoring Active
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
