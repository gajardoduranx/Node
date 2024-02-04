import { createServer } from 'node:http'

const server = createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Hola Mundo!!</h1>')
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Sobre nosotros</h1>')
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Contacto</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Página no encontrada</h1>')
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server http running on http://127.0.0.1:3000')
})