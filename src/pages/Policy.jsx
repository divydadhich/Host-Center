import PageHeader from "../components/PageHeader";

/**
 * Generate policy data dynamically
 * You can tweak target/salary formulas anytime
 */
const policyData = Array.from({ length: 23 }, (_, i) => {
  const level = i + 1;

  return {
    level,
    time: 0,
    target: level === 1
      ? 32000
      : level * level * 14000, // scalable target formula
    salary: level === 1
      ? 3
      : Math.round(level * 2.7 * 10) / 10, // scalable salary
  };
});

export default function Policy() {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-indigo-100">
      {/* HEADER */}
      <PageHeader title="Platform Policy" />

      {/* CONTENT */}
      <div className="p-4 space-y-6">
        {policyData.map((item) => (
          <div key={item.level}>
            {/* LEVEL TITLE */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-5 bg-purple-600 rounded-full" />
              <h3 className="font-semibold text-gray-800">
                LEVEL:{item.level}
              </h3>
            </div>

            {/* POLICY CARD */}
            <div className="bg-blue-50 rounded-2xl px-4 py-5">
              <div className="grid grid-cols-3 text-center text-sm">
                
                {/* Time */}
                <div>
                  <p className="text-gray-700 mb-2">Time(Hours)</p>
                  <p className="text-emerald-500 font-semibold">
                    {item.time}
                  </p>
                </div>

                {/* Target */}
                <div>
                  <p className="text-gray-700 mb-2">
                    Target(Gift Value)
                  </p>
                  <p className="text-purple-600 font-semibold">
                    {item.target}
                  </p>
                </div>

                {/* Salary */}
                <div>
                  <p className="text-gray-700 mb-2">
                    Host(Salary)
                  </p>
                  <p className="text-orange-500 font-semibold">
                    {item.salary}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
