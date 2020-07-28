const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  // person: {
  //   name: {
  //     type: String
  //   },
  //   email: {
  //     type: String
  //   }
  // }
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['webAdmin','collegeAdmin','student'],
    required: true
  },
  contact: {
    type: Number,
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
  address: {
    building: {
      type: String,
      // required: true
    },
    street: {
      type: String,
      // required: true
    },
    city: {
      type: String,
      // required: true
    },
    district: {
      type: String,
      // required: true
    },
    pincode: {
      type: Number,
      // required: true
    }
  },

  // building: {
  //   type: String,
  //   required: true
  // },
  // street: {
  //   type: String,
  //   required: true
  // },
  // city: {
  //   type: String,
  //   required: true
  // },
  // district: {
  //   type: String,
  //   required: true
  // },
  // pincode: {
  //   type: Number,
  //   required: true
  // },
  institute: {
    type: String,
    required: true
  }
});

userSchema.plugin(uniqueVal);

module.exports = mongoose.model('User', userSchema, 'users');
