import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";


const members = [
  {
    name: "trk",
    id: "12610181",
    role: "Agent",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
  {
    name: "Rocky",
    id: "982102",
    role: "Agent",
    time: "20s",
    coins: "15",
    month: "2025-11",
  },
  {
    name: "trk",
    id: "12610181",
    role: "Agent",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
  {
    name: "Rocky",
    id: "982102",
    role: "Agent",
    time: "20s",
    coins: "15",
    month: "2025-11",
  },
  {
    name: "trk",
    id: "12610181",
    role: "Agent",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
  {
    name: "Rocky",
    id: "982102",
    role: "Agent",
    time: "20s",
    coins: "15",
    month: "2025-11",
  },
  {
    name: "trk",
    id: "12610181",
    role: "Agent",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
  {
    name: "Rocky",
    id: "982102",
    role: "Agent",
    time: "20s",
    coins: "15",
    month: "2025-11",
  },
  {
    name: "trk",
    id: "12610181",
    role: "Agent",
    time: "0s",
    coins: "0",
    month: "2025-12",
  },
  {
    name: "Rocky",
    id: "982102",
    role: "Agent",
    time: "20s",
    coins: "15",
    month: "2025-11",
  },
];

export default function MembersList() {
  

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gradient-to-b from-[#6B4CA3] to-[#1A1A1F] text-white">

     {/* HEADER */}
 <PageHeader title="Members List" />

      {/* SEARCH */}
      <div className="px-4 mt-5">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 text-gray-500">
          🔍
          <input
            placeholder="Please enter an account"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* LIST */}
      <div className="px-4 mt-6 space-y-4">
        {members.map((m, i) => (
          <MemberCard key={i} data={m} />
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="text-center py-10 text-blue-400">
        Load more
      </div>
    </div>
  );
}

/* ================= MEMBER CARD ================= */

const MemberCard = ({ data }) => (
  <div className="bg-white rounded-2xl p-4 flex gap-4 text-gray-800 shadow-lg">

    {/* AVATAR */}
    <div className="w-14 h-14 rounded-full bg-purple-200 flex-shrink-0" />

    {/* INFO */}
    <div className="flex-1">
      <p className="font-semibold text-lg">{data.name}</p>
      <p className="text-sm text-gray-500">ID: {data.id}</p>

      {/* STATS */}
      <div className="flex gap-3 mt-3">
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm">
          🕒 {data.time}
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm">
          💰 {data.coins}
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="flex flex-col items-end justify-between">
      <span className="px-3 py-1 rounded-full bg-orange-400 text-white text-sm">
        {data.role}
      </span>
      <span className="text-sm text-gray-400">
        {data.month}
      </span>
    </div>
  </div>
);
