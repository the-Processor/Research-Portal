const mongoose = require('mongoose');

const adminQuerySchema = mongoose.Schema({
  adminEmail : {type: String, required: true},
  date: {type: String, required: true},
  subject: {type: String, required: true},
  content: {type: String, required: true}
});

module.exports = mongoose.model('AdminQuery', adminQuerySchema, 'adminQueries');
