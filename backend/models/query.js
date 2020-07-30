const mongoose = require('mongoose');

const querySchema = mongoose.Schema({
  email : {type: String, required: true},
  date: {type: String, required: true},
  type: {type: String, enum: ['student', 'admin'], required: true},
  question: {type: String, required: true},
  response: {type: String}
});

module.exports = mongoose.model('Query', querySchema, 'queries');
