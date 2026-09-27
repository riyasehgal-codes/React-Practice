function TodoForm2({
  newTask,
  setNewTask,
  newCategory,
  setNewCategory,
  newPriority,
  setNewPriority,
  onAddTask,
}) {
  return (
    <section className="rounded-2xl border border-[#ff3b9d]/30 bg-[#0e1220] p-3 shadow-[0_0_35px_rgba(255,59,157,0.08)]">

      <div className="flex flex-col gap-3">

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full rounded-xl border border-[#252c46] bg-[#080b15] px-4 py-3 text-sm text-white outline-none placeholder:text-[#68708d] transition focus:border-[#ff3b9d] focus:shadow-[0_0_15px_rgba(255,59,157,0.2)]"
        />

        <div className="flex flex-col gap-3 sm:flex-row">

          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="flex-1 rounded-xl border border-[#252c46] bg-[#080b15] px-4 py-3 text-sm text-white outline-none focus:border-[#ff3b9d]"
          >
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="College">College</option>
            <option value="Work">Work</option>
          </select>


          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            className="flex-1 rounded-xl border border-[#252c46] bg-[#080b15] px-4 py-3 text-sm text-white outline-none focus:border-[#ff3b9d]"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>


          <button
            onClick={onAddTask}
            className="rounded-xl bg-[#ff3b9d] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,59,157,0.3)] transition hover:bg-[#ff54aa] hover:shadow-[0_0_28px_rgba(255,59,157,0.5)]"
          >
            + Add Task
          </button>

        </div>

      </div>

    </section>
  );
}

export default TodoForm2;