const express = require("express")
const app = express()
const connectDatabase = require("./src/database/db")

const userRoute = require("./src/routes/user.router")

const port = 3000

connectDatabase()
app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Server running port ${port}`))