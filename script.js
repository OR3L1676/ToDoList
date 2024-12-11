let idNumber = 0;
let tasks = [];
function createTaskObject(text) {
  return {
    text,
    id: idNumber,
  };
}

function displayTasks() {
  let listElement = document.getElementsByClassName("toDoList__tasks")[0];
  listElement.innerHTML = "";
  //   const list2 = listElement.appendChild(`<li class="toDoList__tasks-li" id="${task.id}">${task.text} <button onclick="deleteTask(${task.id})" id="${task.id}" class="toDoList__tasks-button">X</button></li>`)
  const list = tasks
    .map(
      (task) =>
        `<li class="toDoList__tasks-li" id="${task.id}">${task.text} <button onclick="deleteTask(${task.id})" id="${task.id}" class="toDoList__tasks-button">X</button></li>`
    )
    .join("");
  listElement.innerHTML = list;
}

function addTask() {
  let inputText = document.getElementById("taskInput");
  if (inputText.value == "") {
    return alert("Add a task");
  }
  const task = createTaskObject(inputText.value);
  tasks.push(task);
  inputText.value = "";
  ++idNumber;
  console.log(tasks);
  displayTasks();
}

function deleteTask(id) {
  console.log(id);
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  displayTasks();
}

document.getElementById("taskButton").addEventListener("click", addTask);
