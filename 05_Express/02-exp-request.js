import express from 'express'

const app = express()
// http://localhost:3000
app.get('/', (req, res) => {
    res.end('<h1>Hola mundo dese express</h1>')
})
// http://localhost:3000/user/19-jorge-40
app.get('/user/:id-:name-:age', (req, res) => {
    const { id, name, age } = req.params 
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.end(`
        <h1>Hola ${name}. Tu id es ${id} y tienes ${age} años</h1>`
    )
})

// http://localhost:3000/search?id=19&name=jorge
app.get('/search', (req, res) => {
    const { id, name } = req.query
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.end(`
        <h1>Hola ${name}. Tu id es ${id}</h1>`
    ) 
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})