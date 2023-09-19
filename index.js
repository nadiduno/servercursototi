const express = require('express')
const userRoute = require('./src/routes/user.router')
const app = express()

#Rota principal

app.get('/', (req, res) => {
    res.send('Plataforma de Cursos')
})

#Rota Curso

app.use('/curso', userRoute)

app.listen(3000)