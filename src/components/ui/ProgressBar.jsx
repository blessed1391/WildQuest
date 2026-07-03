import React from "react";
import { useApp } from "../../context/AppContext";

export default function ProgressBar({ value, color, height = 8, bg }) {
  const { T, ACCENT: A } = useApp();
  const c = color || A.moss;
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height, background: bg || T.border }}>
      <div className="h-full rounded-full" style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: `linear-gradient(90deg, ${c}, ${c}CC)`, transition: "width 0.7s cubic-bezier(.22,1,.36,1)" }} />
    </div>
  );
}
