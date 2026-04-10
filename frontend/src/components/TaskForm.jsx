import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/tasks";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title.trim()) return alert("Enter task");

    await axios.post(API, { title });
    setTitle("");
    fetchTasks();
  };

  return (
    <div className="input-group">
      <input
        placeholder="Enter new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TaskForm;