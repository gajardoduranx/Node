import { createServer } from 'node:http'
import { get } from 'node:https'

const hostname = 'localhost'
const port = 3000
const options = {
    host: 'jonmircha.com',
    port: 443,
    path: '/cursos'
}
let htmlCode = ''

const httpClient = (res) => {
    console.log(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`)

    res.on('data', (chunk) => {
        htmlCode += chunk
        console.log(chunk, chunk.toString())
    })
}

const httpError = (err) => {
    console.log(`El sitio ${options.host} ha respondido. Código: ${err.code}. Mensaje: ${err.message}`)
}

const webServer = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(htmlCode)
})

// Instancia cliente HTTP o HTTPs
get(options, httpClient).on('error', httpError)

// Instancia servidor local
webServer.listen(port, hostname, () => {
    console.log(`Servidor web escuchando en http://${hostname}:${port}`)
})