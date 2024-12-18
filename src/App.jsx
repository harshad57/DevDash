import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Snippets from "./pages/Snippets";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/snippets" element={<Snippets />} />
      </Routes>
    </>
  );
};

export default App;