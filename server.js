const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt")
require("dotenv").config();
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const config = require('./config')
const port = config.port || 5000

const app = express()

// middleware
app.use(bodyParser.json())

// routes
// app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/auth", authRoute)
app.use("/user", userRoute)

mongoose.connect('mongodb://localhost:27017/locate', () => {
    console.log('MongoDB is connected')
})

app.listen(config.port, () => {
    console.log("Listening on port " + config.port)
})