const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: true },
  dateTimeStart: { type: String, required: true },
  dateTimeEnd: { type: String, required: true },
  date: { type: Date, required: true }, 
  month: { type: Number, required: true }, 
  location: { type: String, required: true },
  capacity: { type: Number, required: true }, 
  rsvpedUserIds: { type: [mongoose.Schema.Types.ObjectId], ref:'User' },  // array of user._ids
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
