const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        requiered: true
    },
    username: {
        type: String,
        requiered: true
    },
    email: {
        type: String,
        requiered: true,
        unique: true
    },
    password: {
        type: String,
        requiered: true
    },
    avatar: {
        type: String,
        requiered: true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User