import React from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🚀 Task Manager App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
