const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  type: {
    type: String,
    enum: ['facultyAdmin','studentAdmin','student','faculty'],
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    default: null
  },
  designation: {
    type: String,
    default: null
  },
  experience: {
    type: Number,
    default: null
  },
  salary: {
    type: Number,
    default: null
  },
  class: {
    type: Number,
    default: null
  },
  division: {
    type: String,
    default: null
  }
});

userSchema.plugin(uniqueVal);

module.exports = mongoose.model('User', userSchema, 'users');
