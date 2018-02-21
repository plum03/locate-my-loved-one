const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

authRoutes.post("/signup", (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send(err)
        if (user) return res.status(400).send({err: "Invalid. Please use a different email"})
        const newUser = new User(req.body)
            newUser.save(err => {
                if (err) return res.status(500).send({success: false, err})
                const token = jwt.sign(newUser.removePassword(), process.env.SECRET)
                return res.status(201).send({success: true, newUser, token})
            })
    })
})

authRoutes.post("/login", (req, res) => {
    console.log('You have called the login function!')
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send(err)
        if(!user) {
            return res.status(403).send({err: "Username or password is incorrect."})
        } else if (user) {
            user.comparePassword(req.body.password, (err, match) => {
                if (err) res.status(403).send(err)
                if (!match) res.status(403).send({err: "Username or password is incorrect."})
                const token = jwt.sign(user.removePassword(), process.env.SECRET)
                return res.send({success: true, token, user})
            })
        }
    })
})



module.exports = authRoutes;