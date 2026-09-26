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

  return (
    <div className="min-h-screen bg-[#070914] px-5 py-12 text-white">
      <main className="relative mx-auto max-w-4xl">

        <Header />

        <div className="mt-10 space-y-6">

      <TodoForm />

      <FilterBar />

      <TodoList2 tasks={tasks} /> /
      {/* we pass the state down as a prop */}

      <EmptyState />
      </div>
      </main>
    </div>
  );
}

export default App;