import {
  EmptyState,
  FilterBar,
  Header,
  Stats,
  TodoForm,
  TodoList,
} from "./components";

import { useState } from "react";
import TodoList2 from "./components/TodoList2";
import TodoForm2 from "./components/TodoForm2";
import FilterBar2 from "./components/FilterBar2";
function App() {

    
//  tasks -> the current list of task,  setTasks -> the function we use to change that list
// each task is an object
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "finish react practice",
      category: "study",
      priority: "high",
      completed: false
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
  ])

  // making the buttons work now
  // this function receives the id of the task we clicked 
  // .map goes through every task 

  const toggleTask = (id) => { 
    setTasks( (currentTasks)  => 
      currentTasks.map( (task)  => 
        task.id === id 
          ? { ...task, completed: !task.completed } : task
       )
    );
  };

  // delete button working : instead of changing one task 
  // we remove that task from the list 

  const deleteTask = (id) => {
    setTasks( (currentTasks) => 
      currentTasks.filter( (task) => task.id !== id)
    );
  };


  // MAIN FUNCTIONALITY : ADDING TASKS 
  const [newTask, setNewTask] = useState("");
  // now to make category, priority selectable by user 
  const [newCategory, setNewCategory] = useState("Personal");
  const [newPriority, setNewPriority] = useState("Medium");

  const addTask = () => {
    if (!newTask.trim()) return ;

    const task = { 
      id: Date.now(),
      title : newTask, 
      category : newCategory , 
      priority : newPriority ,
      completed: false,
    }; 

    setTasks( (currentTasks) => [...currentTasks, task]);
    setNewTask("");
    setNewCategory("Personal");
    setNewPriority("Medium");
  };

  // now making the stats work - 
  const totalTasks = tasks.length ; 

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length ; 

  const remainingTasks = totalTasks - completedTasks ; 


  // for making the ffilterbar work now 
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter( (task)=> {
    if ( filter == "pending"){
      return !task.completed;
    }
    if ( filter == "completed"){
      return task.completed;
    }
    return true;
  });

    //EDIT BUTTON 
    const [editingTaskId, setEditingTaskId ] = useState(null);

    //edit function 

    const startEditing = (id) => { 
      setEditingTaskId(id);
    }

    //creating save button 
    const saveTask = (id, updatedTask) => {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === id
            ? { ...task, ...updatedTask }
            : task
        )
      );

      setEditingTaskId(null);
    };


  return (
    <div className="min-h-screen bg-[#070914] px-5 py-12 text-white">
      <main className="relative mx-auto max-w-4xl">

        <Header />

        <div className="mt-10 space-y-6">

      <TodoForm2
          newTask={newTask}
          setNewTask={setNewTask}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          onAddTask={addTask}
      />

      <Stats
        total ={totalTasks}
        completed = {completedTasks}
        remaining = {remainingTasks}  
      />

      <FilterBar2
        filter = {filter}
        setFilter={setFilter}
      />

      <TodoList2
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        editingTaskId={editingTaskId}
        onStartEditing={startEditing}
        onSaveTask={saveTask}
        onCancelEditing={() => setEditingTaskId(null)}
      /> 
      {/* we pass the state down as a prop, 
      we are sending three things to TodoList 
      1. tasks : actual task data 
      2. onToggleTask : the function that changes the task 
      3.onDelete Taks : the function that deletes the task 
      */}

      <EmptyState />
      </div>
      </main>
    </div>
  );
}

export default App;