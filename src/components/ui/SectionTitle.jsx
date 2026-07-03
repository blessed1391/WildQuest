import React from "react";
import { useApp } from "../../context/AppContext";

export default function SectionTitle({ children, action }) {
  const { T } = useApp();
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="wq-display text-[17px] font-bold" style={{ color: T.textPrimary }}>{children}</h2>
      {action}
    </div>
  );
}
