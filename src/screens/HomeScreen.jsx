import React, { useState } from "react";
import { Bell, TreePine, Zap, Coins, ChevronRight, Crown, Sun, Flame, Plus, Check, MapPin, Target } from "lucide-react";
import { useApp } from "../context/AppContext";
import { GlassCard, Pill, SectionTitle, ProgressBar, RarityPill } from "../components/ui";
import NotificationsPanel from "../components/layout/NotificationsPanel";
import { USER, QUEST_LIST, NEARBY_DISCOVERIES } from "../data/mockData";

/* ============================================================
   HOME SCREEN
   ============================================================ */
export default function HomeScreen({ goScan, goExplore, goSettings }) {
  const { T, ACCENT: A, t, questProgress, bumpQuest, xp } = useApp();
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div className="px-5 pb-4 wq-anim-fadeIn relative">
      <div className="flex items-center justify-between pt-1 pb-5">
        <div>
          <div className="text-[13px]" style={{ color: T.textSecondary }}>{t("ui.goodMorning")}</div>
          <div className="wq-display text-[22px] font-extrabold" style={{ color: T.textPrimary }}>Alex 🌿</div>
        </div>
        <div className="flex items-center gap-2.5">
          <button onClick={() => setShowNotif(true)} className="wq-press w-9 h-9 rounded-full flex items-center justify-center relative" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}>
            <Bell size={16} color={T.textSecondary} />
            <div className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full" style={{ background: A.clay }} />
          </button>
          <button onClick={goSettings} className="wq-press relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: USER.avatarBg }}>
              <span className="wq-display text-[13px] font-extrabold text-white">AR</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold wq-display" style={{ background: A.amber, color: "#1A1206", border: `2px solid ${T.bg}` }}>{USER.level}</div>
          </button>
        </div>
      </div>

      <GlassCard strong className="relative overflow-hidden p-5 mb-4 wq-topo wq-anim-fadeUp">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${A.mossSoft}, transparent 70%)` }} />
        <div className="relative flex items-center justify-between mb-4">
          <Pill style={{ background: A.mossSoft, color: A.moss }}><Target size={11} /> {t("ui.todaysQuest")}</Pill>
          <span className="text-[11px]" style={{ color: T.textTertiary }}>{t("ui.resets", 14)}</span>
        </div>
        <div className="relative flex items-center gap-3 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: A.mossSoft }}>
            <TreePine size={26} color={A.moss} />
          </div>
          <div>
            <div className="wq-display text-[19px] font-extrabold" style={{ color: T.textPrimary }}>{t("quests.daily.name")}</div>
            <div className="text-[12.5px] mt-0.5" style={{ color: T.textSecondary }}>{t("quests.daily.desc")}</div>
          </div>
        </div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Pill style={{ background: A.amberSoft, color: A.amber }}><Zap size={11} /> +120 XP</Pill>
            <Pill style={{ background: "rgba(227,168,87,0.1)", color: A.amber }}><Coins size={11} /> +25</Pill>
          </div>
          <button onClick={goScan} className="wq-press wq-display text-[13px] font-extrabold px-4 py-2.5 rounded-full flex items-center gap-1.5" style={{ background: A.amber, color: "#1A1206" }}>
            {t("ui.quickStart")} <ChevronRight size={14} strokeWidth={3} />
          </button>
        </div>
      </GlassCard>

      <GlassCard className="p-4 mb-4 wq-anim-fadeUp" style={{ animationDelay: "0.05s" }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Crown size={15} color={A.amber} />
            <span className="text-[13px] font-semibold" style={{ color: T.textPrimary }}>Lv {USER.level} · {t(`titles.${USER.levelTier}`)}</span>
          </div>
          <span className="text-[11.5px]" style={{ color: T.textSecondary }}>{xp} / {USER.xpToNext} XP</span>
        </div>
        <ProgressBar value={(xp / USER.xpToNext) * 100} color={A.amber} />
      </GlassCard>

      <div className="flex gap-3 mb-5 wq-anim-fadeUp" style={{ animationDelay: "0.1s" }}>
        <GlassCard className="p-4 flex-1">
          <div className="flex items-center justify-between mb-2"><Sun size={18} color={A.amber} /><span className="text-[11px]" style={{ color: T.textTertiary }}>Silverpine</span></div>
          <div className="wq-display text-[22px] font-extrabold" style={{ color: T.textPrimary }}>21°</div>
          <div className="text-[11px]" style={{ color: T.textSecondary }}>{t("ui.weatherDesc")}</div>
        </GlassCard>
        <GlassCard className="p-4 flex-1">
          <div className="flex items-center justify-between mb-2"><Flame size={18} color="#E8763F" /><span className="text-[11px]" style={{ color: T.textTertiary }}>{t("ui.streak")}</span></div>
          <div className="wq-display text-[22px] font-extrabold" style={{ color: T.textPrimary }}>{USER.streak} {t("ui.dayStreak")}</div>
          <div className="text-[11px]" style={{ color: T.textSecondary }}>{t("ui.streakSub")}</div>
        </GlassCard>
      </div>

      <GlassCard className="p-4 mb-5 flex items-center gap-3 relative overflow-hidden wq-anim-fadeUp" style={{ animationDelay: "0.15s", background: "linear-gradient(120deg, rgba(217,122,94,0.16), rgba(227,168,87,0.08))" }}>
        <div className="text-2xl">🍂</div>
        <div className="flex-1">
          <div className="text-[13.5px] font-bold" style={{ color: T.textPrimary }}>{t("ui.season")}</div>
          <div className="text-[11.5px]" style={{ color: T.textSecondary }}>{t("ui.seasonSub", 18)}</div>
        </div>
        <ChevronRight size={16} color={T.textTertiary} />
      </GlassCard>

      <SectionTitle>{t("ui.activeQuests")}</SectionTitle>
      <div className="space-y-2.5 mb-5">
        {QUEST_LIST.map((q) => {
          const progress = questProgress[q.id] ?? q.progress;
          const pct = (progress / q.total) * 100;
          const isDone = progress >= q.total;
          return (
            <GlassCard key={q.id} className="p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: T.bgCard }}>{q.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12.5px] font-semibold truncate" style={{ color: T.textPrimary }}>{t(`quests.${q.id}`)}</span>
                  <span className="text-[10.5px] shrink-0 ml-2" style={{ color: T.textTertiary }}>{q.unit ? `${progress.toFixed(1)}/${q.total}${q.unit}` : `${progress}/${q.total}`}</span>
                </div>
                <ProgressBar value={pct} color={isDone ? A.moss : A.sky} height={5} />
              </div>
              {!isDone ? (
                <button onClick={() => bumpQuest(q.id, q.unit ? 0.8 : 1, q.total)} className="wq-press w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: A.skySoft }}>
                  <Plus size={13} color={A.sky} />
                </button>
              ) : (
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: A.mossSoft }}>
                  <Check size={13} color={A.moss} />
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>

      <SectionTitle action={<button onClick={goExplore} className="text-[12px] font-semibold" style={{ color: A.moss }}>{t("ui.map")}</button>}>
        {t("ui.nearbyDiscoveries")}
      </SectionTitle>
      <div className="flex gap-3 overflow-x-auto wq-scroll pb-1 -mx-5 px-5">
        {NEARBY_DISCOVERIES.map((d) => (
          <GlassCard key={d.id} className="p-3.5 shrink-0" style={{ width: 138 }}>
            <div className="text-2xl mb-2">{d.emoji}</div>
            <div className="text-[13px] font-bold mb-1" style={{ color: T.textPrimary }}>{t(`nearby.${d.id}`)}</div>
            <RarityPill rarity={d.rarity} />
            <div className="text-[10.5px] mt-2 flex items-center gap-1" style={{ color: T.textTertiary }}><MapPin size={10} /> {d.dist} · {d.by}</div>
          </GlassCard>
        ))}
      </div>

      {showNotif && <NotificationsPanel onClose={() => setShowNotif(false)} />}
    </div>
  );
}
