import React, { useState } from "react";
import {
  ChevronLeft, Share2, MapPin, ShieldAlert, Info, Leaf, Zap, Check, Plus,
  RefreshCw, Cloud, Camera, ScanLine,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { GlassCard, Pill, RarityPill, SectionTitle, ProgressBar } from "../components/ui";
import { RARITY_COLOR } from "../theme/tokens";
import { SCAN_RESULT_META } from "../data/mockData";

/* ============================================================
   SCAN SCREEN
   ============================================================ */
export default function ScanScreen({ onToast }) {
  const { T, ACCENT: A, t, discoveries, markDiscovered, setXp, setCoins } = useApp();
  const [state, setState] = useState("idle");
  const meta = SCAN_RESULT_META;
  const alreadyFound = discoveries[meta.category]?.[meta.speciesId]?.found;
  const [justAdded, setJustAdded] = useState(false);

  const startScan = () => { setJustAdded(false); setState("scanning"); setTimeout(() => setState("result"), 1800); };
  const reset = () => { setState("idle"); setJustAdded(false); };

  const addToCollection = () => {
    const isNew = !alreadyFound;
    markDiscovered(meta.category, meta.speciesId, t("ui.todayLabel"));
    setXp((x) => x + meta.xp);
    setCoins((c) => c + 15);
    setJustAdded(true);
    onToast({ emoji: isNew ? "🌟" : "✅", text: isNew ? t("ui.newDiscovery") : t("ui.xpEarned", meta.xp) });
  };

  if (state === "result") {
    const rar = RARITY_COLOR[meta.rarity];
    const added = alreadyFound || justAdded;
    return (
      <div className="px-5 pb-4 wq-anim-fadeIn h-full overflow-y-auto wq-scroll">
        <div className="flex items-center justify-between pt-1 pb-4">
          <button onClick={reset} className="wq-press w-9 h-9 rounded-full flex items-center justify-center" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><ChevronLeft size={17} color={T.textSecondary} /></button>
          <span className="wq-display text-[15px] font-bold" style={{ color: T.textPrimary }}>{t("ui.scanResult")}</span>
          <button className="wq-press w-9 h-9 rounded-full flex items-center justify-center" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><Share2 size={14} color={T.textSecondary} /></button>
        </div>

        <GlassCard strong className="p-5 mb-4 text-center relative overflow-hidden wq-anim-pop">
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 0%, ${meta.color}22, transparent 70%)` }} />
          <div className="relative">
            <div className="text-6xl mb-2 wq-anim-float">{meta.emoji}</div>
            <RarityPill rarity={meta.rarity} />
            <div className="wq-display text-[22px] font-extrabold mt-2" style={{ color: T.textPrimary }}>{t("scanResult.common")}</div>
            <div className="text-[12.5px] italic mb-3" style={{ color: T.textTertiary }}>{t("scanResult.latin")}</div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex-1 max-w-[140px]"><ProgressBar value={meta.confidence} color={rar.color} height={6} /></div>
              <span className="text-[11.5px] font-semibold" style={{ color: rar.color }}>{meta.confidence}% {t("ui.match")}</span>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <GlassCard className="p-3.5">
            <div className="flex items-center gap-1.5 mb-1"><MapPin size={12} color={A.moss} /><span className="text-[10.5px] font-semibold" style={{ color: T.textTertiary }}>{t("ui.habitat")}</span></div>
            <div className="text-[12px]" style={{ color: T.textPrimary }}>{t("scanResult.habitat")}</div>
          </GlassCard>
          <GlassCard className="p-3.5">
            <div className="flex items-center gap-1.5 mb-1"><ShieldAlert size={12} color={A.clay} /><span className="text-[10.5px] font-semibold" style={{ color: T.textTertiary }}>{t("ui.danger")}</span></div>
            <div className="text-[12px]" style={{ color: T.textPrimary }}>{t("scanResult.danger")}</div>
          </GlassCard>
          <GlassCard className="p-3.5 col-span-2">
            <div className="flex items-center gap-1.5 mb-1"><Info size={12} color={A.sky} /><span className="text-[10.5px] font-semibold" style={{ color: T.textTertiary }}>{t("ui.edibility")}</span></div>
            <div className="text-[12px]" style={{ color: T.textPrimary }}>{t("scanResult.edible")}</div>
          </GlassCard>
        </div>

        <SectionTitle>{t("ui.facts")}</SectionTitle>
        <div className="space-y-2 mb-5">
          {t("scanResult.facts").map((f, i) => (
            <GlassCard key={i} className="p-3 flex items-start gap-2.5">
              <Leaf size={13} color={A.moss} className="mt-0.5 shrink-0" />
              <span className="text-[12.5px] leading-snug" style={{ color: T.textSecondary }}>{f}</span>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-4 flex items-center justify-between mb-4" style={{ background: A.amberSoft }}>
          <div className="flex items-center gap-2"><Zap size={16} color={A.amber} /><span className="text-[13px] font-bold" style={{ color: T.textPrimary }}>{t("ui.reward")}</span></div>
          <span className="wq-display text-[15px] font-extrabold" style={{ color: A.amber }}>+{meta.xp} XP</span>
        </GlassCard>

        <div className="flex gap-3">
          <button onClick={addToCollection} disabled={added} className="wq-press flex-1 wq-display text-[14.5px] font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2" style={{ background: added ? T.bgCard : A.amber, color: added ? T.textSecondary : "#1A1206" }}>
            {added ? (<><Check size={16} /> {t("ui.addedToCollection")}</>) : (<><Plus size={16} /> {t("ui.addToCollection")}</>)}
          </button>
          <button onClick={reset} className="wq-press w-14 rounded-2xl flex items-center justify-center" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}>
            <RefreshCw size={17} color={T.textSecondary} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pb-4 wq-anim-fadeIn h-full flex flex-col">
      <div className="wq-display text-[22px] font-extrabold pt-1 pb-4" style={{ color: T.textPrimary }}>{t("ui.scan")}</div>
      <div className="relative flex-1 rounded-3xl overflow-hidden mb-5" style={{ minHeight: 340 }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#1B2B21 0%, #0D1712 60%, #17251C 100%)" }} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(95,163,122,0.5), transparent 55%), radial-gradient(circle at 75% 70%, rgba(95,168,199,0.35), transparent 50%)" }} />
        {[["top-6", "left-6", "border-t-2", "border-l-2", "rounded-tl-2xl"], ["top-6", "right-6", "border-t-2", "border-r-2", "rounded-tr-2xl"], ["bottom-6", "left-6", "border-b-2", "border-l-2", "rounded-bl-2xl"], ["bottom-6", "right-6", "border-b-2", "border-r-2", "rounded-br-2xl"]].map((c, i) => (
          <div key={i} className={`absolute w-9 h-9 ${c[0]} ${c[1]} ${c[2]} ${c[3]} ${c[4]}`} style={{ borderColor: A.amber }} />
        ))}
        {state === "scanning" && (<div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 wq-scanline" style={{ animation: "wq-pulse 1.1s ease-in-out infinite" }} />)}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {state === "scanning" ? (
            <div className="flex flex-col items-center gap-3 wq-anim-fadeIn">
              <RefreshCw size={30} color={A.amber} className="wq-anim-spin" />
              <span className="text-[13px] font-semibold text-white">{t("ui.analyzing")}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 wq-anim-fadeIn">
              <ScanLine size={34} color="rgba(255,255,255,0.25)" />
              <span className="text-[12.5px]" style={{ color: "rgba(255,255,255,0.5)" }}>{t("ui.pointAt")}</span>
            </div>
          )}
        </div>
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <Pill className="wq-blur" style={{ color: "#fff", background: "rgba(255,255,255,0.12)" }}>{t("ui.scanCategories")}</Pill>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 pb-2">
        <div className="w-11 h-11 rounded-full flex items-center justify-center wq-press" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><Cloud size={17} color={T.textSecondary} /></div>
        <button onClick={startScan} disabled={state === "scanning"} className="wq-press rounded-full flex items-center justify-center relative" style={{ width: 76, height: 76, background: A.amber, boxShadow: "0 10px 30px rgba(227,168,87,0.5)" }}>
          <div className="absolute inset-1 rounded-full border-2" style={{ borderColor: "#1A1206" }} />
          {state === "scanning" ? <RefreshCw size={26} color="#1A1206" className="wq-anim-spin" /> : <Camera size={26} color="#1A1206" strokeWidth={2.2} />}
        </button>
        <div className="w-11 h-11 rounded-full flex items-center justify-center wq-press" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><ScanLine size={17} color={T.textSecondary} /></div>
      </div>
    </div>
  );
}
