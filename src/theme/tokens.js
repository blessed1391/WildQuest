/* ============================================================
   DESIGN TOKENS — light & dark
   ============================================================ */
export const DARK = {
  mode: "dark",
  bg: "#0A130F",
  bgFrame: "#060A08",
  bgCard: "rgba(255,255,255,0.055)",
  bgCardStrong: "rgba(255,255,255,0.09)",
  border: "rgba(255,255,255,0.09)",
  borderStrong: "rgba(255,255,255,0.16)",
  textPrimary: "#F4F1E6",
  textSecondary: "rgba(244,241,230,0.62)",
  textTertiary: "rgba(244,241,230,0.38)",
  homeIndicator: "rgba(255,255,255,0.35)",
  glowA: "rgba(95,163,122,0.18)",
  glowB: "rgba(227,168,87,0.14)",
  scrimBg: "rgba(6,10,8,0.72)",
};

export const LIGHT = {
  mode: "light",
  bg: "#F2EEE2",
  bgFrame: "#DCD5C2",
  bgCard: "rgba(22,35,27,0.05)",
  bgCardStrong: "rgba(22,35,27,0.085)",
  border: "rgba(22,35,27,0.09)",
  borderStrong: "rgba(22,35,27,0.15)",
  textPrimary: "#16231B",
  textSecondary: "rgba(22,35,27,0.64)",
  textTertiary: "rgba(22,35,27,0.42)",
  homeIndicator: "rgba(22,35,27,0.3)",
  glowA: "rgba(95,163,122,0.22)",
  glowB: "rgba(227,168,87,0.22)",
  scrimBg: "rgba(242,238,226,0.78)",
};

// accents stay constant across themes — they're the brand
export const ACCENT = {
  amber: "#E3A857",
  amberSoft: "rgba(227,168,87,0.16)",
  moss: "#5FA37A",
  mossSoft: "rgba(95,163,122,0.16)",
  sky: "#5FA8C7",
  skySoft: "rgba(95,168,199,0.16)",
  violet: "#9B7EDE",
  violetSoft: "rgba(155,126,222,0.16)",
  clay: "#D97A5E",
};

export const RARITY_COLOR = {
  Common: { color: "#9CA3AF", bg: "rgba(156,163,175,0.15)" },
  Uncommon: { color: "#5FA37A", bg: "rgba(95,163,122,0.15)" },
  Rare: { color: "#5FA8C7", bg: "rgba(95,168,199,0.15)" },
  Epic: { color: "#9B7EDE", bg: "rgba(155,126,222,0.15)" },
  Legendary: { color: "#E3A857", bg: "rgba(227,168,87,0.18)" },
  Mythic: { color: "#E86FA0", bg: "rgba(232,111,160,0.18)" },
};
