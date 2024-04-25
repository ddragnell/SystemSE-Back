const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema);