import React from "react";
import { useApp } from "../../context/AppContext";

export default function Switch({ checked, onChange, color }) {
  const { T, ACCENT: A } = useApp();
  const on = color || A.moss;
  return (
    <button
      onClick={() => onChange(!checked)}
      className="wq-switch wq-press relative rounded-full shrink-0"
      style={{ width: 44, height: 26, background: checked ? on : T.border }}
    >
      <div className="wq-switch-dot absolute top-[3px] rounded-full bg-white" style={{ width: 20, height: 20, left: checked ? 21 : 3, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }} />
    </button>
  );
}
