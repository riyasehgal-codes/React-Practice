import { useEffect, useState } from "react";

import { EmptyState, Header, Stats } from "./components";

import TodoForm2 from "./components/TodoForm2";
import TodoList2 from "./components/TodoList2";
import FilterBar2 from "./components/FilterBar2";


function App() {
  /*
    --------------------------------------------------
    TASK STATE
    --------------------------------------------------

    We first check LocalStorage to see if tasks
    already exist.

    If they do, we load them.

    If they don't, we create a few example tasks.
  */

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "finish react practice",
            category: "Study",
            priority: "High",
            completed: false,
          },
          {
            id: 2,
            title: "Complete NLP assignment",
            category: "College",
            priority: "Medium",
            completed: false,
          },
          {
            id: 3,
            title: "Go to the gym",
            category: "Personal",
            priority: "Low",
            completed: true,
          },
        ];
  });


  /*
    --------------------------------------------------
    SAVE TASKS TO LOCAL STORAGE
    --------------------------------------------------

    Every time "tasks" changes, this effect runs
    and saves the updated list in the browser.

    This means refreshing the page does NOT delete
    the user's tasks.
  */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  /*
    --------------------------------------------------
    FORM STATE
    --------------------------------------------------

    These states control the values inside the
    "Add Task" form.
  */

  const [newTask, setNewTask] = useState("");

  const [newCategory, setNewCategory] =
    useState("Personal");

  const [newPriority, setNewPriority] =
    useState("Medium");


  /*
    --------------------------------------------------
    ADD TASK
    --------------------------------------------------

    Creates a new task and adds it to the existing
    task array.
  */

  const addTask = () => {

    // Prevent empty tasks from being added
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      category: newCategory,
      priority: newPriority,
      completed: false,
    };

    /*
      We use the previous task list and create
      a NEW array instead of modifying the old one.
    */
    setTasks((currentTasks) => [
      ...currentTasks,
      task,
    ]);

    // Reset the form after adding
    setNewTask("");
    setNewCategory("Personal");
    setNewPriority("Medium");
  };


  /*
    --------------------------------------------------
    TOGGLE TASK
    --------------------------------------------------

    Changes a task from incomplete → complete
    or complete → incomplete.
  */

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };


  /*
    --------------------------------------------------
    DELETE TASK
    --------------------------------------------------

    filter() creates a new array without the
    selected task.
  */

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== id
      )
    );
  };


  /*
    --------------------------------------------------
    TASK STATISTICS
    --------------------------------------------------
  */

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks =
    totalTasks - completedTasks;


  /*
    Calculate percentage for the progress bar.

    If there are no tasks, progress is 0%.
  */

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );


  /*
    --------------------------------------------------
    FILTER STATE
    --------------------------------------------------

    "all"       → every task
    "pending"   → unfinished tasks
    "completed" → finished tasks
  */

  const [filter, setFilter] =
    useState("all");


  /*
    Create the list that should actually be displayed
    on the screen.
  */

  const filteredTasks = tasks.filter((task) => {

    if (filter === "pending") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });


  /*
    --------------------------------------------------
    EDITING STATE
    --------------------------------------------------

    Stores the ID of the task currently being edited.

    null means no task is being edited.
  */

  const [editingTaskId, setEditingTaskId] =
    useState(null);


  /*
    Start editing a task.
  */

  const startEditing = (id) => {
    setEditingTaskId(id);
  };


  /*
    --------------------------------------------------
    SAVE EDITED TASK
    --------------------------------------------------

    Updates only the task being edited.
  */

  const saveTask = (id, updatedTask) => {

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      )
    );

    // Exit edit mode
    setEditingTaskId(null);
  };


  /*
    --------------------------------------------------
    PAGE UI
    --------------------------------------------------
  */

  return (
    <div className="min-h-screen px-5 py-12 text-white">

      <main className="mx-auto max-w-4xl">

        {/* App logo + title */}
        <Header />


        <div className="mt-12 space-y-7">

          {/* Add task form */}
          <TodoForm2
            newTask={newTask}
            setNewTask={setNewTask}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            newPriority={newPriority}
            setNewPriority={setNewPriority}
            onAddTask={addTask}
          />


          {/* Total / Done / Left */}
          <Stats
            total={totalTasks}
            completed={completedTasks}
            remaining={remainingTasks}
          />


          {/* Progress section */}
          <section className="rounded-3xl border border-white/10 bg-[#111320] p-6">

            <div className="flex items-end justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <span className="text-lg text-[#FF4FA3]">
                    ✦
                  </span>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF91C7]">
                    your progress
                  </p>

                </div>

                <p className="mt-2 text-sm text-[#8F94A6]">
                  Keep going, pretty. You've got this.
                </p>

              </div>


              {/* Percentage */}
              <p className="text-3xl font-black text-[#FF4FA3]">
                {progress}%
              </p>

            </div>


            {/* Progress bar */}
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#090a12]">

              <div
                className="h-full rounded-full bg-linear-to-r from-[#FF4FA3] via-[#FF6FB5] to-[#FFC1DE] transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>


            {/* Progress labels */}
            <div className="mt-3 flex justify-between text-xs font-bold">

              <span className="text-[#FF91C7]">
                {completedTasks} done
              </span>

              <span className="text-[#777B8B]">
                {remainingTasks} left
              </span>

            </div>

          </section>


          {/* Filters */}
          <FilterBar2
            filter={filter}
            setFilter={setFilter}
          />


          {/* Task list / empty state */}
          {filteredTasks.length > 0 ? (

            <TodoList2
              tasks={filteredTasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              editingTaskId={editingTaskId}
              onStartEditing={startEditing}
              onSaveTask={saveTask}
              onCancelEditing={() =>
                setEditingTaskId(null)
              }
            />

          ) : (

            <EmptyState />

          )}

        </div>

      </main>

    </div>
  );
}

export default App;