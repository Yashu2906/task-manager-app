import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <TaskProvider>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            gap: "40px",
            padding: "20px",
            fontSize: "20px",
            justifyContent: "center",
            fontWeight: "700",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
};

export default App;
