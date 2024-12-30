// script.js

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  // Mark task as completed
  taskContent.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Delete task
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = ""; // Clear input field
}

// Add event listener to button
addTaskButton.addEventListener("click", addTask);

// Add task with Enter key
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
