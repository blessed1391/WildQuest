import React, { useState, useRef, useEffect } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { FONT_STYLE } from "./styles/globalStyles";
import StatusBar from "./components/layout/StatusBar";
import HomeIndicator from "./components/layout/HomeIndicator";
import TabBar from "./components/layout/TabBar";
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ScanScreen from "./screens/ScanScreen";
import CollectionScreen from "./screens/CollectionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

/* ============================================================
   ROOT APP SHELL
   ============================================================ */
function AppShell() {
  const { T } = useApp();
  const [tab, setTab] = useState("home");
  const [prevTab, setPrevTab] = useState("home");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (tst) => {
    setToast(tst);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  };
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const goSettings = () => { setPrevTab(tab); setTab("settings"); };
  const goBackFromSettings = () => setTab(prevTab);

  return (
    <div className="wq-root w-full flex items-center justify-center" style={{ background: "#050807", minHeight: 640, padding: "24px 12px" }}>
      <style>{FONT_STYLE}</style>
      <div className="relative overflow-hidden flex flex-col" style={{ width: 390, height: 780, maxWidth: "100%", borderRadius: 52, border: `8px solid ${T.bgFrame}`, background: T.bg, boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)", transition: "background 0.4s ease, border-color 0.4s ease" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${T.glowA}, transparent 70%)` }} />
          <div className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${T.glowB}, transparent 70%)` }} />
        </div>

        <StatusBar toast={toast} />

        <div className="relative flex-1 overflow-y-auto wq-scroll pt-2" style={{ paddingBottom: tab === "settings" ? 20 : 110 }}>
          {tab === "home" && <HomeScreen goScan={() => setTab("scan")} goExplore={() => setTab("explore")} goSettings={goSettings} />}
          {tab === "explore" && <ExploreScreen />}
          {tab === "scan" && <ScanScreen onToast={showToast} />}
          {tab === "collection" && <CollectionScreen />}
          {tab === "profile" && <ProfileScreen goSettings={goSettings} />}
          {tab === "settings" && <SettingsScreen goBack={goBackFromSettings} onToast={showToast} />}
        </div>

        {tab !== "settings" && <TabBar active={tab} setActive={setTab} />}
        <div className="absolute bottom-0 left-0 right-0"><HomeIndicator /></div>
      </div>
    </div>
  );
}

export default function WildQuestApp() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
