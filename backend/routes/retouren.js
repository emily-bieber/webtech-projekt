const express = require('express');
const router = express.Router();
const Retoure = require('../models/retouren');

// get all retouren
router.get('/', async(req, res) => {
    const allRetouren = await Retoure.find();
    console.log(allRetouren);
    res.send(allRetouren);
});

module.exports = router;