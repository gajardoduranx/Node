import { basename, dirname, extname } from 'path'

const ruta = '/ruta/principal/archivo.txt'

const nombreArchivo = basename(ruta)
const nombreCarpeta = dirname(ruta)
const extension = extname(ruta)

console.log('Nombre archivo: ', nombreArchivo)
console.log('Nombre carpeta: ', nombreCarpeta)
console.log('Extension: ', extension)