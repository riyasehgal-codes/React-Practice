function FilterBar2() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm font-medium text-[#b7bdd5]">
        Your tasks
      </p>

      <div className="flex w-fit rounded-xl border border-[#252c46] bg-[#0d1120] p-1">

        <button className="rounded-lg bg-[#ff3b9d] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_12px_rgba(255,59,157,0.25)]">
          All
        </button>

        <button className="rounded-lg px-4 py-2 text-xs font-medium text-[#7e88aa] transition hover:text-[#36b9ff]">
          Pending
        </button>

        <button className="rounded-lg px-4 py-2 text-xs font-medium text-[#7e88aa] transition hover:text-[#36b9ff]">
          Completed
        </button>

      </div>

    </div>
  );
}

export default FilterBar2;