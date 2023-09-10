import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map(({ text, category }, i) => (
        <Task
          key={i + text}
          text={text}
          category={category}
          handleDelete={() => handleDelete(text)}
        />
      ))}
    </div>
  );
}

export default TaskList;
