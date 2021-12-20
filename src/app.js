// Create a TaskList class with the following functionalitty:
class Todo {

    constructor() {

        this.taskList = [];
    }

    // • Should add tasks with name and priority.
    // If the priority is missing the value 0 will be used instead.
    // Also, the name of the tasks must be unique.
    addTask(name, priority = 0) {

        let taskList = this.taskList;
        let isExist = false;
        for (let i = 0; i < taskList.length; i++) {
            if (name === taskList[i].name) {
                isExist = true;
                console.log('This task is alraedy exists')
                break;
            }
        }
        if (!isExist) {
            taskList.push({ name, priority });
        }
    }

    // • Should remove tasks with the specified name. A status message should be printed in the console.
    removeTaskByName(name) {

        let taskList = this.taskList;
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

    // • Should print all the tasks.
    printAllTask() {

        this.taskList.forEach((task) => console.log('Task name:', task.name, 'Priority:', task.priority));
    }

    // • Should print the tasks filtered by a call back function received as parame-ter.
    printTask(value) {

        if (typeof value === 'string') {
            this.printfilteredTask(task => task.name === value);
        }

        if (typeof value === 'number') {
            this.printfilteredTask(task => task.priority === value);
        }
    }

    printfilteredTask(callback) {

        console.log(this.taskList.filter(callback));
    }


    // • Should sort the tasks ascending by name
    sortByName() {

        this.taskList.sort((currentTask, nextTask) => {
            if (currentTask.name < nextTask.name) return -1;
            if (currentTask.name > nextTask.name) return 1;
            return 0;
        });
    }

    // • Should sort the tasks ascending by priority
    sortByPriority() {

        this.taskList.sort((currentTask, nextTask) => currentTask.priority - nextTask.priority);
    }
}
