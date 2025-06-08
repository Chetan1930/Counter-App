import React, { useEffect, useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, settaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() === "") return;

    const newTask = {
      _id: Date.now(),
      text: task,
      completed: false,
    };

    const updateList = [...taskList, newTask];

    settaskList(updateList);
    setTask("");
  }

  useEffect(() => {
    const savedlist = JSON.parse(localStorage.getItem("allContent"));

    if (savedlist) settaskList(savedlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("allContent", JSON.stringify(taskList));
  }, [taskList]);

  function deleteit(id) {
    const updatedlist = taskList.filter((task) => {
      return task._id !== id;
    });

    settaskList(updatedlist);
  }
  function toggleTask(id) {
    const updatedList = taskList.map((curr) =>
      curr._id === id ? { ...curr, completed: !curr.completed } : curr
    );

    settaskList(updatedList);
  }
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter the task description"
        />
        <button type="submit">Add Task</button>
      </form>

      {taskList.length === 0 ? (
        <h2>No Task</h2>
      ) : (
        <ol>
          {taskList.map((task) => (
            <li
              key={task._id}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "white",
              }}
            >
              {" "}
              {task.text}{" "}
              <button
                className="completed"
                onClick={() => toggleTask(task._id)}
              >
                Completed
              </button>{" "}
              <button className="delete" onClick={() => deleteit(task._id)}>
                Delete
              </button>{" "}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default App;
