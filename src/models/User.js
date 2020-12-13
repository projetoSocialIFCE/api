const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  passwordResetToken: {
    type: String,
    select: false
  },

  passwordResetExperis: {
    type: Date,
    select: false
  },
  phone: {
    type: String,
    required: false
  },



});

module.exports = mongoose.model('User', UserSchema);