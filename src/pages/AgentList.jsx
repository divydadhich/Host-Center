import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";


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
];

export default function AgentList() {
  const nav = useNavigate();

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gradient-to-b from-[#6A4BA3] to-[#1B1A20] text-white">

     {/* HEADER */}
 <PageHeader title="Agent List" />

      {/* LIST */}
      <div className="mt-10 space-y-10 px-6">
        {agents.map((agent, index) => (
          <div key={index} className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-500/40" />

              <div>
                <p className="text-lg font-medium">
                  {agent.name}
                </p>
                <p className="text-sm text-white/60">
                  ID: {agent.id} • Hosts: {agent.hosts}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <p className="text-lg font-semibold">
                ${agent.income}
              </p>
              <p className="text-sm text-white/50">
                ${agent.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
