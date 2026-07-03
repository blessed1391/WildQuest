import React from "react";
import { useApp } from "../../context/AppContext";

export default function GlassCard({ children, className = "", strong = false, style = {}, onClick }) {
  const { T } = useApp();
  return (
    <div
      onClick={onClick}
      className={`${strong ? "wq-blur-strong" : "wq-blur"} rounded-3xl ${className}`}
      style={{ background: strong ? T.bgCardStrong : T.bgCard, border: `1px solid ${strong ? T.borderStrong : T.border}`, ...style }}
    >
      {children}
    </div>
  );
}
