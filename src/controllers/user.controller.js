const create = (req, res) => {
    const { name, username, email, password, avatar } = req.body
    if (!name || !username || !email || !password) {
        return (res.status(400).send({ Message: "Campos obrigatórios por ser preenchidos" }))
    }
    res.status(400).send({ 
        Message: "Usuário criado com sucesso" ,
        user:{
            name,
            username,
            email,
            avatar    
        }
    })
}

module.exports = { create }