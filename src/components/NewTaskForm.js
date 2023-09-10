import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [task, setTask] = useState({
    text: "",
    category: "Code",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [name]: value });
  }

  return (
    <form
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(task);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={task.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleChange}>
          {categories.map((category) =>
            category === "All" ? null : (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
