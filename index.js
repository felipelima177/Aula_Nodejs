const express = require('express')
const app = express()

app.use(express.json())


let personList = []

const port = 3000

app.get('/visualizar', (req, res) => {
    res.send(personList)
})

app.get('/params/:id', (req, res) =>{
    const { id } = req.params

    res.send(id)
})

app.post('/cadastrar', (req, res) => {
    const { name, age} = req.body
    personList.push({name, age})
    res.send(`Usuário recebido!!! nome do usuário ${name}`)
})

app.delete('/deletar', (req, res) =>{
    const {name, age} = req.body
    personList.pop()
    res.send(`Usuário deletado com sucesso! ${name}`)
})

app.put('/update', (req, res) =>{
    const{name, age} = req.body
    personList.put()
    res.send(`Dados atualizados com sucesso! ${name}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("oii")