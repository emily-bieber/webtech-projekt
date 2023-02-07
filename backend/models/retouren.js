const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    bestellnr: String,
    rucksendungsnr: String,
    zahlungsfrist: Date,
    ruckgabefrist: Date,
    notizen: String
});

module.exports = mongoose.model('Retouren', schema);
