import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";

const API = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setTasks(res.data);
    } catch {
      alert("Error fetching tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm fetchTasks={fetchTasks} />
      <Filter filter={filter} setFilter={setFilter} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskList tasks={filteredTasks} fetchTasks={fetchTasks} />
      )}
    </div>
  );
}

export default App;