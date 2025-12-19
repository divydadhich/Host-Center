import PageHeader from "../components/PageHeader";

export default function LeaveTeam() {
  const handleLeave = () => {
    // API call later
    alert("Team left successfully");
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">
      {/* HEADER */}
      <PageHeader title="Setting" />

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] px-6 text-center">

        {/* MESSAGE */}
        <p className="text-gray-700 text-lg font-medium mb-10">
          After leaving the team, all goals will be cleared
        </p>

        {/* BUTTON */}
        <button
          onClick={handleLeave}
          className="
            w-full
            max-w-[300px]
            h-12
            rounded-full
            bg-gray-400
            text-white
            text-base
            font-medium
            flex
            items-center
            justify-center
            gap-2
            active:scale-[0.98]
            transition
          "
        >
          Leave the team
          <span className="text-yellow-300 font-semibold">
            ( 💰 100000 )
          </span>
        </button>
      </div>
    </div>
  );
}
