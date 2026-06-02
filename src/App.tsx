import { useEffect, useState } from "react";
import { StarField, ShootingStars, Fireflies } from "./components/StarField";
import {
  Moon,
  Constellation,
  Clouds,
  Mountains,
  Trees,
  Lake,
  BenchAndBoy,
  Grass,
} from "./components/Scene";

type Wish = {
  id: number;
  x: number;
  y: number;
};

const QUOTES = [
  "We are all in the gutter, but some of us are looking at the stars. — Wilde",
  "For my part, I know nothing with any certainty, but the sight of the stars makes me dream. — Van Gogh",
  "When it is dark enough, you can see the stars. — Emerson",
  "The stars are the land-marks of the universe. — Frederick William Faber",
  "There are no seven wonders of the world in the eyes of a child. There are seven million. — Walt Streightiff",
];

export default function App() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, "0");
      const mm = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setQuoteIdx((i) => (i + 1) % QUOTES.length),
      9000
    );
    return () => clearInterval(id);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    const id = Date.now() + Math.random();
    const x = e.clientX;
    const y = e.clientY;
    setWishes((w) => [...w, { id, x, y }]);
    setWishCount((c) => c + 1);
    setTimeout(() => {
      setWishes((w) => w.filter((it) => it.id !== id));
    }, 4000);
  };

  return (
    <div
      onClick={handleClick}
      className="relative h-screen w-screen overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "linear-gradient(180deg, #02030a 0%, #050818 35%, #0a0a26 60%, #14082e 80%, #1a0a2e 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(88, 28, 135, 0.35) 0%, rgba(30, 27, 75, 0.15) 35%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(253, 230, 138, 0.08) 0%, transparent 25%)",
        }}
      />

      <StarField count={360} />
      <ShootingStars />
      <Constellation />
      <Clouds />
      <Moon />

      <Mountains />
      <Trees />
      <Lake />

      <Grass />
      <BenchAndBoy />
      <Fireflies count={18} />

      {wishes.map((w) => (
        <span
          key={w.id}
          className="pointer-events-none absolute"
          style={{ left: w.x, top: w.y, transform: "translate(-50%, -50%)" }}
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_3px_rgba(186,230,253,0.9)]" />
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-white/80"
            style={{ animation: "fadeUp 3s ease-out forwards", whiteSpace: "nowrap" }}
          >
            wish
          </span>
        </span>
      ))}

      <div className="fade-up absolute left-6 top-6 z-10" style={{ ["--delay" as any]: "0.4s" }}>
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-2xl font-light tracking-widest">{time}</span>
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/40">
          A quiet place · 23.5° N
        </div>
      </div>

      <div className="fade-up absolute right-6 top-6 z-20" style={{ ["--delay" as any]: "0.6s" }}>
        <button
          onClick={(e) => { e.stopPropagation(); setShowInfo((s) => !s); }}
          className="btn-ghost rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80"
        >
          {showInfo ? "Close" : "About"}
        </button>
      </div>

      {showInfo && (
        <div
          className="fade-up absolute right-6 top-20 z-20 max-w-xs rounded-2xl p-5 text-sm text-white/80"
          style={{
            ["--delay" as any]: "0s",
            background: "rgba(8, 10, 30, 0.55)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
          } as React.CSSProperties}
        >
          <h3 className="mb-2 text-base font-medium text-white">Under the Stars</h3>
          <p className="mb-2 leading-relaxed text-white/70">
            A small scene made of light and shadow — a boy on a bench, a sky
            full of stars, and the quiet hum of a night that asks for nothing.
          </p>
          <p className="text-xs text-white/50">
            Click anywhere to make a wish. Wishes made tonight:{" "}
            <span className="font-medium text-amber-200/80">{wishCount}</span>
          </p>
        </div>
      )}

      <div className="fade-up absolute bottom-8 left-6 z-10 max-w-md" style={{ ["--delay" as any]: "1.1s" }}>
        <h1 className="mb-2 text-2xl font-light tracking-wide text-white/90 sm:text-3xl">
          Under the Stars
        </h1>
        <p
          key={quoteIdx}
          className="text-sm italic leading-relaxed text-white/60 sm:text-base"
          style={{ animation: "fadeUp 1.4s ease-out forwards" }}
        >
          "{QUOTES[quoteIdx]}"
        </p>
        <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/40">
          <span className="inline-block h-px w-6 bg-white/30" />
          <span>Click anywhere · make a wish</span>
        </div>
      </div>

      <div className="fade-up absolute bottom-8 right-6 z-10" style={{ ["--delay" as any]: "1.3s" }}>
        <div className="flex items-center gap-1.5 text-white/50">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-200/80 shadow-[0_0_6px_rgba(253,230,138,0.8)]" />
          <span className="text-[11px] uppercase tracking-[0.25em]">
            Wishes · {wishCount.toString().padStart(3, "0")}
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
