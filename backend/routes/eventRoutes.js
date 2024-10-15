const express = require('express');
const { addEvent, getEvents, getFirst50Events, getFirst50AttendingEvents } = require('../controllers/eventController');
const router = express.Router();

// POST route to add an event
router.post('/add-events', addEvent);
router.post('/get-events', getEvents);
router.post('/get-first-50-events', getFirst50Events);
router.post('/get-first-50-attending-events', getFirst50AttendingEvents);

module.exports = router;
