import React, { useState } from "react";
import { ChevronLeft, Lock } from "lucide-react";
import { useApp } from "../context/AppContext";
import { GlassCard, Pill, RarityPill, ProgressBar } from "../components/ui";
import { RARITY_COLOR } from "../theme/tokens";
import { SPECIES, CATEGORY_META } from "../data/mockData";

/* ============================================================
   COLLECTION SCREEN
   ============================================================ */
export default function CollectionScreen() {
  const { T, t, discoveries } = useApp();
  const [cat, setCat] = useState(null);
  const [detail, setDetail] = useState(null);

  const countsFor = (catKey) => {
    const items = SPECIES[catKey];
    const found = items.filter((it) => discoveries[catKey]?.[it.id]?.found).length;
    return { found, total: items.length };
  };

  if (cat) {
    const meta = CATEGORY_META[cat];
    const Icon = typeof meta.icon === "string" ? null : meta.icon;
    const { found, total } = countsFor(cat);
    return (
      <div className="px-5 pb-4 wq-anim-fadeIn h-full overflow-y-auto wq-scroll">
        <div className="flex items-center gap-3 pt-1 pb-4">
          <button onClick={() => setCat(null)} className="wq-press w-9 h-9 rounded-full flex items-center justify-center" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><ChevronLeft size={17} color={T.textSecondary} /></button>
          <div>
            <div className="wq-display text-[18px] font-extrabold" style={{ color: T.textPrimary }}>{t(`categories.${cat}`)}</div>
            <div className="text-[11.5px]" style={{ color: T.textSecondary }}>{found} / {total} {t("ui.discovered")}</div>
          </div>
        </div>
        <GlassCard className="p-3.5 mb-4"><ProgressBar value={(found / total) * 100} color={meta.color} /></GlassCard>
        <div className="grid grid-cols-2 gap-3">
          {SPECIES[cat].map((it) => {
            const d = discoveries[cat]?.[it.id];
            return (
              <GlassCard key={it.id} onClick={() => d?.found && setDetail({ cat, item: it, date: d.date })} className="p-3.5 relative overflow-hidden wq-anim-fadeUp wq-press cursor-pointer">
                {!d?.found && <div className="absolute top-2.5 right-2.5"><Lock size={12} color={T.textTertiary} /></div>}
                <div className="text-3xl mb-2" style={{ opacity: d?.found ? 1 : 0.18, filter: d?.found ? "none" : "grayscale(1)" }}>{d?.found ? it.emoji : "❔"}</div>
                <div className="text-[12.5px] font-bold mb-1" style={{ color: d?.found ? T.textPrimary : T.textTertiary }}>{d?.found ? t(`species.${cat}.${it.id}`) : t("ui.unknown")}</div>
                <RarityPill rarity={it.rarity} />
                {d?.found && <div className="text-[10px] mt-2" style={{ color: T.textTertiary }}>{t("ui.foundOn", d.date)}</div>}
              </GlassCard>
            );
          })}
        </div>

        {detail && (
          <div className="absolute inset-0 z-50 flex items-end wq-anim-fadeIn" style={{ background: T.scrimBg }} onClick={() => setDetail(null)}>
            <div onClick={(e) => e.stopPropagation()} className="w-full wq-anim-slideUp">
              <GlassCard strong className="p-5 rounded-b-none text-center relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 0%, ${RARITY_COLOR[detail.item.rarity].color}22, transparent 70%)` }} />
                <div className="relative">
                  <div className="text-6xl mb-2">{detail.item.emoji}</div>
                  <RarityPill rarity={detail.item.rarity} />
                  <div className="wq-display text-[20px] font-extrabold mt-2" style={{ color: T.textPrimary }}>{t(`species.${cat}.${detail.item.id}`)}</div>
                  <div className="text-[12px] mb-4" style={{ color: T.textTertiary }}>{t("ui.foundOn", detail.date)}</div>
                  <button onClick={() => setDetail(null)} className="wq-press w-full py-3 rounded-2xl text-[13.5px] font-bold" style={{ background: T.bgCard, color: T.textPrimary }}>OK</button>
                </div>
              </GlassCard>
            </div>
          </div>
        )}
      </div>
    );
  }

  const overall = Object.keys(SPECIES).reduce((acc, k) => { const c = countsFor(k); acc.found += c.found; acc.total += c.total; return acc; }, { found: 0, total: 0 });

  return (
    <div className="px-5 pb-4 wq-anim-fadeIn h-full overflow-y-auto wq-scroll">
      <div className="flex items-center justify-between pt-1 pb-4">
        <div className="wq-display text-[22px] font-extrabold" style={{ color: T.textPrimary }}>{t("ui.collection")}</div>
        <Pill style={{ background: "rgba(95,163,122,0.16)", color: "#5FA37A" }}>{overall.found}/{overall.total}</Pill>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {Object.keys(SPECIES).map((key, i) => {
          const meta = CATEGORY_META[key];
          const Icon = typeof meta.icon === "string" ? null : meta.icon;
          const { found, total } = countsFor(key);
          const pct = Math.round((found / total) * 100);
          return (
            <GlassCard key={key} onClick={() => setCat(key)} className="p-4 wq-press cursor-pointer wq-anim-fadeUp" style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${meta.color}22` }}>
                  {Icon ? <Icon size={18} color={meta.color} /> : <span className="text-lg">{meta.icon}</span>}
                </div>
                <span className="text-[11px] font-bold" style={{ color: meta.color }}>{pct}%</span>
              </div>
              <div className="text-[13.5px] font-bold mb-2" style={{ color: T.textPrimary }}>{t(`categories.${key}`)}</div>
              <ProgressBar value={pct} color={meta.color} height={6} />
              <div className="text-[10.5px] mt-1.5" style={{ color: T.textTertiary }}>{found} {t("ui.of")} {total}</div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
