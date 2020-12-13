const mongoose = require('mongoose');

const PostInstagramSchema = mongoose.Schema({
  link: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('PostInstagram', PostInstagramSchema);