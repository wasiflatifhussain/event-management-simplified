const express = require('express');
const { addEvent, getEvents } = require('../controllers/eventController');
const router = express.Router();

// POST route to add an event
router.post('/add-events', addEvent);
router.post('/get-events', getEvents);

module.exports = router;
