function FilterBar2({ filter, setFilter }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm font-medium text-[#b7bdd5]">
        Your tasks
      </p>

      <div className="flex w-fit rounded-xl border border-[#252c46] bg-[#0d1120] p-1">

        <button
          onClick={() => setFilter("all")}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
            filter === "all"
              ? "bg-[#ff3b9d] text-white shadow-[0_0_12px_rgba(255,59,157,0.25)]"
              : "text-[#7e88aa] hover:text-[#36b9ff]"
          }`}
        >
          All
        </button>


        <button
          onClick={() => setFilter("pending")}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
            filter === "pending"
              ? "bg-[#ff3b9d] text-white shadow-[0_0_12px_rgba(255,59,157,0.25)]"
              : "text-[#7e88aa] hover:text-[#36b9ff]"
          }`}
        >
          Pending
        </button>


        <button
          onClick={() => setFilter("completed")}
          className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
            filter === "completed"
              ? "bg-[#ff3b9d] text-white shadow-[0_0_12px_rgba(255,59,157,0.25)]"
              : "text-[#7e88aa] hover:text-[#36b9ff]"
          }`}
        >
          Completed
        </button>

      </div>

    </div>
  );
}

export default FilterBar2;