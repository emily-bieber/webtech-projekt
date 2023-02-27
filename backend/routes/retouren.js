const express = require('express');
const router = express.Router();
const Retoure = require('../models/retouren');

// get all
router.get('/retouren', async(req, res) => {
    const allRetouren = await Retoure.find();
    res.send(allRetouren);
});

module.exports = router;