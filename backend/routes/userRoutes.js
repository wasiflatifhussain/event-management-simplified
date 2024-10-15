const express = require('express');
const { addUser, signUpForEvent, rsvpOutFromEvent, userSignUp, userSignIn } = require('../controllers/userController');
const router = express.Router();

// POST route to add a user
router.post('/add-users', addUser);
router.post('/sign-up-for-event', signUpForEvent);
router.post('/rsvp-out-for-event', rsvpOutFromEvent);
router.post('/user-sign-up', userSignUp);
router.post('/user-sign-in', userSignIn);

module.exports = router;
