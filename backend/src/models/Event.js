const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: String,
  time: String
});

module.exports = mongoose.model('Event', EventSchema);