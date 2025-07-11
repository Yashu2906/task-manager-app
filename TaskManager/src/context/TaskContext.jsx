import { createContext, useState } from "react";

// 1. Create context
export const TaskContext = createContext();

// 2. Create provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // 3. Add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // 4. Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // 5. Toggle completion
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};
