import { useNavigate } from "react-router-dom";
import P from "../assets/avatar.jpeg"
import hero from "../assets/bg.jpg"

const CoinsIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Coins */}
      <ellipse cx="12" cy="17" rx="7" ry="3" fill="#FFD700" />
      <ellipse cx="12" cy="14" rx="7" ry="3" fill="#FFC107" />
      <ellipse cx="12" cy="11" rx="7" ry="3" fill="#FFB300" />
  
      {/* Gift */}
      <rect x="3" y="6" width="6" height="5" rx="1" fill="#8B5CF6" />
      <rect x="5.7" y="6" width="1" height="5" fill="#FDE68A" />
      <rect x="3" y="8" width="6" height="1" fill="#FDE68A" />
    </svg>
  );
  
const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-sm p-4">
    {children}
  </div>
);

const IconButton = ({ label, color, onClick, icon }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2 w-1/3"
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
    >
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </button>
);

export default function HostCenter() {
  const nav = useNavigate();

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-50">

      {/* PROFILE */}
      <div className="p-4">
        <Card>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
            <img
    src={P}
    alt="Profile"
    className="w-full h-full object-cover"
  />            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">PROFESSOR 🤓</h3>
                <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">
                  Admin
                </span>
              </div>
              <p className="text-sm text-gray-500">ID : 2469315</p>
            </div>
          </div>
        </Card>
      </div>

  {/* RECHARGE BANNER */}
<div className="px-4 mt-4">
  <button
    onClick={() => console.log("Recharge clicked")}
    className="
      relative
      w-full
      h-24
      rounded-2xl
      overflow-hidden
      flex
      items-center
      justify-between
      px-5
      text-white
      shadow-xl
      active:scale-[0.97]
      transition-all
      duration-150
      bg-cover
      bg-center
    "
    style={{ backgroundImage: `url(${hero})` }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/20" />

    {/* LEFT CONTENT */}
    <div className="relative flex items-center gap-4">
      {/* Icon container */}
      {/* <div className="w-14 h-14 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center">
        <CoinsIcon />
      </div> */}

      <h3 className="text-lg px-18 font-bold tracking-wide">
        Online coins recharge
      </h3>
    </div>

    {/* RIGHT ARROW */}
    <span className="relative text-3xl font-light">›</span>
  </button>
</div>



      {/* ACTIONS */}
      <div className="p-4 space-y-4">

        <Card>
          <div className="flex justify-between">
            <IconButton
              label="Wallet"
              color="bg-orange-400"
              onClick={() => nav("/wallet")}
              icon={<WalletIcon />}
            />
            <IconButton
              label="Work"
              color="bg-blue-400"
              onClick={() => nav("/work")}
              icon={<WorkIcon />}
            />
          </div>
        </Card>

        <Card>
          <div className="flex justify-between">
            <IconButton
              label="Apply"
              color="bg-green-400"
              onClick={() => nav("/apply")}
              icon={<UserIcon />}
            />
            <IconButton
              label="Policy"
              color="bg-emerald-400"
              onClick={() => nav("/policy")}
              icon={<DocIcon />}
            />
            <IconButton
              label="Invite"
              color="bg-pink-400"
              onClick={() => nav("/invite")}
              icon={<HeartIcon />}
            />
          </div>
        </Card>

        <Card>
          <div className="flex gap-8">
            <IconButton
              label="Host Reward"
              color="bg-orange-400"
              onClick={() => nav("/reward")}
              icon={<GiftIcon />}
            />
            <IconButton
              label="Settings"
              color="bg-blue-400"
              onClick={() => nav("/settings")}
              icon={<SettingsIcon />}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ================= ICONS ================= */

const WalletIcon = () => <span className="text-white text-xl">💰</span>;
const WorkIcon = () => <span className="text-white text-xl">📊</span>;
const UserIcon = () => <span className="text-white text-xl">👤</span>;
const DocIcon = () => <span className="text-white text-xl">📄</span>;
const HeartIcon = () => <span className="text-white text-xl">💌</span>;
const GiftIcon = () => <span className="text-white text-xl">🎁</span>;
const SettingsIcon = () => <span className="text-white text-xl">⚙️</span>;
