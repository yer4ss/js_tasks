let taskInput = document.getElementById("task");
let addButton = document.getElementById("add");
let tasksList = document.getElementById("tasks");

addButton.addEventListener("click", () => {
   const taskText = taskInput.value.trim();
   if (taskText !== "") {
      tasksList.innerHTML += `<ol>${taskText}</ol>`;
      taskInput.value = "";
   }
});