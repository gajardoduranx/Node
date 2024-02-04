// ToDoList en linea de comandos
// readline - Interfaz para comunicación con linea de comandas
// chalk - npm - colores en CLI
// process - hilo de proceso. input: stdin. output: stdout
import { readFileSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline';
import chalk from 'chalk';

const tasks = [];
const DB_FILE = 'db-tasks.txt';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
function loadTasks() {
    try{
        const data = readFileSync(DB_FILE, 'utf-8');
        const lines = data.split('\n');
        tasks.length = 0;

        lines.forEach(line => {
            if (line.trim() !== "") {
                const [task, completed] = line.split('|');
                tasks.push({
                    task,
                    completed: completed === 'true'
                })
            }
        })
        console.log(chalk.greenBright('Tareas cargadas'));
    } catch {
        console.log(chalk.redBright('No se pudo cargar la tarea'));
    }
}
function saveTask() {
    const data = tasks.map(task => `${task.task}|${task.completed}`).join('\n');
    writeFileSync(DB_FILE, data, 'utf-8');
    console.log(chalk.greenBright('Tareas guardadas'));
}
function addTask() {
    rl.question('Ingrese una tarea: ', (task) => {
        tasks.push({
            task,
            completed: false
        })
        console.log(chalk.greenBright('Tarea agregada'));
        saveTask()
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


loadTasks()
displayMenu();
chooseOption();