import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1>')
    console.log(req)
    console.log(res)
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})