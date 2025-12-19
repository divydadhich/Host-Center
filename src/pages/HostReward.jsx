import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function HostReward() {
  const [tab, setTab] = useState("target");

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-[#1a0f0a] text-white">
      {/* HEADER */}
      <PageHeader title="Host Reward" />

      {/* TABS */}
      <div className="flex justify-center gap-4 mt-4 px-4">
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

      {/* RULE BOX */}
      <div className="px-4 mt-6">
        <div className="rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-purple-900/80 to-purple-700/80 p-4 text-sm leading-relaxed">
          <p className="font-semibold mb-2">rule:</p>
          <ol className="space-y-1 list-decimal list-inside text-white/90">
            <li>Reset at 0:00 on the 1st of each month (GTM +3)</li>
            <li>The anchor can receive the reward if he reaches the specified target</li>
            <li>Each reward can only be claimed once a day</li>
          </ol>
        </div>
      </div>

      {/* REWARD CARD */}
      <div className="px-4 mt-8">
        <div className="relative rounded-2xl border-2 border-yellow-500 bg-gradient-to-b from-[#5a1c0c] to-[#2b0d06] p-6 text-center shadow-2xl">

          {/* CROWN */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <Crown />
          </div>

          {/* TARGET */}
          <div className="mt-10 mb-6">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold">
              Target: 0 / 10000
            </div>
          </div>

          {/* BADGE */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-lg">
              <span className="font-bold text-lg">VIP3</span>
            </div>
          </div>

          <p className="mb-6 text-lg font-medium">VIP3*1D</p>

          {/* RECEIVE BUTTON */}
          <button
            disabled
            className="
              w-full
              h-12
              rounded-full
              bg-gradient-to-r
              from-gray-300
              to-gray-200
              text-gray-600
              font-semibold
              cursor-not-allowed
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
      px-5 py-2 rounded-xl font-semibold text-sm
      ${active
        ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
        : "bg-black/40 text-gray-300 border border-yellow-500/30"}
    `}
  >
    {children}
  </button>
);

const Crown = () => (
  <svg width="90" height="40" viewBox="0 0 200 90">
    <path
      d="M20 70 L40 30 L80 60 L100 20 L120 60 L160 30 L180 70 Z"
      fill="gold"
      stroke="#facc15"
      strokeWidth="4"
    />
  </svg>
);
