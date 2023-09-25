const userService = require('../services/user.service')

const create = async (req, res) => {
    const { name, username, email, password, avatar } = req.body
    if (!name || !username || !email || !password) {
        return (res.status(400).send({ Message: "Campos obrigatórios por ser preenchidos" }))
    }

    const user = await userService.create(req.body)

    if(!user){
        return res.status(400).send({message: "Erro em criando usuario"})
    }

    res.status(201).send({
        Message: "Usuário criado com sucesso",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar
        }
    })
}

module.exports = { create }