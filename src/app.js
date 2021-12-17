// Create a TaskList class with the following functionalitty:

let taskList = [];

// • Should add tasks with name and priority.
// If the priority is missing the value 0 will be used instead.
// Also, the name of the tasks must be unique.
function addTask(name, priority = 0) {

    let isExist = false;
    for (let i = 0; i < taskList.length; i++) {
        if (name === taskList[i].name) {
            isExist = true;
            break;
        }
    }
    if (!isExist) {
        taskList.push({ neme, priority });
    }
}

// • Should remove tasks with the specified name. A status message should be printed in the console.
function removeTask(name) {

    let isDeleted = false;
    for (let i = 0; i < taskList.length; i++) {
        if (name === taskList[i].name) {
            taskList.splice(i, 1);
            isDeleted = true;
            console.log('Task deleted successfully!');
        }
    }
    if (!isDeleted) {
        console.log('This task does not exist!');
    }
}

// • Should sort the tasks ascending by name
function sortByName() {

    // revise how sort finction works
    // taskList.sort();
}

// • Should sort the tasks ascending by priority
function sortByPriority() {

    taskList.sort((a, b) => a.priority - b.priority);
    console.log(taskList);
}

// • Should print all the tasks.
function printAllTask() {

    taskList.forEach((task) => console.log(task.name, task.priority));
}

// • Should print the tasks filtered by a call back function received as parame-ter.
function printTask(name) {
    taskList.filter((task) => {
        if (task.name === name) {
            console.log(task);
        }
    })
}