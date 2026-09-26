import TodoItem2 from "./TodoItem2";

function TodoList2({tasks}) {
  return (
    <section className="space-y-3">
      {tasks.map( (task) => (
        <TodoItem2
          key={task.id}
          task={task}
        />
          
      ))}
    </section>
  );
}

export default TodoList2;

// we are receiving tasks from the parent component
// tasks.map() goes through every task in the array amd creates a 
// TodoItem2 for it 