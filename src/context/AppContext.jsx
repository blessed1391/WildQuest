import React, { createContext, useContext, useState, useEffect } from "react";
import { DARK, LIGHT, ACCENT, RARITY_COLOR } from "../theme/tokens";
import { LANG } from "../i18n/lang";
import { USER, QUEST_LIST, SPECIES } from "../data/mockData";

/* ============================================================
   APP CONTEXT — theme + language + shared state
   ============================================================ */
const AppCtx = createContext(null);
export const useApp = () => useContext(AppCtx);

function buildDiscoveries() {
  const out = {};
  Object.keys(SPECIES).forEach((cat) => {
    out[cat] = {};
    SPECIES[cat].forEach((sp) => {
      out[cat][sp.id] = { found: !!sp.foundDate, date: sp.foundDate || null };
    });
  });
  return out;
}

export function AppProvider({ children }) {
  const [themePref, setThemePref] = useState("dark"); // 'light' | 'dark' | 'auto'
  const [systemDark, setSystemDark] = useState(true);
  const [lang, setLang] = useState("en");
  const [units, setUnits] = useState("km");
  const [notifOn, setNotifOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [discoveries, setDiscoveries] = useState(buildDiscoveries);
  const [coins, setCoins] = useState(USER.coins);
  const [xp, setXp] = useState(USER.xp);
  const [questProgress, setQuestProgress] = useState(() =>
    Object.fromEntries(QUEST_LIST.map((q) => [q.id, q.progress]))
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mq.matches);
    const handler = (e) => setSystemDark(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const resolvedMode = themePref === "auto" ? (systemDark ? "dark" : "light") : themePref;
  const T = resolvedMode === "dark" ? DARK : LIGHT;
  const dict = LANG[lang];

  const t = (path, ...args) => {
    const parts = path.split(".");
    let node = dict;
    for (const p of parts) {
      node = node?.[p];
      if (node === undefined) return path;
    }
    return typeof node === "function" ? node(...args) : node;
  };

  const markDiscovered = (category, speciesId, dateLabel) => {
    setDiscoveries((prev) => {
      const already = prev[category]?.[speciesId]?.found;
      if (already) return prev;
      return { ...prev, [category]: { ...prev[category], [speciesId]: { found: true, date: dateLabel } } };
    });
  };

  const bumpQuest = (id, amount, total) => {
    setQuestProgress((prev) => {
      const next = Math.min(total, (prev[id] || 0) + amount);
      return { ...prev, [id]: next };
    });
  };

  const value = {
    T, ACCENT, RARITY_COLOR, t, lang, setLang, themePref, setThemePref, resolvedMode,
    units, setUnits, notifOn, setNotifOn, soundOn, setSoundOn,
    discoveries, markDiscovered, coins, setCoins, xp, setXp,
    questProgress, bumpQuest,
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
