export function Moon() {
  return (
    <div className="absolute right-[8%] top-[10%]">
      <div className="moon-glow absolute -inset-12 rounded-full bg-amber-50/20 blur-3xl" />
      <svg width="120" height="120" viewBox="0 0 120 120" className="relative">
        <defs>
          <radialGradient id="moonBody" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fffbe6" />
            <stop offset="60%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </radialGradient>
          <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(253, 230, 138, 0.45)" />
            <stop offset="100%" stopColor="rgba(253, 230, 138, 0)" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#moonHalo)" />
        <circle cx="60" cy="60" r="42" fill="url(#moonBody)" />
        <circle cx="48" cy="52" r="4" fill="#e7c98a" opacity="0.5" />
        <circle cx="70" cy="64" r="6" fill="#e7c98a" opacity="0.45" />
        <circle cx="56" cy="74" r="3" fill="#e7c98a" opacity="0.4" />
        <circle cx="78" cy="48" r="2.5" fill="#e7c98a" opacity="0.45" />
        <circle cx="42" cy="68" r="2" fill="#e7c98a" opacity="0.4" />
      </svg>
    </div>
  );
}

export function Constellation() {
  const points = [
    { x: 12, y: 30 }, { x: 22, y: 28 }, { x: 32, y: 32 },
    { x: 42, y: 36 }, { x: 48, y: 28 }, { x: 56, y: 30 }, { x: 60, y: 40 },
  ];
  return (
    <svg className="absolute left-[6%] top-[14%] opacity-80" width="320" height="180" viewBox="0 0 320 180">
      <defs>
        <radialGradient id="starDot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <polyline points={points.map((p) => `${p.x * 4.5},${p.y * 3.6}`).join(" ")} fill="none" stroke="rgba(186, 230, 253, 0.35)" strokeWidth="0.8" strokeDasharray="3 3" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x * 4.5} cy={p.y * 3.6} r="4" fill="url(#starDot)" opacity="0.9" />
          <circle cx={p.x * 4.5} cy={p.y * 3.6} r="1.4" fill="#ffffff" />
        </g>
      ))}
      <text x={70} y={150} fill="rgba(186, 230, 253, 0.45)" fontSize="10" fontStyle="italic" letterSpacing="2">Ursa Minor</text>
    </svg>
  );
}

export function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%]">
      <div className="cloud-drift absolute left-[20%] top-[28%] h-2 w-64 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
      <div className="cloud-drift absolute left-[55%] top-[18%] h-1.5 w-80 rounded-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent blur-md" style={{ animationDelay: "2s" }} />
      <div className="cloud-drift absolute left-[5%] top-[42%] h-1 w-72 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-md" style={{ animationDelay: "4s" }} />
    </div>
  );
}

export function Mountains() {
  return (
    <svg className="absolute bottom-[28%] left-0 right-0 w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" height="220">
      <defs>
        <linearGradient id="mtFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" /><stop offset="100%" stopColor="#0f0a2e" />
        </linearGradient>
        <linearGradient id="mtNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0820" /><stop offset="100%" stopColor="#05030f" />
        </linearGradient>
      </defs>
      <path d="M0,180 L80,120 L140,160 L220,90 L320,150 L420,110 L520,160 L640,80 L760,150 L880,100 L1000,160 L1120,110 L1240,160 L1360,100 L1440,140 L1440,220 L0,220 Z" fill="url(#mtFar)" opacity="0.85" />
      <path d="M0,200 L60,160 L160,200 L260,150 L360,200 L460,170 L560,200 L680,160 L780,200 L880,170 L980,200 L1080,150 L1180,200 L1280,170 L1380,200 L1440,180 L1440,220 L0,220 Z" fill="url(#mtNear)" />
    </svg>
  );
}

export function Trees() {
  return (
    <svg className="absolute bottom-[20%] left-0 right-0 w-full" viewBox="0 0 1440 180" preserveAspectRatio="none" height="180">
      <g fill="#02020a">
        {Array.from({ length: 14 }).map((_, i) => {
          const x = 60 + i * 100 + (i % 2) * 30;
          const h = 60 + ((i * 37) % 60);
          return (
            <g key={i} transform={`translate(${x}, ${170 - h})`}>
              <polygon points={`0,0 -${10 + (i % 3) * 2},${h} ${10 + (i % 3) * 2},${h}`} />
              <polygon points={`0,${h * 0.4} -${8 + (i % 3) * 2},${h} ${8 + (i % 3) * 2},${h}`} opacity="0.85" />
              <rect x="-2" y={h} width="4" height="10" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function Lake() {
  return (
    <svg className="absolute bottom-[10%] left-0 right-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" height="120">
      <defs>
        <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(30, 41, 99, 0.55)" /><stop offset="100%" stopColor="rgba(2, 6, 23, 0.9)" />
        </linearGradient>
      </defs>
      <path d="M0,40 Q360,10 720,30 T1440,25 L1440,120 L0,120 Z" fill="url(#lake)" />
      <g opacity="0.5">
        <ellipse cx="200" cy="55" rx="60" ry="1.5" fill="rgba(186, 230, 253, 0.4)" />
        <ellipse cx="500" cy="65" rx="90" ry="1" fill="rgba(186, 230, 253, 0.3)" />
        <ellipse cx="900" cy="50" rx="70" ry="1.2" fill="rgba(186, 230, 253, 0.35)" />
        <ellipse cx="1200" cy="60" rx="80" ry="1" fill="rgba(186, 230, 253, 0.25)" />
      </g>
    </svg>
  );
}

export function BenchAndBoy() {
  return (
    <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2">
      <svg width="320" height="220" viewBox="0 0 320 220">
        <defs>
          <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#02030a" /><stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="205" rx="120" ry="6" fill="rgba(0,0,0,0.5)" />
        <rect x="60" y="120" width="200" height="8" rx="2" fill="url(#silhouette)" />
        <rect x="60" y="135" width="200" height="6" rx="2" fill="url(#silhouette)" />
        <rect x="50" y="160" width="220" height="10" rx="2" fill="url(#silhouette)" />
        <path d="M70,170 L60,205 L72,205 L82,170 Z" fill="url(#silhouette)" />
        <path d="M250,170 L260,205 L248,205 L238,170 Z" fill="url(#silhouette)" />
        <rect x="60" y="128" width="6" height="34" fill="url(#silhouette)" />
        <rect x="254" y="128" width="6" height="34" fill="url(#silhouette)" />
        <g transform="translate(150, 60)">
          <ellipse cx="20" cy="14" rx="14" ry="16" fill="url(#silhouette)" />
          <path d="M6,10 Q10,-2 20,-2 Q30,-2 34,10 Q32,4 20,4 Q8,4 6,10 Z" fill="url(#silhouette)" />
          <rect x="16" y="28" width="8" height="8" fill="url(#silhouette)" />
          <path d="M0,40 Q-4,50 0,72 L4,95 L36,95 L40,72 Q44,50 40,40 Q32,34 20,34 Q8,34 0,40 Z" fill="url(#silhouette)" />
          <path d="M4,32 Q-2,16 4,8 Q10,2 20,2 Q30,2 36,8 Q42,16 36,32 Q34,18 20,18 Q6,18 4,32 Z" fill="url(#silhouette)" opacity="0.95" />
          <path d="M2,70 Q-6,90 6,108 L22,108 L24,90 Q22,80 14,76 Z" fill="url(#silhouette)" />
          <path d="M36,72 Q44,86 38,104 L30,104 L30,86 Z" fill="url(#silhouette)" />
          <path d="M6,95 L4,140 L24,150 L28,150 L28,108 L14,100 Z" fill="url(#silhouette)" />
          <path d="M28,108 L28,150 L48,150 L52,138 L42,100 Z" fill="url(#silhouette)" />
          <ellipse cx="14" cy="152" rx="12" ry="4" fill="url(#silhouette)" />
          <ellipse cx="48" cy="152" rx="12" ry="4" fill="url(#silhouette)" />
        </g>
        <g transform="translate(40, 150)">
          <rect x="0" y="0" width="22" height="32" rx="4" fill="url(#silhouette)" />
          <rect x="2" y="2" width="18" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
        </g>
        <circle cx="40" cy="180" r="14" fill="rgba(253, 230, 138, 0.25)" />
        <circle cx="40" cy="180" r="6" fill="rgba(253, 224, 71, 0.6)" />
      </svg>
    </div>
  );
}

export function Grass() {
  return (
    <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 160" preserveAspectRatio="none" height="160">
      <defs>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#060616" /><stop offset="100%" stopColor="#02020a" />
        </linearGradient>
      </defs>
      <path d="M0,80 Q360,40 720,60 T1440,50 L1440,160 L0,160 Z" fill="url(#ground)" />
      <g stroke="#0a0a1f" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9">
        {Array.from({ length: 80 }).map((_, i) => {
          const x = i * 18 + (i % 2) * 6;
          const h = 6 + ((i * 13) % 12);
          return <line key={i} x1={x} y1={150} x2={x + 2} y2={150 - h} />;
        })}
      </g>
    </svg>
  );
}
