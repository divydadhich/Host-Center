import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function InviteBD() {
  const [userId, setUserId] = useState("");

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <PageHeader title="Invite BD" />

      {/* CONTENT */}
      <div className="px-5 pt-12 flex flex-col gap-10">

        {/* INFO CARD */}
        <div className="rounded-2xl border border-gray-200 p-5">
          <h2 className="text-lg font-semibold mb-2">
            Invite a Business Developer
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Search for a BD by their User ID and send an invitation to
            join your team.
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="rounded-2xl border border-gray-200 p-5 space-y-3">
          <label className="text-sm font-medium">
            User ID
          </label>

          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter user ID"
            className="
              w-full h-12
              rounded-xl
              border border-gray-300
              px-4
              text-sm
              outline-none
              focus:ring-2 focus:ring-purple-500
            "
          />
        </div>

        {/* CTA BUTTON */}
        <button
          className="
            w-full h-14
            rounded-xl
            bg-purple-600
            text-white
            text-base font-semibold
            shadow-md
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
