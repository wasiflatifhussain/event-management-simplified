const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  upcomingEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }], // Array of ObjectId references to Event model
});

const User = mongoose.model('User', userSchema);

module.exports = User;
