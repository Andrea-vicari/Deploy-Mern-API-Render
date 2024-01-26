const express = require('express');

const {signupUser, loginUser} = require('../controllers/userController');

const router = express.Router();

// SignUp
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);


module.exports = router;
