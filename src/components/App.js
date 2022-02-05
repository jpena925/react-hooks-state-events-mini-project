import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [tasksList, setTasksList] = useState([...TASKS])

function handleSelectedCategory(e){
  setSelectedCategory(() => e.target.textContent)
}

function handleNewTask(newItem){
  setTasksList([...tasksList, newItem])
}

function handleDeleteTask(item){
  setTasksList([...tasksList.filter(task => task.text !== item)])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={tasksList} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
