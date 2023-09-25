const mongoose = require("mongoose")
const username = encodeURIComponent("admin")
const password = encodeURIComponent("admin,toti*23")

const connectDatabase = () => {
    console.log("Wait connecting to the database")
    mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.fztvm2k.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("Mongo Atlas Connected"))
        .catch((erro) => console.log(erro))
}

module.exports = connectDatabase