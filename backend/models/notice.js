const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
  {
    date: {type: String, required: true},
    type:  {type: String, enum: ['student', 'admin'], required: true},
    heading:  {type: String, required: true},
    content: {type: String, required: true}
  }
);

module.exports = mongoose.model('Notice', noticeSchema, 'notices');
