const User = require('../models/users');
const Event = require('../models/events');

// Function to add a user
const addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);  // Assuming user data is in req.body
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signUpForEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    if (!user || !event) {
      return res.status(404).json({ message: "User or event not found" });
    }

    if (user.upcomingEvents.includes(eventId)) {
      return res.status(400).json({ message: "User has already signed up for this event" });
    }

    user.upcomingEvents.push(eventId);
    await user.save();

    event.rsvpedUserIds.push(userId);
    await event.save();

    res.status(200).json({ message: "User signed up for the event successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const rsvpOutFromEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    if (!user || !event) {
      return res.status(404).json({ message: "User or event not found" });
    }

    if (!user.upcomingEvents.includes(eventId)) {
      return res.status(400).json({ message: "User is not signed up for this event" });
    }

    user.upcomingEvents = user.upcomingEvents.filter(id => id.toString() !== eventId);
    await user.save();

    event.rsvpedUserIds = event.rsvpedUserIds.filter(id => id.toString() !== userId);
    await event.save();

    res.status(200).json({ message: "User rsvp-out from the event successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addUser, signUpForEvent, rsvpOutFromEvent };
