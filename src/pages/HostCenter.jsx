import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.jpeg";
import PageHeader from "../components/PageHeader";

export default function HostCenter() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen pb-8">

        {/* HEADER */}
        <PageHeader title="Admin Center" />

        {/* CONTENT WRAPPER */}
        <div className="px-4">

          {/* ================= PROFILE CARD ================= */}
          <div className="mt-4 bg-white/40 backdrop-blur-xl rounded-3xl p-4 flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white">
              <img
                src={avatar}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                HT = Heaven place
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                ID: 1
              </p>
            </div>

            <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-orange-400 text-white">
              ADMIN
            </span>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <StatCircle title="This month" value="$0" />
            <StatCircle title="Last month" value="$0" />
          </div>

          {/* ================= BALANCE ================= */}
          <div
            onClick={() => nav("/wallet")}
            className="mt-6 bg-white/50 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-4 shadow-md cursor-pointer active:scale-95 transition"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-400 flex items-center justify-center text-white text-lg sm:text-xl">
              💳
            </div>
            <span className="font-semibold text-base sm:text-lg text-gray-800">
              Balance
            </span>
          </div>

          {/* ================= ACTION GRID ================= */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <ActionCard icon="👥" label="Members List" onClick={() => nav("/members")} />
            <ActionCard icon="🧑‍💼" label="Agent List" onClick={() => nav("/agent")} />
            <ActionCard icon="➕" label="Invite Agent" onClick={() => nav("/invite")} />
            <ActionCard icon="📣" label="Invite BD" onClick={() => nav("/bd")} />
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const StatCircle = ({ value, title }) => (
  <div className="aspect-square w-full max-w-[150px] mx-auto bg-white/40 backdrop-blur-xl rounded-full flex flex-col items-center justify-center shadow-md">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
      {value}
    </h2>
    <p className="text-xs sm:text-sm text-gray-600">
      {title}
    </p>
  </div>
);

const ActionCard = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white/50 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 shadow-md cursor-pointer active:scale-95 transition"
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-lg sm:text-xl">
      {icon}
    </div>
    <span className="font-medium text-sm sm:text-base text-gray-800">
      {label}
    </span>
  </div>
);
