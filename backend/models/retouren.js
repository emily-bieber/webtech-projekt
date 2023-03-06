const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    orderNo: String,
    ReturnNo: String,
    paymentDueDate: Date,
    returnDueDate: Date,
    notes: String,
    status: String,
    userid: String
});

module.exports = mongoose.model('Retoure', schema);