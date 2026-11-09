import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Sliders,
  Eye,
  Activity,
  RefreshCw
} from 'lucide-react';

interface InteractiveStepPreviewProps {
  stepIndex: number;
  step: {
    step: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    points: string[];
  };
}

export const InteractiveStepPreview: React.FC<InteractiveStepPreviewProps> = ({
  stepIndex,
  step
}) => {
  const [viewMode, setViewMode] = useState<'preview' | 'logs' | 'controls'>('preview');
  const [simulatedSyncCount, setSimulatedSyncCount] = useState(18240);
  const [isSyncing, setIsSyncing] = useState(false);

  // Diagnostics Toggles
  const [toggles, setToggles] = useState({
    autoReminders: true,
    fhirFastSync: true,
    hipaaAudit: true
  });

  const handleSimulateSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setTimeout(() => {
      setSimulatedSyncCount(prev => prev + 1);
      setIsSyncing(false);
    }, 700);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl select-none">
      {/* Developer Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-900/95 border-b border-neutral-800/90 text-xs">
        {/* Left: Window Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setViewMode('preview')}
            title="Reset to Preview"
            className="w-2.5 h-2.5 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
          />
          <button
            onClick={() => setViewMode('logs')}
            title="View Telemetry"
            className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
          />
          <button
            onClick={() => setViewMode('controls')}
            title="View Diagnostics"
            className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
          />
          <span className="ml-2 font-mono text-[10px] text-neutral-400 hidden sm:inline-block">
            {step.title.toLowerCase().replace(/\s+/g, '-')}.module
          </span>
        </div>

        {/* Center: View Switcher */}
        <div className="flex items-center gap-1 bg-neutral-950/80 p-0.5 rounded-lg border border-neutral-800">
          <button
            onClick={() => setViewMode('preview')}
            className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
              viewMode === 'preview'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">Preview</span>
          </button>
          <button
            onClick={() => setViewMode('logs')}
            className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
              viewMode === 'logs'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span className="hidden sm:inline">Telemetry</span>
          </button>
          <button
            onClick={() => setViewMode('controls')}
            className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
              viewMode === 'controls'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span className="hidden sm:inline">Diagnostics</span>
          </button>
        </div>

        {/* Right: Live Connection Indicator */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider font-semibold">
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Main Stage (Stable, no tilt, no scanning line, no stars) */}
      <div className="relative min-h-[260px] sm:min-h-[290px] p-3 sm:p-4 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950 flex items-center justify-center overflow-hidden">
        {/* Subtle Tech Dot Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 0.75px, transparent 0.75px)',
            backgroundSize: '16px 16px'
          }}
        />

        <AnimatePresence mode="wait">
          {/* VIEW 1: CLEAN GUI PREVIEW */}
          {viewMode === 'preview' && (
            <motion.div
              key={`preview-${stepIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative w-full flex items-center justify-center"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-auto max-h-[230px] sm:max-h-[260px] object-contain rounded-lg border border-neutral-800/80 shadow-md"
              />
            </motion.div>
          )}

          {/* VIEW 2: LIVE TELEMETRY / TERMINAL */}
          {viewMode === 'logs' && (
            <motion.div
              key="logs"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg p-3 rounded-xl bg-neutral-950/90 border border-neutral-800 font-mono text-[11px] text-neutral-300 shadow-inner space-y-2 z-10"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800/80 text-[10px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  EHR YOUR WAY Cloud Cluster (v4.12.8)
                </span>
                <span className="text-emerald-400">STATUS: HEALTHY</span>
              </div>

              <div className="space-y-1 text-[10px] sm:text-[11px]">
                <div className="text-neutral-400">
                  <span className="text-emerald-400 font-bold">$</span> query --module=&quot;{step.title}&quot; --region=us-east
                </div>
                <div className="text-neutral-400 pl-2">
                  &#8250; Active Sync Nodes:{' '}
                  <span className="text-white font-semibold">18,240 clinics</span>
                </div>
                <div className="text-neutral-400 pl-2">
                  &#8250; Latency to Core Gateway:{' '}
                  <span className="text-emerald-400 font-semibold">14.2ms (Zero Packet Loss)</span>
                </div>
                <div className="text-neutral-400 pl-2">
                  &#8250; Cryptographic Protocol:{' '}
                  <span className="text-cyan-400 font-semibold">TLS 1.3 / AES-256-GCM</span>
                </div>
                <div className="text-neutral-400 pl-2">
                  &#8250; Real-Time Records Processed:{' '}
                  <span className="text-white font-bold">{simulatedSyncCount.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-neutral-800/80">
                <button
                  onClick={handleSimulateSync}
                  disabled={isSyncing}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-[11px] font-semibold transition-all shadow-sm active:scale-95 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Synchronizing Node...' : 'Simulate Live Ping'}</span>
                </button>
                <span className="font-mono text-[9px] text-neutral-400">
                  SHA: a7f8c92e
                </span>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: LIVE DIAGNOSTICS & TOGGLES */}
          {viewMode === 'controls' && (
            <motion.div
              key="controls"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-md p-3 sm:p-4 rounded-xl bg-neutral-950/90 border border-neutral-800 text-neutral-200 shadow-inner space-y-3 z-10"
            >
              <div className="flex items-center justify-between pb-1 border-b border-neutral-800 text-xs">
                <span className="font-semibold text-white">Diagnostic Controls</span>
                <span className="font-mono text-[10px] text-emerald-400">3 OF 3 ACTIVE</span>
              </div>

              {/* Toggle 1 */}
              <div className="flex items-center justify-between py-1 border-b border-neutral-900">
                <div>
                  <div className="text-[11px] font-medium text-white">Automated SMS/Email Reminders</div>
                  <div className="text-[10px] text-neutral-400">Decreases patient no-show rates by 68%</div>
                </div>
                <button
                  onClick={() => setToggles(p => ({ ...p, autoReminders: !p.autoReminders }))}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ${
                    toggles.autoReminders ? 'bg-emerald-500' : 'bg-neutral-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      toggles.autoReminders ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle 2 */}
              <div className="flex items-center justify-between py-1 border-b border-neutral-900">
                <div>
                  <div className="text-[11px] font-medium text-white">HL7 / FHIR Fast-Sync Engine</div>
                  <div className="text-[10px] text-neutral-400">Live bi-directional telemetry with labs</div>
                </div>
                <button
                  onClick={() => setToggles(p => ({ ...p, fhirFastSync: !p.fhirFastSync }))}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ${
                    toggles.fhirFastSync ? 'bg-emerald-500' : 'bg-neutral-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      toggles.fhirFastSync ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle 3 */}
              <div className="flex items-center justify-between py-1">
                <div>
                  <div className="text-[11px] font-medium text-white">Zero-Trust HIPAA Audit Trail</div>
                  <div className="text-[10px] text-neutral-400">Real-time immutable ledger logs</div>
                </div>
                <button
                  onClick={() => setToggles(p => ({ ...p, hipaaAudit: !p.hipaaAudit }))}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ${
                    toggles.hipaaAudit ? 'bg-emerald-500' : 'bg-neutral-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      toggles.hipaaAudit ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom HUD Status Bar */}
      <div className="px-3.5 py-2 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono">
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="text-emerald-400 font-bold">&#10003;</span>
          <span className="hidden sm:inline">Module:</span>
          <span className="text-neutral-200 font-semibold">{step.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-neutral-800 text-emerald-400 border border-neutral-700 font-semibold">
            {stepIndex === 0 && 'HIPAA Verified'}
            {stepIndex === 1 && 'FHIR Sync Active'}
            {stepIndex === 2 && 'Zero Conflict'}
          </span>
        </div>
      </div>
    </div>
  );
};
