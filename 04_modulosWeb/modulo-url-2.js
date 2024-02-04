import { format } from 'url'

const urlObj = {
    protocol: 'http',
    hostname: 'www.ejemplo.com',
    port: 8080,
    pathname: '/api/users',
    query: { parametro1: 'valor1', parametro2: 'valor2' }
}

const urlString = format(urlObj)

console.log('URL completa:', urlString)