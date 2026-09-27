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

  const [editTitle, setEditTitle] = useState(task.title);
  const [editCategory, setEditCategory] = useState(task.category);
  const [editPriority, setEditPriority] = useState(task.priority);

  const handleSave = () => {
    onSaveTask(task.id, {
      title: editTitle,
      category: editCategory,
      priority: editPriority,
    });
  };

  if (isEditing) {
    return (
      <div className="rounded-2xl border border-[#36b9ff]/40 bg-[#0e1220] p-5 shadow-[0_0_25px_rgba(54,185,255,0.08)]">

        <div className="flex flex-col gap-3">

          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full rounded-xl border border-[#252c46] bg-[#080b15] px-4 py-3 text-sm text-white outline-none focus:border-[#36b9ff]"
          />

          <div className="flex flex-col gap-3 sm:flex-row">

            <select
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              className="flex-1 rounded-xl border border-[#252c46] bg-[#080b15] px-4 py-3 text-sm text-white outline-none focus:border-[#36b9ff]"
            >
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
              <option value="College">College</option>
              <option value="Work">Work</option>
            </select>

            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
              className="flex-1 rounded-xl border border-[#252c46] bg-[#080b15] px-4 py-3 text-sm text-white outline-none focus:border-[#36b9ff]"
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>

          </div>

          <div className="flex gap-2">

            <button
              onClick={handleSave}
              className="rounded-lg bg-[#36b9ff] px-4 py-2 text-xs font-semibold text-white transition hover:shadow-[0_0_15px_rgba(54,185,255,0.4)]"
            >
              Save
            </button>

            <button
              onClick={onCancelEditing}
              className="rounded-lg border border-[#252c46] px-4 py-2 text-xs text-[#78829f] transition hover:text-white"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div
      className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-200 ${
        task.completed
          ? "border-[#36b9ff]/30 bg-[#0b101c] opacity-70"
          : "border-[#252c46] bg-[#0e1220] hover:-translate-y-0.5 hover:border-[#ff3b9d]/60 hover:shadow-[0_0_25px_rgba(255,59,157,0.12)]"
      }`}
    >

      <div className="flex items-center gap-4">

        <button
          onClick={() => onToggleTask(task.id)}
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs transition-all duration-200 ${
            task.completed
              ? "border-[#36b9ff] bg-[#36b9ff] text-white shadow-[0_0_15px_rgba(54,185,255,0.5)]"
              : "border-[#ff3b9d] text-[#ff3b9d] hover:bg-[#ff3b9d] hover:text-white hover:shadow-[0_0_15px_rgba(255,59,157,0.5)]"
          }`}
        >
          {task.completed ? "✓" : "○"}
        </button>

        <div>

          <h3
            className={`font-medium ${
              task.completed
                ? "text-[#68708d] line-through"
                : "text-white"
            }`}
          >
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

        <button
          onClick={() => onStartEditing(task.id)}
          className="rounded-lg px-3 py-2 text-xs text-[#78829f] transition-all duration-200 hover:bg-[#151b2d] hover:text-[#36b9ff]"
        >
          Edit
        </button>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="rounded-lg px-3 py-2 text-xs text-[#78829f] transition-all duration-200 hover:bg-[#151b2d] hover:text-[#ff4057]"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem2;