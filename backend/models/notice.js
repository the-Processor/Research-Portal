const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
  {
    date: {type: String, required: true},
    content: {type: String, required: true}
  }
);

module.exports = mongoose.model('Notice', noticeSchema, 'notices');
