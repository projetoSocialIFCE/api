const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
  img_url: {
    type: String,
    required: false,
  },
  linkInstagram: {
    type: String,
    required: false,
  },
  answer: {
    type: String,
    required: false
  },
  question: {
    type: String,
    required: false
  }


});

module.exports = mongoose.model('Post', PostSchema);