import React from "react";
import {
  ChevronLeft, Sun, Moon, SunMoon, Check, Globe, Lock, Bell, Volume2, VolumeX,
  Ruler, LogOut,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { GlassCard, SectionTitle, Switch } from "../components/ui";
import { LANG, AVAILABLE_LANGS, COMING_SOON_LANGS } from "../i18n/lang";

/* ============================================================
   SETTINGS SCREEN
   ============================================================ */
export default function SettingsScreen({ goBack, onToast }) {
  const { T, ACCENT: A, t, themePref, setThemePref, lang, setLang, units, setUnits, notifOn, setNotifOn, soundOn, setSoundOn } = useApp();

  return (
    <div className="px-5 pb-4 wq-anim-fadeIn h-full overflow-y-auto wq-scroll">
      <div className="flex items-center gap-3 pt-1 pb-5">
        <button onClick={goBack} className="wq-press w-9 h-9 rounded-full flex items-center justify-center" style={{ background: T.bgCard, border: `1px solid ${T.border}` }}><ChevronLeft size={17} color={T.textSecondary} /></button>
        <div className="wq-display text-[19px] font-extrabold" style={{ color: T.textPrimary }}>{t("ui.settings")}</div>
      </div>

      {/* Appearance */}
      <SectionTitle>{t("ui.appearance")}</SectionTitle>
      <GlassCard className="p-2 mb-5 flex gap-1.5">
        {[{ key: "light", icon: Sun, label: t("ui.light") }, { key: "dark", icon: Moon, label: t("ui.dark") }, { key: "auto", icon: SunMoon, label: t("ui.auto") }].map((opt) => {
          const active = themePref === opt.key;
          return (
            <button key={opt.key} onClick={() => setThemePref(opt.key)} className="wq-press flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl" style={{ background: active ? A.moss : "transparent", color: active ? "#0A130F" : T.textSecondary }}>
              <opt.icon size={17} />
              <span className="text-[11px] font-semibold">{opt.label}</span>
            </button>
          );
        })}
      </GlassCard>

      {/* Language */}
      <SectionTitle>{t("ui.language")}</SectionTitle>
      <GlassCard className="p-2 mb-2">
        {AVAILABLE_LANGS.map((code) => {
          const active = lang === code;
          return (
            <button key={code} onClick={() => setLang(code)} className="wq-press w-full flex items-center gap-3 px-3 py-3 rounded-2xl" style={{ background: active ? A.mossSoft : "transparent" }}>
              <span className="text-xl">{LANG[code].meta.flag}</span>
              <span className="flex-1 text-left text-[13.5px] font-medium" style={{ color: T.textPrimary }}>{LANG[code].meta.name}</span>
              {active && <Check size={16} color={A.moss} />}
            </button>
          );
        })}
      </GlassCard>
      <div className="mb-2 px-1">
        <span className="text-[11px] flex items-center gap-1.5" style={{ color: T.textTertiary }}><Globe size={11} /> {t("ui.moreLanguages")}</span>
      </div>
      <GlassCard className="p-2 mb-5 opacity-50">
        {COMING_SOON_LANGS.map((l) => (
          <div key={l.code} className="w-full flex items-center gap-3 px-3 py-2.5">
            <span className="text-xl">{l.flag}</span>
            <span className="flex-1 text-left text-[13px]" style={{ color: T.textSecondary }}>{l.name}</span>
            <Lock size={13} color={T.textTertiary} />
          </div>
        ))}
      </GlassCard>

      {/* Preferences */}
      <SectionTitle>{t("ui.notifications")}</SectionTitle>
      <GlassCard className="p-1.5 mb-5">
        <div className="flex items-center justify-between px-3.5 py-3">
          <div className="flex items-center gap-3"><Bell size={16} color={T.textSecondary} /><span className="text-[13px] font-medium" style={{ color: T.textPrimary }}>{t("ui.notifications")}</span></div>
          <Switch checked={notifOn} onChange={setNotifOn} />
        </div>
        <div className="h-px mx-3.5" style={{ background: T.border }} />
        <div className="flex items-center justify-between px-3.5 py-3">
          <div className="flex items-center gap-3">{soundOn ? <Volume2 size={16} color={T.textSecondary} /> : <VolumeX size={16} color={T.textSecondary} />}<span className="text-[13px] font-medium" style={{ color: T.textPrimary }}>{t("ui.soundEffects")}</span></div>
          <Switch checked={soundOn} onChange={setSoundOn} />
        </div>
      </GlassCard>

      <SectionTitle>{t("ui.units")}</SectionTitle>
      <GlassCard className="p-2 mb-6 flex gap-1.5">
        {[{ key: "km", label: t("ui.km") }, { key: "mi", label: t("ui.mi") }].map((opt) => {
          const active = units === opt.key;
          return (
            <button key={opt.key} onClick={() => setUnits(opt.key)} className="wq-press flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl" style={{ background: active ? A.moss : "transparent", color: active ? "#0A130F" : T.textSecondary }}>
              <Ruler size={14} /><span className="text-[12.5px] font-semibold">{opt.label}</span>
            </button>
          );
        })}
      </GlassCard>

      <button onClick={() => onToast({ emoji: "👋", text: t("ui.signOut") })} className="wq-press w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl mb-4" style={{ background: T.bgCard, color: "#D9584A" }}>
        <LogOut size={15} /><span className="text-[13.5px] font-semibold">{t("ui.signOut")}</span>
      </button>

      <div className="text-center text-[11px] pb-2" style={{ color: T.textTertiary }}>{t("ui.version")}</div>
    </div>
  );
}
