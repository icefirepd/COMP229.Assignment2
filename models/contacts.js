const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String
});

module.exports = mongoose.model('Contacts', ContactsSchema);