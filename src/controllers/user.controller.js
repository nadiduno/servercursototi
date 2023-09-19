const curso = (req, res) => {
    const soma = 1 + 1
    res.send({
        'soma': soma
    })
}

module.exports = { curso }