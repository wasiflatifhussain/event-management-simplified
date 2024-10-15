const express = require('express');
const { addEvent, getEvents, getFirst50Events } = require('../controllers/eventController');
const router = express.Router();

// POST route to add an event
router.post('/add-events', addEvent);
router.post('/get-events', getEvents);
router.post('/get-first-50-events', getFirst50Events);;

module.exports = router;
