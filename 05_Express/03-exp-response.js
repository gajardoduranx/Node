import express from 'express'
import { resolve } from 'path'

const app = express()

// Reponse: Texto - send and end
app.get('/', (req, res) => {
    res.send('Hello World! with send method')
    // res.end('<h1>Hello World! with end method</h1>')
})
// Response: JSON
app.get('/json', (req, res) => {
    res.json({
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    })
})
// Response: File HTML
app.get('/file', (req, res) => {
    res.sendFile(resolve('index.html'))
})
// Response: plantilla template engine
app.get('/plantilla', (req, res) => {
    res.render(`plantilla`)
})
// Response: Redirección
app.get('/jonmircha', (req, res) => {
    // res.send('<h1>Bienvenidos a JonMircha.com</h1>')
    res.redirect(301, 'https://jonmircha.com')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})