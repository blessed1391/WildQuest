import React from "react";
import { Home, Compass, Camera, Backpack, User } from "lucide-react";
import { useApp } from "../../context/AppContext";

/* ============================================================
   TAB BAR
   ============================================================ */
export default function TabBar({ active, setActive }) {
  const { T, ACCENT: A } = useApp();
  const tabs = [
    { key: "home", icon: Home }, { key: "explore", icon: Compass }, { key: "scan", icon: Camera },
    { key: "collection", icon: Backpack }, { key: "profile", icon: User },
  ];
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center z-40 px-5">
      <div className="wq-blur-strong flex items-center justify-between px-2 py-2 rounded-[28px] w-full" style={{ background: T.bgCardStrong, border: `1px solid ${T.borderStrong}`, boxShadow: "0 12px 40px rgba(0,0,0,0.35)" }}>
        {tabs.map((tb) => {
          const isActive = active === tb.key;
          if (tb.key === "scan") {
            return (
              <button key={tb.key} onClick={() => setActive(tb.key)} className="wq-press flex items-center justify-center rounded-full -mt-6 shrink-0" style={{ width: 56, height: 56, background: `linear-gradient(135deg, ${A.amber}, #C97F35)`, boxShadow: `0 8px 20px rgba(227,168,87,0.45)`, border: `3px solid ${T.bg}` }}>
                <Camera size={22} color="#1A1206" strokeWidth={2.4} />
              </button>
            );
          }
          return (
            <button key={tb.key} onClick={() => setActive(tb.key)} className="wq-press flex flex-col items-center justify-center gap-1 rounded-2xl px-3.5 py-1.5" style={{ background: isActive ? T.bgCard : "transparent" }}>
              <tb.icon size={20} strokeWidth={isActive ? 2.5 : 2} color={isActive ? A.amber : T.textTertiary} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
