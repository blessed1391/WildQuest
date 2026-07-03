import React from "react";
import { useApp } from "../../context/AppContext";

export default function HomeIndicator() {
  const { T } = useApp();
  return (
    <div className="flex justify-center py-2 shrink-0">
      <div className="w-32 h-[5px] rounded-full" style={{ background: T.homeIndicator }} />
    </div>
  );
}
