import { useState } from "react";

function TodoItem2({
  task,
  onToggleTask,
  onDeleteTask,
  isEditing,
  onStartEditing,
  onSaveTask,
  onCancelEditing,
}) {
  /*
    These states temporarily store the values
    while the user is editing a task.
  */
  const [editTitle, setEditTitle] = useState(task.title);
  const [editCategory, setEditCategory] = useState(task.category);
  const [editPriority, setEditPriority] = useState(task.priority);

  /*
    Sends the updated values back to App.jsx.
  */
  const handleSave = () => {
    if (!editTitle.trim()) return;

    onSaveTask(task.id, {
      title: editTitle,
      category: editCategory,
      priority: editPriority,
    });
  };

  /* ---------------- EDIT MODE ---------------- */

  if (isEditing) {
    return (
      <div className="rounded-3xl border border-[#FF4FA3]/40 bg-[#111320] p-6">

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#FF91C7]">
          editing task
        </p>

        {/* Edit task title */}
        <input
          type="text"
          value={editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-[#090a12] px-4 py-3 text-base text-white outline-none focus:border-[#FF4FA3]"
        />

        {/* Edit category and priority */}
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">

          <select
            value={editCategory}
            onChange={(event) => setEditCategory(event.target.value)}
            className="flex-1 rounded-2xl border border-white/10 bg-[#090a12] px-4 py-3 text-sm text-white outline-none focus:border-[#FF4FA3]"
          >
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="College">College</option>
            <option value="Work">Work</option>
          </select>

          <select
            value={editPriority}
            onChange={(event) => setEditPriority(event.target.value)}
            className="flex-1 rounded-2xl border border-white/10 bg-[#090a12] px-4 py-3 text-sm text-white outline-none focus:border-[#FF4FA3]"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

        </div>

        {/* Save / cancel */}
        <div className="mt-4 flex gap-3">

          <button
            onClick={handleSave}
            className="rounded-xl bg-[#FF4FA3] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#FF6FB5]"
          >
            Save
          </button>

          <button
            onClick={onCancelEditing}
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-bold text-[#C5C8D6] transition hover:border-[#FF4FA3]/40 hover:text-white"
          >
            Cancel
          </button>

        </div>
      </div>
    );
  }

  /* ---------------- NORMAL MODE ---------------- */

  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-3xl border p-5 transition-all duration-200 sm:flex-row sm:items-center sm:justify-between ${
        task.completed
          ? "border-white/5 bg-[#0D0E16] opacity-55"
          : "border-white/10 bg-[#111320] hover:-translate-y-0.5 hover:border-[#FF4FA3]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
      }`}
    >

      {/* Small decorative sparkle */}
      <span className="absolute right-5 top-4 text-sm text-[#FF6FB5]/60 transition group-hover:text-[#FF4FA3]">
        ✦
      </span>

      <div className="flex min-w-0 items-start gap-4">

        {/* Complete / incomplete button */}
        <button
          onClick={() => onToggleTask(task.id)}
          aria-label="Toggle task completion"
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black transition ${
            task.completed
              ? "border-[#FF4FA3] bg-[#FF4FA3] text-white"
              : "border-[#FF6FB5]/60 text-transparent hover:border-[#FF4FA3] hover:bg-[#FF4FA3]/10"
          }`}
        >
          {task.completed ? "✓" : "✓"}
        </button>

        {/* Task information */}
        <div className="min-w-0">

          <h3
            className={`text-lg font-bold sm:text-xl ${
              task.completed
                ? "text-[#8F94A6] line-through"
                : "text-white"
            }`}
          >
            {task.title}
          </h3>

          {/* Category and priority */}
          <div className="mt-2 flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-[#FF4FA3]/10 px-3 py-1 text-xs font-bold text-[#FF91C7]">
              {task.category}
            </span>

            <span className="text-[#5F6475]">
              •
            </span>

            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold ${
                task.priority === "High"
                  ? "border-[#FF4FA3]/40 bg-[#FF4FA3]/10 text-[#FF6FB5]"
                  : task.priority === "Medium"
                  ? "border-[#FF91C7]/40 bg-[#FF91C7]/10 text-[#FFB0D3]"
                  : "border-[#FFC1DE]/40 bg-[#FFC1DE]/10 text-[#FFC1DE]"
              }`}
            >
              {task.priority}
            </span>

          </div>
        </div>
      </div>

      {/* Edit / delete buttons */}
      <div className="flex gap-2 sm:shrink-0">

        <button
          onClick={() => onStartEditing(task.id)}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-[#C5C8D6] transition hover:border-[#FF4FA3]/40 hover:text-[#FF91C7]"
        >
          Edit
        </button>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="rounded-xl border border-[#FF4FA3]/20 px-4 py-2 text-sm font-bold text-[#FF91C7] transition hover:bg-[#FF4FA3] hover:text-white"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TodoItem2;