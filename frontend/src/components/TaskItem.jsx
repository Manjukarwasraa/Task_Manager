import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/tasks";

function TaskItem({ task, fetchTasks }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const toggleTask = async () => {
    await axios.patch(`${API}/${task._id}`);
    fetchTasks();
  };

  const deleteTask = async () => {
    await axios.delete(`${API}/${task._id}`);
    fetchTasks();
  };

  const updateTask = async () => {
    if (!newTitle.trim()) return;

    await axios.patch(`${API}/${task._id}`, {
      title: newTitle,
    });

    setEditing(false);
    fetchTasks();
  };

  return (
    <div className="task">
      {editing ? (
        <input
          className="edit-input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      )}

      <div className="actions">
        <button onClick={toggleTask}>✔</button>

        {editing ? (
          <button onClick={updateTask}>💾</button>
        ) : (
          <button onClick={() => setEditing(true)}>✏️</button>
        )}

        <button onClick={deleteTask}>❌</button>
      </div>
    </div>
  );
}

export default TaskItem;