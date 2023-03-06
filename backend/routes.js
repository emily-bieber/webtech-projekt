const express = require('express');
const router = express.Router();
const User = require('./models/users');

// eine GET-Anfrage
router.get('/users', async(req, res) => {
    const allUsers = await User.find();
    console.log(allUsers);
    res.send(allUsers);
});


// post one user
router.post('/users', async(req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        ipaddress: req.body.ipaddress
    })
    await newUser.save();
    res.send(newUser);
});

// get one user via id
router.get('/users/:id', async(req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    console.log(req.params);
    if(user) {
        res.send(user);
    } else {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
})

// update one user
router.patch('/users/:id', async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })

        if (req.body.firstname) {
            user.firstname = req.body.firstname
        }

        if (req.body.lastname) {
            user.lastname = req.body.lastname
        }

        if (req.body.email) {
            user.email = req.body.email
        }

        if (req.body.ipaddress) {
            user.ipaddress = req.body.ipaddress
        }

        await User.updateOne({ _id: req.params.id }, user);
        res.send(user)
    } catch {
        res.status(404)
        res.send({ error: "User does not exist!" })
    }
});

// delete one user via id
router.delete('/:id', async(req, res) => {
    try {
        await User.deleteOne({ username: req.params.email })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "User does not exist!" })
    }
});

// delete all users
router.delete('/', async(req, res) => {
    try {
        await User.deleteMany()
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "User does not exist!" })
    }
});
module.exports = router;
