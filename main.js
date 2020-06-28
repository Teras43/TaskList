// Variables
const taskInput = document.getElementById("new_task_input")
const taskButton = document.getElementById("New_Task_Button")
const taskList = document.getElementById("task_list")

// Functions
function addTask() {
    const input = taskInput.value
    const newTaskString = `
        <div class="task_item">
            <p class="task_name">${input}</p>
            <div class="delete_wrapper" onclick="deleteTask(event)">
                <img src="./Assets/trashcan.png"/>
            </div>
        </div>
        `
const newTask = document.createElement("div")
newTask.innerHTML = newTaskString
taskList.appendChild(newTask)
}

function deleteTask(event) {
    const target = event.target
target.parentElement.parentElement.remove()
}

// Events
taskButton.addEventListener("click", addTask)