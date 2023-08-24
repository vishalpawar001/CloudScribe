const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  email:String,
  username:String,
  password:String
});

const User = mongoose.model('User', userSchema);

// Note Schema
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: mongoose.Schema.Types.ObjectId
});

const Note = mongoose.model('Note', noteSchema);

module.exports = { User, Note };
