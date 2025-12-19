import PageHeader from "../components/PageHeader";

export default function Apply() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      {/* HEADER */}
      <PageHeader title="Application Records" />

      {/* EMPTY STATE */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] text-gray-400">
        <EmptyIcon />
        <p className="mt-4 text-sm">No more data</p>
      </div>
    </div>
  );
}

/* ================= EMPTY ICON ================= */

const EmptyIcon = () => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 24 24"
    fill="none"
    className="opacity-70"
  >
    {/* Box */}
    <path
      d="M3 7h18v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7z"
      fill="#BDBDBD"
    />
    <path
      d="M3 7l2-3h14l2 3"
      fill="#CFCFCF"
    />

    {/* Shine lines */}
    <path d="M12 2v2" stroke="#BDBDBD" strokeWidth="1.5" />
    <path d="M9 3l1 2" stroke="#BDBDBD" strokeWidth="1.5" />
    <path d="M15 3l-1 2" stroke="#BDBDBD" strokeWidth="1.5" />
  </svg>
);
