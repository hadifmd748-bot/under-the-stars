import { useMemo } from "react";

type Star = { id: number; top: string; left: string; size: number; dur: string; delay: string; baseOpacity: number; baseScale: number; color: string };
type ShootingStar = { id: number; top: string; left: string; delay: string; duration: string };
type Firefly = { id: number; top: string; left: string; dur: string; delay: string; dx: string; dy: string };

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const STAR_COLORS = ["#ffffff", "#e0f2fe", "#fde68a", "#fca5a5", "#bfdbfe", "#ddd6fe", "#fef3c7"];

export function StarField({ count = 320 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(42);
    return Array.from({ length: count }, (_, i) => {
      const size = 0.6 + rand() * 1.8;
      const dur = 2 + rand() * 5;
      const delay = rand() * 6;
      const opacity = 0.3 + rand() * 0.7;
      const scale = 0.6 + rand() * 0.8;
      const color = STAR_COLORS[Math.floor(rand() * STAR_COLORS.length)];
      return { id: i, top: `${rand() * 78}%`, left: `${rand() * 100}%`, size, dur: `${dur.toFixed(2)}s`, delay: `${delay.toFixed(2)}s`, baseOpacity: opacity, baseScale: scale, color };
    });
  }, [count]);

  const bigStars = useMemo<Star[]>(() => {
    const rand = mulberry32(7);
    return Array.from({ length: 12 }, (_, i) => {
      const dur = 3 + rand() * 4;
      const delay = rand() * 5;
      const opacity = 0.6 + rand() * 0.4;
      const scale = 0.8 + rand() * 0.4;
      return { id: i, top: `${5 + rand() * 60}%`, left: `${5 + rand() * 90}%`, size: 0, dur: `${dur.toFixed(2)}s`, delay: `${delay.toFixed(2)}s`, baseOpacity: opacity, baseScale: scale, color: "#ffffff" };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((s) => (
        <span key={s.id} className="star" style={{ top: s.top, left: s.left, width: `${s.size}px`, height: `${s.size}px`, background: `radial-gradient(circle, ${s.color} 0%, ${s.color} 60%, rgba(255,255,255,0) 100%)`, boxShadow: `0 0 ${s.size * 3}px ${s.color}aa, 0 0 ${s.size * 6}px ${s.color}55`, ["--dur" as any]: s.dur, ["--delay" as any]: s.delay, ["--base-opacity" as any]: s.baseOpacity, ["--base-scale" as any]: s.baseScale } as React.CSSProperties} />
      ))}
      {bigStars.map((s) => (
        <span key={`big-${s.id}`} className="star-big" style={{ top: s.top, left: s.left, ["--dur" as any]: s.dur, ["--delay" as any]: s.delay, ["--base-opacity" as any]: s.baseOpacity, ["--base-scale" as any]: s.baseScale } as React.CSSProperties} />
      ))}
    </div>
  );
}

export function ShootingStars() {
  const items = useMemo<ShootingStar[]>(() => {
    const rand = mulberry32(99);
    return Array.from({ length: 3 }, (_, i) => ({ id: i, top: `${5 + rand() * 35}%`, left: `${40 + rand() * 55}%`, delay: `${i * 4 + rand() * 3}s`, duration: `${4 + rand() * 3}s` }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((it) => (
        <span key={it.id} className="shooting-star" style={{ top: it.top, left: it.left, ["--delay" as any]: it.delay, animationDuration: it.duration } as React.CSSProperties} />
      ))}
    </div>
  );
}

export function Fireflies({ count = 14 }: { count?: number }) {
  const items = useMemo<Firefly[]>(() => {
    const rand = mulberry32(13);
    return Array.from({ length: count }, (_, i) => ({ id: i, top: `${60 + rand() * 35}%`, left: `${rand() * 100}%`, dur: `${6 + rand() * 6}s`, delay: `${rand() * 8}s`, dx: `${-40 + rand() * 80}px`, dy: `${-30 + rand() * 60}px` }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((f) => (
        <span key={f.id} className="firefly" style={{ top: f.top, left: f.left, ["--dur" as any]: f.dur, ["--delay" as any]: f.delay, ["--dx" as any]: f.dx, ["--dy" as any]: f.dy } as React.CSSProperties} />
      ))}
    </div>
  );
}
