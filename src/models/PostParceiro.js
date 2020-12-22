const mongoose = require('mongoose');

const PostParceiroSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  img_url: {
    type: String,
    required: false,
  },

});

module.exports = mongoose.model('PostParceiro', PostParceiroSchema);