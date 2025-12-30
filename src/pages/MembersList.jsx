import PageHeader from "../components/PageHeader";

/* ================= MOCK DATA ================= */

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
    name: "John",
    id: "773920",
    role: "Agent",
    time: "45s",
    coins: "30",
    month: "2025-10",
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
    name: "John",
    id: "773920",
    role: "Agent",
    time: "45s",
    coins: "30",
    month: "2025-10",
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
    name: "John",
    id: "773920",
    role: "Agent",
    time: "45s",
    coins: "30",
    month: "2025-10",
  },
];

/* ================= PAGE ================= */

export default function MembersList() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <PageHeader title="Members List" />

      {/* SEARCH */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search by name or ID"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* MEMBERS LIST */}
      <div className="px-4 mt-6 space-y-3">
        {members.map((member, index) => (
          <MemberCard key={index} data={member} />
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="py-8 text-center text-blue-600 text-sm font-medium cursor-pointer">
        Load more
      </div>
    </div>
  );
}

/* ================= MEMBER CARD ================= */

const MemberCard = ({ data }) => {
  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

      {/* AVATAR */}
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-sm">
        {data.name.charAt(0).toUpperCase()}
      </div>

      {/* INFO */}
      <div className="flex-1">
        <p className="font-semibold text-sm">{data.name}</p>
        <p className="text-xs text-gray-500">ID: {data.id}</p>
        <p className="text-xs text-gray-400 mt-1">{data.month}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end gap-2">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
          {data.role}
        </span>

        <div className="flex gap-3 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            🕒 {data.time}
          </span>
          <span className="flex items-center gap-1">
            💰 {data.coins}
          </span>
        </div>
      </div>
    </div>
  );
};
