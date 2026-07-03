import { TreePine, Bird, Mountain, Droplets, Gem, Flower2 } from "lucide-react";
import { ACCENT } from "../theme/tokens";

/* ============================================================
   STATIC MOCK DATA (structure only — text comes from LANG)
   ============================================================ */
export const USER = {
  name: "Alex Rivera",
  levelTier: 2,
  level: 14,
  xp: 3260,
  xpToNext: 4000,
  coins: 1840,
  streak: 12,
  distanceKm: 187.4,
  scans: 129,
  avatarBg: "linear-gradient(135deg,#5FA37A,#3E7A5B)",
};

export const QUEST_LIST = [
  { id: "q1", icon: "🍄", xp: 90, coins: 15, progress: 1, total: 3 },
  { id: "q2", icon: "🥾", xp: 60, coins: 10, progress: 3.2, total: 5, unit: "km" },
  { id: "q3", icon: "🌊", xp: 80, coins: 20, progress: 0, total: 1 },
  { id: "q4", icon: "🌅", xp: 70, coins: 10, progress: 0, total: 1 },
  { id: "q5", icon: "🦋", xp: 55, coins: 10, progress: 0, total: 1 },
  { id: "q6", icon: "🎙️", xp: 65, coins: 15, progress: 0, total: 1 },
];

export const NEARBY_DISCOVERIES = [
  { id: "n1", by: "Mika T.", dist: "0.4 km", rarity: "Rare", emoji: "🦊" },
  { id: "n2", by: "Sam O.", dist: "0.9 km", rarity: "Uncommon", emoji: "🍄" },
  { id: "n3", by: "Priya K.", dist: "2.1 km", rarity: "Legendary", emoji: "🦅" },
  { id: "n4", by: "Jon B.", dist: "1.2 km", rarity: "Common", emoji: "🌸" },
];

export const HOTSPOTS = [
  { id: "h1", type: "Forest", x: 28, y: 34, players: 4, color: ACCENT.moss },
  { id: "h2", type: "Lake", x: 62, y: 22, players: 2, color: ACCENT.sky },
  { id: "h3", type: "Mountain", x: 74, y: 58, players: 1, color: "#9AA79E" },
  { id: "h4", type: "Waterfall", x: 40, y: 68, players: 6, color: ACCENT.sky },
  { id: "h5", type: "Trail", x: 52, y: 46, players: 3, color: ACCENT.amber },
  { id: "h6", type: "Meadow", x: 20, y: 60, players: 0, color: ACCENT.violet, rare: true },
];

export const SCAN_RESULT_META = {
  confidence: 96,
  rarity: "Uncommon",
  xp: 85,
  emoji: "🍄",
  color: "#D9584A",
  category: "mushrooms",
  speciesId: "flyAgaric",
};

export const SPECIES = {
  trees: [
    { id: "redOak", rarity: "Common", emoji: "🌳", foundDate: "12.06" },
    { id: "whiteBirch", rarity: "Common", emoji: "🌳", foundDate: "30.05" },
    { id: "weepingWillow", rarity: "Uncommon", emoji: "🌳", foundDate: "18.04" },
    { id: "giantSequoia", rarity: "Epic", emoji: "🌳" },
    { id: "ghostCedar", rarity: "Legendary", emoji: "🌳" },
    { id: "sugarMaple", rarity: "Common", emoji: "🌳", foundDate: "02.06" },
  ],
  flowers: [
    { id: "lupine", rarity: "Common", emoji: "🌸", foundDate: "20.06" },
    { id: "foxglove", rarity: "Uncommon", emoji: "🌸", foundDate: "08.06" },
    { id: "ghostOrchid", rarity: "Mythic", emoji: "🌸" },
    { id: "edelweiss", rarity: "Rare", emoji: "🌸" },
  ],
  mushrooms: [
    { id: "flyAgaric", rarity: "Uncommon", emoji: "🍄" },
    { id: "chanterelle", rarity: "Rare", emoji: "🍄" },
    { id: "lionsMane", rarity: "Epic", emoji: "🍄" },
  ],
  birds: [
    { id: "blueJay", rarity: "Common", emoji: "🐦", foundDate: "02.05" },
    { id: "goldenEagle", rarity: "Legendary", emoji: "🦅" },
    { id: "barnOwl", rarity: "Rare", emoji: "🦉", foundDate: "14.03" },
  ],
  animals: [
    { id: "redFox", rarity: "Rare", emoji: "🦊" },
    { id: "deer", rarity: "Common", emoji: "🦌", foundDate: "01.06" },
    { id: "blackBear", rarity: "Epic", emoji: "🐻" },
  ],
  rocks: [
    { id: "quartz", rarity: "Uncommon", emoji: "🪨", foundDate: "09.02" },
    { id: "meteorite", rarity: "Mythic", emoji: "☄️" },
  ],
  rivers: [{ id: "hollowFalls", rarity: "Rare", emoji: "🌊", foundDate: "22.01" }],
  mountains: [{ id: "everline", rarity: "Epic", emoji: "⛰️" }],
};

export const CATEGORY_META = {
  trees: { icon: TreePine, color: ACCENT.moss },
  flowers: { icon: Flower2, color: "#E876A8" },
  mushrooms: { icon: "🍄", color: "#D9584A" },
  birds: { icon: Bird, color: ACCENT.sky },
  animals: { icon: "🦌", color: ACCENT.amber },
  rocks: { icon: Gem, color: "#B7A6D9" },
  rivers: { icon: Droplets, color: ACCENT.sky },
  mountains: { icon: Mountain, color: "#9AA79E" },
};

export const BADGE_IDS = [
  { id: "b1", icon: "🔥" },
  { id: "b2", icon: "🍄" },
  { id: "b3", icon: "🦅" },
  { id: "b4", icon: "🏔️" },
  { id: "b5", icon: "🌊" },
  { id: "b6", icon: "🌙" },
];

export const ACHIEVEMENT_IDS = [
  { id: "a1", done: true },
  { id: "a2", done: true },
  { id: "a3", done: true },
  { id: "a4", done: false, progress: 0.3 },
  { id: "a5", done: false, progress: 0.4 },
];
