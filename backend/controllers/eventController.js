const Event = require('../models/events');

// Function to add an event
const addEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);  // Assuming event data is in req.body
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const { month } = req.body;  // Pass month as a 1-indexed number
    const monthNumber = Number(month);
    
    const events = await Event.find({ month: monthNumber });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving events", error: error.message });
  }
};

module.exports = { addEvent, getEvents };
