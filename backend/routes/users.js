const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');

// get all users
router.get('/', async(req, res) => {
    const allUsers = await User.find();
    console.log(allUsers);
    res.send(allUsers);
});

// post one user - register
router.post('/register', async(req, res) => {
    const existingUsername = await User.findOne( {username: req.body.username});
    const existingEmail = await User.findOne( {email: req.body.email});
    if(!existingUsername && !existingEmail) {
        bcrypt.hash(req.body.password, 10).then(
            async (hash) => {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                })
                await newUser.save();
                res.send(newUser);
            }).catch( err => res.status(400).json({ error: 'user not created' }))
    } else {
        res.status(400).json({ error: 'username and/or email exist(s)' });
    }
});

// post username and password - login
router.post('/login', async(req, res) => {
    const existingUsername = await User.findOne( {username: req.body.username});
    if(existingUsername) {
        bcrypt.compare(req.body.password, existingUsername.password).then((result) => {
            if(result) {
                res.status(201).json({ message: 'logged in' });
            } else {
                res.status(204).send(); // wrong password
            }
        })
        .catch( (err) => res.status(400).json({ error: 'something went wrong' })) // never happens
    } else {
        res.status(400).json({ error: 'username does not exist' });
    }
});


module.exports = router;
