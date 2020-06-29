// Variables
// const taskInput = document.getElementById("new_task_input")
// const taskButton = document.getElementById("new_task_button")
// const taskList = document.getElementById("task_list")

const taskInput = $("#new_task_input")
const taskButton = $("#new_task_button")
const taskList = $("#task_list")

// Functions

function addTask() {
    const input = taskInput.val()
    const newTaskString = `
        <div class="task_item">
            <p class="task_name">${input}</p>
            <div class="delete_wrapper" onclick="animateAway(event)">
                <img src="./Assets/trashcan.png"/>
            </div>
        </div>
        `
const newTask = document.createElement("div")
newTask.innerHTML = newTaskString
taskList.append(newTask)
}

const deleteAnimationProperties = {
    marginLeft: "125%",
    opacity: 0
}

function deleteTask(element) {
element.remove()
}

function animateAway(event) {
    const eventTarget = $(event.target)
    const taskItem = eventTarget.parent().parent()
    taskItem.animate(deleteAnimationProperties, 1000, () => deleteTask(taskItem))
}

// Events

taskButton.click(addTask);
