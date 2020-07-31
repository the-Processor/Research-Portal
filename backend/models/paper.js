const mongoose = require('mongoose');

const paperSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  keywords: {
    type: [String],
    required: true
  },
  areaOfResearch: {
    type: String,
    required: true
  },
  author: {
    type: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      institute: {
        type: String,
        required: true
      },
      contact: {
        type: Number,
        required: true
      }
    },
    required: true
  },
  coAuthor1: {
    type: {
      name1: {
        type: String,
        required: true
      },
      email1: {
        type: String,
        required: true
      },
      institute1: {
        type: String,
        required: true
      },
      contact1: {
        type: Number,
        required: true
      }
    }
  },
  coAuthor2: {
    type: {
      name2: {
        type: String,
        required: true
      },
      email2: {
        type: String,
        required: true
      },
      institute2: {
        type: String,
        required: true
      },
      contact2: {
        type: Number,
        required: true
      }
    }
  },
  publisher: {
    type: String,
    required: true
  },
  publicationDate: {
    type: String,
    required: true
  },
  paperPath: {
    type: String,
    required: true
  },
  paperStatusCode: {
    type: Number,
    enum: [0,1,2],
    required: true
  },
});

module.exports = mongoose.model('Paper', paperSchema, 'papers');
