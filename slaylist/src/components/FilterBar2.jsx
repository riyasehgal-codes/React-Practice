function FilterBar2({ filter, setFilter }) {
  /*
    Changes the current filter.

    "all"       → shows every task
    "pending"   → shows unfinished tasks
    "completed" → shows completed tasks
  */

  const filters = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Done" },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

      {/* Heading */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg text-[#FF4FA3]">
            ✦
          </span>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF91C7]">
            your plans
          </p>
        </div>

        <p className="mt-1 text-sm text-[#8F94A6]">
          Everything you want to get done.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex w-fit rounded-2xl border border-white/10 bg-[#111320] p-1">

        {filters.map((item) => {
          const isActive = filter === item.value;

          return (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? "bg-[#FF4FA3] text-white shadow-[0_5px_15px_rgba(255,79,163,0.18)]"
                  : "text-[#9EA2B2] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}

      </div>
    </div>
  );
}

export default FilterBar2;