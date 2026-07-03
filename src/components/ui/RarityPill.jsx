import React from "react";
import { Sparkles } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { RARITY_COLOR } from "../../theme/tokens";
import Pill from "./Pill";

export default function RarityPill({ rarity }) {
  const { t } = useApp();
  const r = RARITY_COLOR[rarity] || RARITY_COLOR.Common;
  return (
    <Pill style={{ background: r.bg, color: r.color }}>
      <Sparkles size={11} /> {t(`rarity.${rarity}`)}
    </Pill>
  );
}
