import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

/* ================= DATA ================= */

const agents = [
  {
    name: "Agent One",
    id: "8001",
    hosts: 40,
    income: 2300,
    total: 50000,
  },
  {
    name: "Agent Two",
    id: "8002",
    hosts: 22,
    income: 900,
    total: 20000,
  },
   {
    name: "Agent One",
    id: "8001",
    hosts: 40,
    income: 2300,
    total: 50000,
  },
  {
    name: "Agent Two",
    id: "8002",
    hosts: 22,
    income: 900,
    total: 20000,
  },
   {
    name: "Agent One",
    id: "8001",
    hosts: 40,
    income: 2300,
    total: 50000,
  },
  {
    name: "Agent Two",
    id: "8002",
    hosts: 22,
    income: 900,
    total: 20000,
  },
   {
    name: "Agent One",
    id: "8001",
    hosts: 40,
    income: 2300,
    total: 50000,
  },
  {
    name: "Agent Two",
    id: "8002",
    hosts: 22,
    income: 900,
    total: 20000,
  },
   {
    name: "Agent One",
    id: "8001",
    hosts: 40,
    income: 2300,
    total: 50000,
  },
  {
    name: "Agent Two",
    id: "8002",
    hosts: 22,
    income: 900,
    total: 20000,
  },
];

/* ================= PAGE ================= */

export default function AgentList() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <PageHeader title="Agent List" />

      {/* LIST */}
      <div className="px-4 mt-6 space-y-4">
        {agents.map((agent, index) => (
          <AgentCard key={index} agent={agent} />
        ))}
      </div>
    </div>
  );
}

/* ================= AGENT CARD ================= */

const AgentCard = ({ agent }) => {
  return (
    <div
      className="
        border border-gray-200
        rounded-2xl
        p-4
        flex items-center justify-between
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
          {agent.name.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-sm">{agent.name}</p>
          <p className="text-xs text-gray-500">
            ID: {agent.id} • Hosts: {agent.hosts}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="text-sm font-semibold text-green-600">
          ${agent.income}
        </p>
        <p className="text-xs text-gray-400">
          Total: ${agent.total}
        </p>
      </div>
    </div>
  );
};
