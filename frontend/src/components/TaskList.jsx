import TaskItem from "./TaskItem";

function TaskList({ tasks, fetchTasks }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center" }}>No tasks found</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
}

export default TaskList;