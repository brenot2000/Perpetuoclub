import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

function getTargetDate() {
  const target = new Date();
  target.setHours(target.getHours() + 48);
  return target;
}

const TARGET = getTargetDate();

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function StickyBar() {
  const [timeLeft, setTimeLeft] = useState({ h: 47, m: 59, s: 59 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ h: 0, m: 0, s: 0 });
        return;
      }
      const totalSec = Math.floor(diff / 1000);
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      setTimeLeft({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-brand-orange text-white text-center py-2 px-4">
      <div className="flex items-center justify-center gap-2 text-sm font-bold">
        <Flame className="w-4 h-4 animate-bounce" />
        <span className="hidden sm:inline">OFERTA DO 1º LOTE ENCERRA EM:</span>
        <span className="sm:hidden">ENCERRA EM:</span>
        <span className="font-mono bg-black/20 rounded px-2 py-0.5 text-base tracking-widest">
          {pad(timeLeft.h)}:{pad(timeLeft.m)}:{pad(timeLeft.s)}
        </span>
        <Flame className="w-4 h-4 animate-bounce" />
      </div>
    </div>
  );
}
