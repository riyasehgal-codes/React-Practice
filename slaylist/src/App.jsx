import {
  EmptyState,
  FilterBar,
  Header,
  Stats,
  TodoForm,
  TodoList,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-[#070914] px-5 py-12 text-white">
      <main className="mx-auto max-w-4xl">

        <Header />

        <div className="mt-10 space-y-6">

      <TodoForm />

      <FilterBar />

      <TodoList />

      <EmptyState />
      </div>
      </main>
    </div>
  );
}

export default App;