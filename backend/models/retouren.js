const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: String,
    name: String,
    bestellnr: String,
    rucksendungsnr: String,
    zahlungsfrist: Date,
    ruckgabefrist: Date,
    notizen: String
});

module.exports = mongoose.model('Retouren', schema);
