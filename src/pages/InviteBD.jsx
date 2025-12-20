import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";


export default function InviteBD() {
  const nav = useNavigate();

  return (
    
    <div className="max-w-[430px] mx-auto min-h-screen bg-gradient-to-b from-[#6A4BA3] to-[#1B1A20] text-white">
 {/* HEADER */}
 <PageHeader title="Invite BD" />
       {/* CONTENT */}
      <div className="mt-16 px-6 flex flex-col items-center">

        {/* INPUT */}
        <input
          placeholder="Enter User ID"
          className="
            w-full
            h-14
            rounded-xl
            bg-white/15
            backdrop-blur-md
            px-4
            text-white
            placeholder-white/60
            outline-none
          "
        />

        {/* BUTTON */}
        <button
          className="
            mt-8
            w-44
            h-12
            rounded-full
            bg-white
            text-purple-700
            font-medium
            shadow-lg
            active:scale-95
            transition
          "
        >
          Search & Invite
        </button>

      </div>
    </div>
  );
}
