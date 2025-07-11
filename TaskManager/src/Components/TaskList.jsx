// src/components/TaskList.jsx
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>No tasks yet! Add one above 👆</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            backgroundColor: "#f9f9f9",
            margin: "10px auto",
            padding: "10px 20px",
            width: "60%",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              style={{ marginRight: "10px" }}
            />
            {task.title}
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            style={{
              backgroundColor: "crimson",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
