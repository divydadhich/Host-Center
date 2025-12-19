import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function HostReward() {
  const [tab, setTab] = useState("target");

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-[#0F0905] text-white">
      {/* HEADER */}
      <PageHeader title="Host Reward" />

      {/* TABS */}
      <div className="flex justify-center gap-4 mt-6 px-4">
        <TabButton
          active={tab === "target"}
          onClick={() => setTab("target")}
        >
          Target Reward
        </TabButton>

        <TabButton
          active={tab === "active"}
          onClick={() => setTab("active")}
        >
          Active Reward
        </TabButton>
      </div>

      {/* RULE BOX - EXACT MATCH FROM IMAGE */}
      <div className="px-4 mt-8">
        <div className="rounded-lg border border-[#FFD700]/30 bg-[#3A1C5C]/90 p-4 text-sm">
          <p className="font-bold text-[#FFD700] mb-3">rule:</p>
          <ol className="space-y-2 list-decimal list-inside pl-2">
            <li className="text-white/95">Reset at 0:00 on the 1st of each month (GTM +3)</li>
            <li className="text-white/95">The anchor can receive the reward if he reaches the specified target</li>
            <li className="text-white/95">Each reward can only be claimed once a day</li>
          </ol>
        </div>
      </div>

      {/* REWARD CARD - EXACT MATCH */}
      <div className="px-4 mt-8">
        <div className="relative rounded-xl border border-[#FFD700] bg-gradient-to-b from-[#3A1809] to-[#1A0B03] p-5 pt-8 text-center">
          
          {/* CROWN - SIMPLER DESIGN LIKE IMAGE */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <Crown />
          </div>

          {/* TARGET BADGE */}
          <div className="mb-6">
            <div className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-sm">
              Target: 0/10000
            </div>
          </div>

          {/* VIP BADGE - EXACT FROM IMAGE */}
          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF8C00] flex items-center justify-center shadow-inner">
              <div className="w-16 h-16 rounded-md bg-gradient-to-b from-[#FFA500] to-[#FF6347] flex items-center justify-center">
                <span className="font-bold text-xl text-white">VIP3</span>
              </div>
            </div>
          </div>

          {/* VIP TEXT */}
          <p className="mb-6 text-lg font-semibold text-[#FFD700]">VIP3*1D</p>

          {/* RECEIVE BUTTON - EXACTLY LIKE IMAGE */}
          <button
            disabled
            className="
              w-full
              h-10
              rounded-lg
              bg-gradient-to-b
              from-[#CCCCCC]
              to-[#999999]
              text-[#666666]
              font-bold
              text-sm
              cursor-not-allowed
              shadow-inner
            "
          >
            Receive
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-2 rounded-lg font-bold text-sm
      transition-all duration-200
      ${active
        ? "bg-gradient-to-r from-[#FF0000] to-[#FF4500] text-white shadow-md"
        : "bg-[#1A0B03] text-[#CCCCCC] border border-[#FFD700]/20"}
    `}
  >
    {children}
  </button>
);

const Crown = () => (
  <svg width="80" height="30" viewBox="0 0 100 40">
    <path
      d="M10 30 L25 10 L40 20 L50 5 L60 20 L75 10 L90 30 Z"
      fill="url(#crownGradient)"
      stroke="#FFD700"
      strokeWidth="2"
    />
    <defs>
      <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </svg>
);