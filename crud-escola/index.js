const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
// TODO: Membro 1 - Gustavo Simoes 
const alunosRouter = require('./routes/alunos');
app.use('/alunos', alunosRouter);



// TODO: Membro 2 - Gabriel Ataides


app.listen(3000, () => {
console.log('Server is running on http://localhost:3000')
})