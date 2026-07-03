import React, { useState } from "react";
import { Search, X, TreePine, Droplets, Mountain, Footprints, Sparkles, Users } from "lucide-react";
import { useApp } from "../context/AppContext";
import { GlassCard } from "../components/ui";
import { HOTSPOTS } from "../data/mockData";

/* ============================================================
   EXPLORE SCREEN
   ============================================================ */
export default function ExploreScreen() {
  const { T, ACCENT: A, t } = useApp();
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filters = ["All", "Forest", "Lake", "Mountain", "Waterfall", "Trail"];

  const visible = HOTSPOTS.filter((h) => {
    const matchesFilter = filter === "All" || h.type === filter;
    const matchesQuery = !query || t(`hotspots.${h.id}`).toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="pb-4 wq-anim-fadeIn h-full flex flex-col">
      <div className="px-5 pt-1 pb-3">
        <div className="wq-display text-[22px] font-extrabold mb-3" style={{ color: T.textPrimary }}>{t("ui.explore")}</div>
        <GlassCard className="flex items-center gap-2 px-4 py-2.5 mb-3">
          <Search size={15} color={T.textTertiary} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("ui.searchPlaceholder")}
            className="flex-1 bg-transparent outline-none text-[13px]"
            style={{ color: T.textPrimary }}
          />
          {query && (
            <button onClick={() => setQuery("")}><X size={13} color={T.textTertiary} /></button>
          )}
        </GlassCard>
        <div className="flex gap-2 overflow-x-auto wq-scroll -mx-5 px-5">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className="wq-press shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold" style={{ background: filter === f ? A.moss : T.bgCard, color: filter === f ? "#0A130F" : T.textSecondary, border: `1px solid ${filter === f ? A.moss : T.border}` }}>
              {t(`hotspotType.${f}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-5 rounded-3xl overflow-hidden flex-1" style={{ minHeight: 300 }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #16261D 0%, #0F1F17 45%, #14231C 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[10, 25, 40, 55, 70, 85].map((y, i) => (<path key={i} d={`M0,${y} Q25,${y - 6} 50,${y} T100,${y}`} fill="none" stroke="rgba(95,163,122,0.25)" strokeWidth="0.4" />))}
        </svg>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,75 Q30,60 45,70 T100,55" fill="none" stroke="rgba(95,168,199,0.35)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>

        <div className="absolute" style={{ left: "48%", top: "48%" }}>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 rounded-full" style={{ background: "rgba(227,168,87,0.4)", animation: "wq-ring 2s ease-out infinite" }} />
            <div className="w-4 h-4 rounded-full border-2" style={{ background: A.amber, borderColor: "#0A130F" }} />
          </div>
        </div>

        {visible.map((h) => (
          <button key={h.id} onClick={() => setSelected(h)} className="wq-press absolute wq-anim-float" style={{ left: `${h.x}%`, top: `${h.y}%`, animationDelay: `${h.id.slice(1) * 0.3}s` }}>
            <div className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center relative" style={{ background: h.rare ? "linear-gradient(135deg,#E86FA0,#9B7EDE)" : "rgba(20,30,24,0.85)", border: `2px solid ${h.rare ? "#fff" : h.color}`, boxShadow: h.rare ? "0 0 16px rgba(232,111,160,0.7)" : "none" }}>
                {h.type === "Forest" && <TreePine size={16} color={h.rare ? "#fff" : h.color} />}
                {h.type === "Lake" && <Droplets size={16} color={h.color} />}
                {h.type === "Mountain" && <Mountain size={16} color={h.color} />}
                {h.type === "Waterfall" && <Droplets size={16} color={h.color} />}
                {h.type === "Trail" && <Footprints size={16} color={h.color} />}
                {h.type === "Meadow" && <Sparkles size={16} color="#fff" />}
              </div>
            </div>
          </button>
        ))}

        {visible.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[12.5px] px-4 py-2 rounded-full" style={{ background: "rgba(0,0,0,0.4)", color: "#fff" }}>
              {t("ui.searchPlaceholder")}
            </span>
          </div>
        )}
      </div>

      {selected && (
        <div className="px-5 pt-3 wq-anim-fadeUp">
          <GlassCard strong className="p-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: selected.rare ? "linear-gradient(135deg,#E86FA0,#9B7EDE)" : `${selected.color}22` }}>
              {selected.type === "Forest" && <TreePine size={18} color={selected.rare ? "#fff" : selected.color} />}
              {selected.type === "Lake" && <Droplets size={18} color={selected.color} />}
              {selected.type === "Mountain" && <Mountain size={18} color={selected.color} />}
              {selected.type === "Waterfall" && <Droplets size={18} color={selected.color} />}
              {selected.type === "Trail" && <Footprints size={18} color={selected.color} />}
              {selected.type === "Meadow" && <Sparkles size={18} color="#fff" />}
            </div>
            <div className="flex-1">
              <div className="text-[14px] font-bold" style={{ color: T.textPrimary }}>{t(`hotspots.${selected.id}`)}</div>
              <div className="text-[11.5px] flex items-center gap-2" style={{ color: T.textSecondary }}>
                {t(`hotspotType.${selected.type}`)} · <Users size={11} className="inline" /> {t("ui.nearbyCount", selected.players)}
                {selected.rare && <span style={{ color: "#E86FA0" }}>· {t("ui.rareZone")}</span>}
              </div>
            </div>
            <button onClick={() => setSelected(null)} className="wq-press w-7 h-7 rounded-full flex items-center justify-center" style={{ background: T.bgCard }}>
              <X size={13} color={T.textSecondary} />
            </button>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
