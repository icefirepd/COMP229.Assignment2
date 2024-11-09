const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date
});

module.exports = mongoose.model('Users', UsersSchema);