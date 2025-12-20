import PageHeader from "../components/PageHeader";

export default function Wallet() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">

      {/* HEADER */}
      <PageHeader title="Balance" />

      {/* WALLET BALANCE CARD */}
      <div className="px-4 mt-4">
        <div className="rounded-2xl bg-[#5C039B] text-white p-6 shadow-md">
          <h1 className="text-4xl font-bold">$0</h1>
          <p className="text-sm opacity-90 mt-1">
            Wallet Balance · USD
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="px-4 mt-6 grid grid-cols-3 gap-4">
        <ActionCard
          icon="💰"
          title="Exchange"
          subtitle="Convert coins"
        />
        <ActionCard
          icon="✉️"
          title="Transfer"
          subtitle="Send money"
        />
        <ActionCard
          icon="🏦"
          title="Withdraw"
          subtitle="Bank withdrawal"
        />
      </div>

      {/* RECENT ACTIVITY */}
      <div className="px-4 mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="bg-white rounded-2xl shadow-lg  p-10 flex flex-col items-center text-center">
          <div className="text-4xl mb-3 text-gray-400">⌛</div>
          <p className="font-medium text-gray-800">
            No records yet
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Make your first transfer
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= ACTION CARD ================= */

function ActionCard({ icon, title, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg  p-4 flex flex-col items-center text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="font-medium text-sm">{title}</p>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}
