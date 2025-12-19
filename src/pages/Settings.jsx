import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">
      {/* HEADER */}
      <PageHeader title="Setting" />

      {/* SETTINGS LIST */}
      <div className="mt-4">
        <button
          onClick={() => navigate("/leave-team")}
          className="
            w-full
            h-14
            px-5
            flex
            items-center
            justify-between
            text-gray-800
            text-base
            border-b
            border-gray-200
            active:bg-gray-100
            transition
          "
        >
          <span>Leave the team</span>
          <span className="text-gray-400 text-xl">›</span>
        </button>
      </div>
    </div>
  );
}
