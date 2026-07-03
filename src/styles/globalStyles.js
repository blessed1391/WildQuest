/* ============================================================
   FONT / GLOBAL CSS
   ============================================================ */
export const FONT_STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap');

.wq-root, .wq-root * { box-sizing: border-box; font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
.wq-display { font-family: 'Manrope', sans-serif; }
.wq-root { -webkit-font-smoothing: antialiased; }
.wq-scroll::-webkit-scrollbar { display: none; }
.wq-scroll { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes wq-fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
@keyframes wq-fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes wq-pop { 0% { transform: scale(0.9); opacity:0; } 100% { transform: scale(1); opacity:1; } }
@keyframes wq-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.45; } }
@keyframes wq-ring { 0% { transform: scale(1); opacity: 0.55; } 100% { transform: scale(1.9); opacity: 0; } }
@keyframes wq-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
@keyframes wq-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes wq-slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

.wq-anim-fadeUp { animation: wq-fadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }
.wq-anim-fadeIn { animation: wq-fadeIn 0.4s ease both; }
.wq-anim-pop { animation: wq-pop 0.35s cubic-bezier(.34,1.56,.64,1) both; }
.wq-anim-float { animation: wq-float 3.4s ease-in-out infinite; }
.wq-anim-spin { animation: wq-spin 1.1s linear infinite; }
.wq-anim-slideUp { animation: wq-slideUp 0.38s cubic-bezier(.22,1,.36,1) both; }

.wq-press { transition: transform 0.15s cubic-bezier(.22,1,.36,1), opacity 0.15s ease; }
.wq-press:active { transform: scale(0.96); opacity: 0.88; }

.wq-blur { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); transition: background 0.4s ease, border-color 0.4s ease; }
.wq-blur-strong { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); transition: background 0.4s ease, border-color 0.4s ease; }

.wq-scanline { background: linear-gradient(to bottom, transparent, rgba(227,168,87,0.9), transparent); }
.wq-topo { background-image: repeating-radial-gradient(circle at 20% 20%, transparent 0, transparent 18px, rgba(150,150,140,0.06) 19px, transparent 20px, transparent 38px); }

.wq-switch { transition: background 0.25s ease; }
.wq-switch-dot { transition: transform 0.25s cubic-bezier(.22,1,.36,1); }
`;
