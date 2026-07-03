import React from "react";
import { Settings, Coins, Flame, Footprints, Leaf, Check, Award, Crown, ChevronRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { GlassCard, Pill, SectionTitle, ProgressBar } from "../components/ui";
import { USER, SPECIES, BADGE_IDS, ACHIEVEMENT_IDS } from "../data/mockData";

/* ============================================================
   PROFILE SCREEN
   ============================================================ */
export default function ProfileScreen({ goSettings }) {
  const { T, ACCENT: A, t, units, xp, coins } = useApp();
  const distance = units === "km" ? `${USER.distanceKm} km` : `${(USER.distanceKm * 0.621371).toFixed(1)} mi`;
  const speciesFound = Object.values(SPECIES).flat().length;

  return (
    <div className="px-5 pb-4 wq-anim-fadeIn h-full overflow-y-auto wq-scroll">
      <div className="flex items-center justify-between pt-1 pb-5">
        <div className="wq-display text-[22px] font-extrabold" style={{ color: T.textPrimary }}>{t("ui.profile")}</div>
        <button onClick={goSettings} className="wq-press w-9 h-9 rounded-full flex items-center justify-center" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><Settings size={16} color={T.textSecondary} /></button>
      </div>

      <GlassCard strong className="p-5 mb-4 text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(227,168,87,0.25), transparent 70%)" }} />
        <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center relative" style={{ background: USER.avatarBg, boxShadow: "0 8px 24px rgba(95,163,122,0.4)" }}>
          <span className="wq-display text-[24px] font-extrabold text-white">AR</span>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold wq-display" style={{ background: A.amber, color: "#1A1206", border: `3px solid ${T.bg}` }}>{USER.level}</div>
        </div>
        <div className="wq-display text-[18px] font-extrabold" style={{ color: T.textPrimary }}>{USER.name}</div>
        <div className="text-[12.5px] mb-3" style={{ color: T.textSecondary }}>{t(`titles.${USER.levelTier}`)} · Lv {USER.level}</div>
        <div className="max-w-[220px] mx-auto mb-1"><ProgressBar value={(xp / USER.xpToNext) * 100} color={A.amber} /></div>
        <div className="text-[11px]" style={{ color: T.textTertiary }}>{xp} / {USER.xpToNext} {t("ui.xpToNext", t(`titles.${USER.levelTier + 1}`))}</div>
      </GlassCard>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <GlassCard className="p-4 flex items-center gap-3"><Coins size={20} color={A.amber} /><div><div className="wq-display text-[16px] font-extrabold" style={{ color: T.textPrimary }}>{coins.toLocaleString()}</div><div className="text-[10.5px]" style={{ color: T.textTertiary }}>{t("ui.coins")}</div></div></GlassCard>
        <GlassCard className="p-4 flex items-center gap-3"><Flame size={20} color="#E8763F" /><div><div className="wq-display text-[16px] font-extrabold" style={{ color: T.textPrimary }}>{USER.streak}</div><div className="text-[10.5px]" style={{ color: T.textTertiary }}>{t("ui.streak")}</div></div></GlassCard>
        <GlassCard className="p-4 flex items-center gap-3"><Footprints size={20} color={A.moss} /><div><div className="wq-display text-[16px] font-extrabold" style={{ color: T.textPrimary }}>{distance}</div><div className="text-[10.5px]" style={{ color: T.textTertiary }}>{t("ui.walked")}</div></div></GlassCard>
        <GlassCard className="p-4 flex items-center gap-3"><Leaf size={20} color={A.sky} /><div><div className="wq-display text-[16px] font-extrabold" style={{ color: T.textPrimary }}>{speciesFound}</div><div className="text-[10.5px]" style={{ color: T.textTertiary }}>{t("ui.speciesFound")}</div></div></GlassCard>
      </div>

      <SectionTitle>{t("ui.badges")}</SectionTitle>
      <div className="flex gap-3 overflow-x-auto wq-scroll pb-1 mb-5 -mx-5 px-5">
        {BADGE_IDS.map((b) => (
          <GlassCard key={b.id} className="p-3.5 shrink-0 flex flex-col items-center gap-1.5" style={{ width: 84 }}>
            <div className="text-2xl">{b.icon}</div>
            <div className="text-[9.5px] text-center leading-tight" style={{ color: T.textSecondary }}>{t(`badges.${b.id}`)}</div>
          </GlassCard>
        ))}
      </div>

      <SectionTitle>{t("ui.achievements")}</SectionTitle>
      <div className="space-y-2.5 mb-5">
        {ACHIEVEMENT_IDS.map((a) => (
          <GlassCard key={a.id} className="p-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: a.done ? A.mossSoft : T.bgCard }}>
              {a.done ? <Check size={15} color={A.moss} /> : <Award size={15} color={T.textTertiary} />}
            </div>
            <div className="flex-1">
              <div className="text-[12.5px] font-semibold mb-1" style={{ color: a.done ? T.textPrimary : T.textSecondary }}>{t(`achievements.${a.id}`)}</div>
              {!a.done && <ProgressBar value={a.progress * 100} color={T.textTertiary} height={4} />}
            </div>
            {a.done && <Pill style={{ background: A.mossSoft, color: A.moss }}>{t("ui.done")}</Pill>}
          </GlassCard>
        ))}
      </div>

      <SectionTitle>{t("ui.friends")}</SectionTitle>
      <GlassCard className="p-4 flex items-center justify-between mb-4">
        <div className="flex items-center -space-x-2.5">
          {["#5FA37A", "#5FA8C7", "#9B7EDE", "#E3A857"].map((c, i) => (<div key={i} className="w-8 h-8 rounded-full border-2" style={{ background: c, borderColor: T.bg }} />))}
        </div>
        <span className="text-[12px] font-semibold" style={{ color: A.moss }}>{t("ui.friendsCount", 12)}</span>
      </GlassCard>

      <GlassCard className="p-4 mb-3 flex items-center justify-between wq-press cursor-pointer" style={{ background: "linear-gradient(120deg, rgba(227,168,87,0.14), rgba(217,122,94,0.08))" }}>
        <div className="flex items-center gap-3">
          <Crown size={18} color={A.amber} />
          <div><div className="text-[13px] font-bold" style={{ color: T.textPrimary }}>{t("ui.goPremium")}</div><div className="text-[11px]" style={{ color: T.textSecondary }}>{t("ui.premiumSub")}</div></div>
        </div>
        <ChevronRight size={16} color={T.textTertiary} />
      </GlassCard>
    </div>
  );
}
