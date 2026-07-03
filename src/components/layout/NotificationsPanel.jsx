import React from "react";
import { X } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { LANG } from "../../i18n/lang";
import { GlassCard } from "../ui";

/* ============================================================
   NOTIFICATIONS PANEL
   ============================================================ */
export default function NotificationsPanel({ onClose }) {
  const { T, t, lang } = useApp();
  const items = LANG[lang].notifItems;
  return (
    <div className="absolute inset-0 z-50 wq-anim-fadeIn" onClick={onClose} style={{ background: T.scrimBg }}>
      <div onClick={(e) => e.stopPropagation()} className="absolute top-16 right-5 left-5 wq-anim-fadeUp">
        <GlassCard strong className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13.5px] font-bold" style={{ color: T.textPrimary }}>{t("ui.notifTitle")}</span>
            <button onClick={onClose} className="wq-press w-7 h-7 rounded-full flex items-center justify-center" style={{ background: T.bgCard }}>
              <X size={13} color={T.textSecondary} />
            </button>
          </div>
          <div className="space-y-2">
            {items.map((n, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2 rounded-xl" style={{ background: T.bgCard }}>
                <span className="text-base">{n.emoji}</span>
                <div className="flex-1">
                  <div className="text-[12px] leading-snug" style={{ color: T.textPrimary }}>{n.text}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: T.textTertiary }}>{n.time}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
