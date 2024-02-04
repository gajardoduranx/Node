// ToDoList en linea de comandos
// readline - Interfaz para comunicación con linea de comandas
// chalk - npm - colores en CLI
// process - hilo de proceso. input: stdin. output: stdout
import { createInterface } from 'node:readline';
import chalk from 'chalk';

const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
function addTask() {
    rl.question('Ingrese una tarea: ', (task) => {
        tasks.push({
            task,
            completed: false
        })
        console.log(chalk.greenBright('Tarea agregada'));
        chooseOption();
    })
}
function listsTasks () {
    if(tasks.length === 0) {
        console.log(chalk.redBright('No hay tareas'));
        return
    }
    console.log(chalk.yellow.bold('--- Tareas ---'));
    tasks.forEach((task, index) => {
        let status = task.completed ? 'Completada' : 'Pendiente';
        console.log(`${index + 1}.- ${task.task} - Status: (${status})`);
    })
    chooseOption();
}
    
function deleteTask() {
    rl.question('Ingrese el número de la tarea a eliminar: ', (taskNumber) => {
        const index = parseInt(taskNumber) - 1;
        if(isNaN(index) || index < 0 || index >= tasks.length) {
            console.log(chalk.redBright('Número de tarea inválido'));
            chooseOption();
        } else {
            tasks.splice(index, 1);
            console.log(chalk.greenBright('Tarea eliminada'));
            chooseOption()
        }
    })
}
function chooseOption() {
    rl.question('Ingrese una opción: ', (option) => {
        if(option === '1') {
            addTask();
        } else if(option === '2') {
            listsTasks();
            chooseOption();
        } else if(option === '3') {
            deleteTask();
            chooseOption();
        } else if(option === '4') {
            console.log(chalk.redBright('Adios'));
            rl.close()
        } else if(option === "opciones") {
            displayMenu()
            chooseOption()
        } else {
            console.log(chalk.redBright('Opción inválida'));
            displayMenu();
            chooseOption();
        }
    })
}

function displayMenu() {
    console.log(chalk.yellow.bold('-- ToDo App --'));
    console.log(chalk.blue('1.- Agregar tarea'));
    console.log(chalk.blue('2.- Listar tareas'));
    console.log(chalk.blue('3.- Eliminar tarea'));
    console.log(chalk.redBright('4.- Salir'));
    chooseOption();
} 

displayMenu();
chooseOption();