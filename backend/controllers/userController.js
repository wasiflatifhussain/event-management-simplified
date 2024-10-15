const User = require('../models/users');
const Event = require('../models/events');
const bcrypt = require('bcrypt');

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

const userSignUp = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    const saltRounds = 10; // Salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,  // Save the hashed password
    });

    const savedUser = await newUser.save();
    return res.status(201).json({ userId: savedUser._id, userName: savedUser.username });

  } catch (error) {

    console.error('Error during user sign-up:', error);
    res.status(500).json({ message: 'Error during sign-up', error: error.message });
  }
};

const userSignIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ userName: user.username, userId: user._id });
    
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



module.exports = { addUser, signUpForEvent, rsvpOutFromEvent, userSignUp, userSignIn };
