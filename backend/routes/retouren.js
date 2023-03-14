const express = require('express');
const router = express.Router();
const Retoure = require('../models/retouren');

// GET ALL
router.get('/', async(req, res) => {
    const allRetouren = await Retoure.find();
    console.log(allRetouren);
    res.send(allRetouren);
});

// GET ONE VIA ID
router.get('/:id', async(req, res) => {
    const retoure = await Retoure.findOne({ _id: req.params.id });
    if(retoure) {
        res.send(retoure);
    } else {
        res.status(404);
        res.send({
            error: "Retoure does not exist!"
        });
    }
})

// GET ALL FOR ONE USER
router.get('/user/:userid', async(req, res) => {
    const retoure = await Retoure.find({ userid: req.params.userid });
    if(retoure) {
        res.send(retoure);
    } else {
        res.status(404);
        res.send({
            error: "Retoure does not exist!"
        });
    }
})

// GET ALL FOR ONE USER AND ONE STATUS
router.get('/user/:userid/:status', async(req, res) => {
    const retoure = await Retoure.find({ userid: req.params.userid, status: req.params.status });
    if(retoure) {
        res.send(retoure);
    } else {
        res.status(404);
        res.send({
            error: "Retoure does not exist!"
        });
    }
})

// POST ONE
router.post('/', async(req, res) => {
    const newRetoure = new Retoure({
        name: req.body.name,
        orderNo: req.body.orderNo,
        returnNo: req.body.returnNo,
        paymentDueDate: req.body.paymentDueDate,
        returnDueDate: req.body.returnDueDate,
        notes: req.body.notes,
        userid: req.body.userid,
        status: req.body.status
    })
    await newRetoure.save();
    res.send(newRetoure);
});

// UPDATE ONE
router.patch('/:id', async(req, res) => {
    try {
        const retoure = await Retoure.findOne({ _id: req.params.id })

        if (req.body.name) {
            retoure.name = req.body.name
        }

        if (req.body.orderNo) {
            retoure.orderNo = req.body.orderNo
        }

        if (req.body.returnNo) {
            retoure.returnNo = req.body.returnNo
        }

        if (req.body.paymentDueDate) {
            retoure.paymentDueDate = req.body.paymentDueDate
        }

        if (req.body.returnDueDate) {
            retoure.returnDueDate = req.body.returnDueDate
        }

        if (req.body.notes) {
            retoure.notes = req.body.notes
        }

        if (req.body.status) {
            retoure.status = req.body.status
        }

        await Retoure.updateOne({ _id: req.params.id }, retoure);
        res.send(retoure)
    } catch {
        res.status(404)
        res.send({ error: "Retoure does not exist!" })
    }
});

// UPDATE STATUS
router.patch('/:id', async(req, res) => {
    try {
        const retoure = await Retoure.findOne({ _id: req.params.id });
        retoure.status = req.body
        await Retoure.updateOne({ _id: req.params.id }, retoure);
        res.send(retoure)
    } catch {
        res.status(404)
        res.send({ error: "Retoure does not exist!" })
    }
});

// DELETE ONE
router.delete('/:id', async(req, res) => {
    try {
        await Retoure.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Retoure does not exist!" })
    }
});

module.exports = router;