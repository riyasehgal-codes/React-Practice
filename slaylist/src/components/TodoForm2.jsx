function TodoForm2({
  newTask,
  setNewTask,
  newCategory,
  setNewCategory,
  newPriority,
  setNewPriority,
  onAddTask,
}) {
  /*
    Allows the user to press Enter instead of
    clicking the Add Task button.
  */
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTask();
    }
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-[#111320] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

      {/* Section heading */}
      <div className="mb-5 flex items-start justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6FB5]">
            make it happen
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            What are we doing today?
          </h2>
        </div>

        <span className="text-2xl text-[#FF4FA3]">
          ♡
        </span>
      </div>

      {/* Task input */}
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Write a task..."
        className="w-full rounded-2xl border border-white/10 bg-[#090a12] px-5 py-4 text-base text-white outline-none transition placeholder:text-[#777B8B] focus:border-[#FF4FA3] focus:ring-2 focus:ring-[#FF4FA3]/10"
      />

      {/* Category, priority and add button */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">

        {/* Category */}
        <select
          value={newCategory}
          onChange={(event) => setNewCategory(event.target.value)}
          className="flex-1 rounded-2xl border border-white/10 bg-[#090a12] px-4 py-3 text-sm font-medium text-white outline-none focus:border-[#FF4FA3]"
        >
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="College">College</option>
          <option value="Work">Work</option>
        </select>

        {/* Priority */}
        <select
          value={newPriority}
          onChange={(event) => setNewPriority(event.target.value)}
          className="flex-1 rounded-2xl border border-white/10 bg-[#090a12] px-4 py-3 text-sm font-medium text-white outline-none focus:border-[#FF4FA3]"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        {/* Add button */}
        <button
          onClick={onAddTask}
          className="rounded-2xl bg-[#FF4FA3] px-7 py-3 text-sm font-black text-white shadow-[0_8px_25px_rgba(255,79,163,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#FF6FB5] active:translate-y-0"
        >
          + Add Task
        </button>

      </div>
    </section>
  );
}

export default TodoForm2;