import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleCategorySelect(event) {
    setSelectedCategory(event.target.textContent);
  }

  function handleNewTask(task) {
    setTasks([...tasks, task]);
  }

  function handleTaskDelete(taskToDelete) {
    setTasks(tasks.filter(task => task!==taskToDelete))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategorySelect={handleCategorySelect}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
