function TodoItem2() {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-[#252c46] bg-[#0e1220] p-5 transition duration-200 hover:border-[#ff3b9d]/50 hover:shadow-[0_0_25px_rgba(255,59,157,0.08)]">

      <div className="flex items-center gap-4">

        <button className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#ff3b9d] text-xs text-[#ff3b9d] transition hover:bg-[#ff3b9d] hover:text-white hover:shadow-[0_0_15px_rgba(255,59,157,0.5)]">
          ○
        </button>

        <div>
          <h3 className="font-medium text-white">
            Finish React practice
          </h3>

          <div className="mt-1 flex items-center gap-2">

            <span className="text-xs text-[#7f89a9]">
              Study
            </span>

            <span className="text-[#39415d]">
              ·
            </span>

            <span className="text-xs font-semibold text-[#ff4057]">
              High Priority
            </span>

          </div>
        </div>

      </div>

      <div className="flex gap-1">

        <button className="rounded-lg px-3 py-2 text-xs text-[#78829f] transition hover:bg-[#151b2d] hover:text-[#36b9ff]">
          Edit
        </button>

        <button className="rounded-lg px-3 py-2 text-xs text-[#78829f] transition hover:bg-[#151b2d] hover:text-[#ff4057]">
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem2;