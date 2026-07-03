import React, { useState, useEffect } from "react";
import { Wind } from "lucide-react";
import { useApp } from "../../context/AppContext";

/* ============================================================
   STATUS BAR + DYNAMIC ISLAND
   ============================================================ */
export default function StatusBar({ toast }) {
  const { T } = useApp();
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  const hh = time.getHours() % 12 || 12;
  const mm = String(time.getMinutes()).padStart(2, "0");

  return (
    <div className="relative pt-3 px-6 pb-1 flex items-center justify-between shrink-0 select-none z-30">
      <span className="wq-display text-[15px] font-bold" style={{ color: T.textPrimary }}>{hh}:{mm}</span>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-2.5 flex items-center justify-center overflow-hidden transition-all duration-500"
        style={{ background: "#000", height: 32, width: toast ? 220 : 108, borderRadius: 20, boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
      >
        {toast && (
          <div className="wq-anim-fadeIn flex items-center gap-2 px-3 whitespace-nowrap">
            <span className="text-[13px]">{toast.emoji}</span>
            <span className="text-[11px] font-semibold text-white">{toast.text}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1.5">
        <Wind size={13} style={{ color: T.textSecondary }} strokeWidth={2.5} />
        <div className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h, i) => (<div key={i} style={{ width: 3, height: h, borderRadius: 1, background: T.textPrimary }} />))}
        </div>
        <div className="w-6 h-3 rounded-[4px] border relative ml-0.5" style={{ borderColor: T.textSecondary }}>
          <div className="absolute inset-[1.5px] rounded-[2px]" style={{ background: T.textPrimary, width: "70%" }} />
        </div>
      </div>
    </div>
  );
}
