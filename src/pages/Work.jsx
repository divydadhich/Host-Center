import { useState } from "react";
import PageHeader from "../components/PageHeader";

const workData = [
  {
    month: "2025-10",
    target: 32005,
    duration: "02h40m",
    level: 1,
    salary: 3,
    status: "Settled",
    details: [
      { date: "2025-10-26", duration: "02h00m", target: 1 },
      { date: "2025-10-17", duration: "00h10m", target: 0 },
      { date: "2025-10-13", duration: "00h30m", target: 0 },
      { date: "2025-10-06", duration: "0s", target: 32004 },
    ],
  },
  {
    month: "2025-10",
    target: 32005,
    duration: "02h40m",
    level: 1,
    salary: 3,
    status: "Settled",
    details: [
      { date: "2025-10-26", duration: "02h00m", target: 1 },
      { date: "2025-10-17", duration: "00h10m", target: 0 },
      { date: "2025-10-13", duration: "00h30m", target: 0 },
      { date: "2025-10-06", duration: "0s", target: 32004 },
    ],
  },
  {
    month: "2025-10",
    target: 32005,
    duration: "02h40m",
    level: 1,
    salary: 3,
    status: "Settled",
    details: [
      { date: "2025-10-26", duration: "02h00m", target: 1 },
      { date: "2025-10-17", duration: "00h10m", target: 0 },
      { date: "2025-10-13", duration: "00h30m", target: 0 },
      { date: "2025-10-06", duration: "0s", target: 32004 },
    ],
  },
  {
    month: "2025-10",
    target: 32005,
    duration: "02h40m",
    level: 1,
    salary: 3,
    status: "Settled",
    details: [
      { date: "2025-10-26", duration: "02h00m", target: 1 },
      { date: "2025-10-17", duration: "00h10m", target: 0 },
      { date: "2025-10-13", duration: "00h30m", target: 0 },
      { date: "2025-10-06", duration: "0s", target: 32004 },
    ],
  },
  {
    month: "2025-10",
    target: 32005,
    duration: "02h40m",
    level: 1,
    salary: 3,
    status: "Settled",
    details: [
      { date: "2025-10-26", duration: "02h00m", target: 1 },
      { date: "2025-10-17", duration: "00h10m", target: 0 },
      { date: "2025-10-13", duration: "00h30m", target: 0 },
      { date: "2025-10-06", duration: "0s", target: 32004 },
    ],
  },
  {
    month: "2025-08",
    target: 32001,
    duration: "05h27m",
    level: 1,
    salary: 3,
    status: "Settled",
    details: [],
  },
  {
    month: "2025-07",
    target: 4516,
    duration: "05h42m",
    level: 0,
    salary: 0,
    status: "Settled",
    details: [],
  },
];

export default function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100 relative overflow-hidden">
      <PageHeader title="My Work" />

      {/* LIST */}
      <div className="p-4 space-y-4">
        {workData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-blue-600 font-semibold text-lg">
                {item.month}
              </span>
              <span className="px-4 py-1 text-sm rounded-full bg-emerald-500 text-white">
                {item.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <span className="text-gray-600">Target:</span>{" "}
                <span className="text-blue-600 font-semibold">
                  {item.target}
                </span>
              </div>
              <div className="text-right">
                <span className="text-gray-600">Duration:</span>{" "}
                <span className="text-purple-600 font-semibold">
                  {item.duration}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Target LV:</span>{" "}
                <span className="text-orange-500 font-semibold">
                  {item.level}
                </span>
              </div>
              <div className="text-right">
                <span className="text-gray-600">Salary:</span>{" "}
                <span className="text-orange-500 font-semibold">
                  ${item.salary}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelected(item)}
              className="mt-4 w-full text-center text-blue-500 text-sm font-medium"
            >
              See more details&gt;&gt;
            </button>
          </div>
        ))}
      </div>

      {/* ================= POP DOWN DETAILS ================= */}
      {selected && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* BOTTOM SHEET */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white rounded-t-3xl z-50 animate-slideUp">
            {/* HEADER */}
            <div className="p-4 border-b text-center font-semibold">
              Details
            </div>

            {/* SUMMARY */}
            <div className="p-4 text-sm">
              <div className="flex justify-between mb-3">
                <span className="text-blue-600 font-semibold">
                  {selected.month}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-500 text-white">
                  {selected.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-2">
                <div>Target: <span className="text-blue-600 font-semibold">{selected.target}</span></div>
                <div className="text-right">
                  Duration: <span className="text-purple-600 font-semibold">{selected.duration}</span>
                </div>
                <div>Target LV: <span className="text-orange-500 font-semibold">{selected.level}</span></div>
                <div className="text-right">
                  Salary: <span className="text-orange-500 font-semibold">${selected.salary}</span>
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="px-4 pb-6">
              <div className="grid grid-cols-3 text-center text-sm font-medium">
                <div className="bg-gray-100 py-2 rounded-l-lg">Date</div>
                <div className="bg-yellow-100 py-2">Duration</div>
                <div className="bg-emerald-500 text-white py-2 rounded-r-lg">
                  Target
                </div>
              </div>

              {selected.details.map((d, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-center text-sm border-b"
                >
                  <div className="py-2">{d.date}</div>
                  <div className="py-2 bg-yellow-50">{d.duration}</div>
                  <div className="py-2 bg-emerald-50">{d.target}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ANIMATION */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
}
