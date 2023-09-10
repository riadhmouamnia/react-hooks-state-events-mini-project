import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [buttonCategory, setButtonCategory] = useState("");

  // delete task on click
  function handleDelete(taskText) {
    const newTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(newTasks);
  }

  // add task when the from submitted
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  // filter tasks
  const filtredTasks = tasks.filter((task) => {
    if ((buttonCategory === "All") | (buttonCategory === "")) return true;
    return task.category === buttonCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setButtonCategory={setButtonCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filtredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
