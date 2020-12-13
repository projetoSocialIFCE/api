const mongoose = require('mongoose');

const FaqSchema = mongoose.Schema({
  answer: {
    type: String,
    required: false
  },
  question: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Faq', FaqSchema);