const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
  bank: {
    type: String,
    required: false
  },
  account: {
    type: String,
    required: false
  },
  agencia: {
    type: String,
    required: false
  },
  value: {
    type: Number,
    required: false
  },
   total: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model('Account', AccountSchema);