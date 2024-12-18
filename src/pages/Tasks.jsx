import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return; 
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Task Manager</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: "13px",
            width: "80%",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginTop:"20px",
            marginBottom:"30px",
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>

      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              backgroundColor: "#f9f9f9",
              padding: "0.5rem",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                flex: 1,
                paddingLeft: "10px",
              }}
            >
              {task.text}
            </span>
            <div>
              <button
                onClick={() => toggleTask(index)}
                style={{
                  padding: "8px 13px",
                  backgroundColor: task.completed ? "#FFB74D" : "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  padding: "8px 13px",
                  backgroundColor: "#F44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;