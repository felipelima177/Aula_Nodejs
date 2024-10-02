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

// Cadastrar usuário no array
app.post('/cadastrar', (req, res) => {
    const { name, age} = req.body
    const id = personList.length
    personList.push({id, name, age})
    res.send(`Usuário recebido!!!\nID: ${id}\n nome do usuário ${name}, \nidade: ${age}`)
})

// Deletar usuário do array
app.delete('/deletar/:id', (req, res) => {
    const {id} = req.params
    if (personList[id -1]){
        personList.splice(id -1, 1)
        res.send('Usuário deletado com sucesso!')
    }else{
        res.status(404).send('Usuário não encontrado!')
    }
})


// Atualizar array
app.put('/atualizar/:id', (req, res) =>{
    const {id} = req.params
    const{name, age} = req.body
    try{
    personList[id -1] = {id, name, age}
    res.send(`Dados atualizados com sucesso! ${id}\nNome: ${name} \nIdade: ${age}`)
    }catch(err){
        res.send(`Usuário não encontrado`)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

