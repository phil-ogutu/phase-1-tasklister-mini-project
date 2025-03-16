document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  let formInput = document.querySelector("#new-task-description")
  let taskList = document.querySelector("#tasks")

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let taskText = formInput.value.trim()
    let taskItem = document.createElement("li")

    taskItem.textContent = taskText;
    taskList.appendChild(taskItem)
    event.target.reset()

    let deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.style.marginLeft = "10px"
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem)
    })

    taskItem.appendChild(deleteButton);

  });
});
