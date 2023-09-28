const userService = require("../services/user.service")
const mongoose = require("mongoose")

const create = async (req, res) => {
    const { name, username, email, password, avatar } = req.body
    if (!name || !username || !email || !password) {
        return (res.status(400).send({ Message: "Campos obrigatórios por ser preenchidos" }))
    }

    const user = await userService.createService(req.body)

    if (!user) {
        return (res.status(400).send({ message: "Erro em criando usuario" }))
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

const findAll = async (req, res) => {
    const users = await userService.findAllService()
    if (users.length === 0) {
        return (resp.status(400).send({ message: "Não há usuários cadastrados" }))
    }

    res.send(users)
}

const findById = async (req, res) => {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return (res.status(400).send({ mesage: "ID inválido" }))
    }

    const user = await userService.findByIdService(id)
    if (!user) {
        return (res.status(400).send({ mesage: "Usuário não encontrado" }))
    }
    res.send(user)
}

const update = async (req, res) => {
    const { name, username, email, password, avatar } = req.body

    if (!name && !username && !email && !password) {
        return (res.status(400).send({ Message: "Inserte o campo a ser modoficado" }))
    }

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return (res.status(400).send({ mesage: "ID inválido" }))
    }

    const user = await userService.findByIdService(id)

    if (!user) {
        return (res.status(400).send({ mesage: "Usuário não encontrado" }))
    }

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar
    )

    res.send({ mesage: "Usuário atualizado com sucesso" })
}


module.exports = { create, findAll, findById, update }