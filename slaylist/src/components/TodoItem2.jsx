function TodoItem2( {task}) {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-[#252c46] bg-[#0e1220] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff3b9d]/60 hover:shadow-[0_0_25px_rgba(255,59,157,0.12)]">

      <div className="flex items-center gap-4">

        <button className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#ff3b9d] text-xs text-[#ff3b9d] transition-all duration-200 hover:bg-[#ff3b9d] hover:text-white hover:shadow-[0_0_15px_rgba(255,59,157,0.5)]">
          ○
        </button>

        <div>
          <h3 className="font-medium text-white">
            {task.title}
          </h3>

          <div className="mt-1 flex items-center gap-2">

            <span className="text-xs text-[#7f89a9]">
              {task.category}
            </span>

            <span className="text-[#39415d]">
              ·
            </span>

            <span className="text-xs font-semibold text-[#ff4057]">
              {task.priority} Priority
            </span>

          </div>
        </div>

      </div>

      <div className="flex gap-1">

        <button className="rounded-lg px-3 py-2 text-xs text-[#78829f] transition-all duration-200 hover:bg-[#151b2d] hover:text-[#36b9ff]">
          Edit
        </button>

        <button className="rounded-lg px-3 py-2 text-xs text-[#78829f] transition-all duration-200 hover:bg-[#151b2d] hover:text-[#ff4057]">
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem2;