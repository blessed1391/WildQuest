import React from "react";

export default function Pill({ children, style = {}, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${className}`} style={style}>
      {children}
    </span>
  );
}
