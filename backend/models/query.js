const mongoose = require('mongoose');

const querySchema = mongoose.Schema({
  studEmail : {type: String, required: true},
  date: {type: String, required: true},
  subject: {type: String, required: true},
  content: {type: String, required: true}
});

module.exports = mongoose.model('Query', querySchema, 'queries');
