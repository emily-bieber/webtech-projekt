const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    orderNo: String,
    returnNo: String,
    paymentDueDate: Date,
    returnDueDate: Date,
    notes: String,
    status: String,
    userid: String
});

module.exports = mongoose.model('Retoure', schema);