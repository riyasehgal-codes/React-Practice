import TodoItem2 from "./TodoItem2";

function TodoList2({
  tasks,
  onToggleTask,
  onDeleteTask,
  editingTaskId,
  onStartEditing,
  onSaveTask,
  onCancelEditing,
}) {
  return (
    <section className="space-y-3">

      {tasks.map((task) => (
        <TodoItem2
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          isEditing={editingTaskId === task.id}
          onStartEditing={onStartEditing}
          onSaveTask={onSaveTask}
          onCancelEditing={onCancelEditing}
        />
      ))}

    </section>
  );
}

export default TodoList2;