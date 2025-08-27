  import { useState } from "react";

  function App() {
    // Task list
    const [tasks, setTasks] = useState([
      { id: 1, name: "Learn React", status: "Pending" },
      { id: 2, name: "Exercise", status: "Pending" }
    ]);

    // Input state
    const [newTask, setNewTask] = useState("");

    // Filter state
    const [filter, setFilter] = useState("All");

    // Add new task
    const addTask = () => {
      if (newTask.trim() === "") return;

      const task = {
        id: Date.now(),
        name: newTask,
        status: "Pending"
      };

      setTasks([...tasks, task]);
      setNewTask("");
    };

    // Change task status
    const toggleStatus = (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending"
            }
          : task
      );
      setTasks(updatedTasks);
    };

    // Delete a task
    const deleteTask = (id) => {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    };

    // Filter tasks
    const filteredTasks = tasks.filter((task) => {
      if (filter === "Pending") return task.status === "Pending";
      if (filter === "Completed") return task.status === "Completed";
      return true; // All
    });

    return (
      <div>
        <h1>Task Manager</h1>

        {/* Form to add task */}
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Write a task..."
        />
        <button onClick={addTask}>Add</button>

        {/* Filter buttons */}
        <div style={{ margin: "10px 0" }}>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Pending")}>Pending</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
        </div>

        {/* Filtered task list */}
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.status}{" "}
              <button onClick={() => toggleStatus(task.id)}>
                {task.status === "Pending" ? "Complete" : "Reopen"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default App;
