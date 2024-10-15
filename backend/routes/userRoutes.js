const express = require('express');
const { addUser, signUpForEvent, rsvpOutFromEvent } = require('../controllers/userController');
const router = express.Router();

// POST route to add a user
router.post('/add-users', addUser);
router.post('/sign-up-for-event', signUpForEvent);
router.post('/rsvp-out-for-event', rsvpOutFromEvent);

module.exports = router;
