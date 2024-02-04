// NODE es SINGLE THREADS es decir, de un solo hilo de ejecucion. 
// Se ayuda del ASINCRONISMO para ejecutar procesos dentro de un event loop y una pila de espera

console.log('Inicio')

setTimeout(() => {
    console.log("UNO")
}, 3000)
setTimeout(() => {
    console.log("DOS")
}, 0)
setTimeout(() => {
    console.log("TRES")
}, 0)

console.log('Fin')
