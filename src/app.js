// Create a TaskList class with the following functionalitty:
class Todo {

    constructor() {
        this.taskList = [];
    }

    // • Should add tasks with name and priority.
    // If the priority is missing the value 0 will be used instead.
    // Also, the name of the tasks must be unique.
    addTask(name, priority = 0) {
        for (let task of this.taskList) {
            if (name === task.name) {
                console.log('This task is alraedy exists')
                return;
            }
        }
        this.taskList.push({ name, priority });
    }

    // • Should remove tasks with the specified name. A status message should be printed in the console.
    removeTaskByName(name) {
        this.taskList.forEach((task, index) => {
            if (name === task.name) {
                this.taskList.splice(index, 1);
                console.log('Task deleted successfully!');
                return;
            }
        })
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
