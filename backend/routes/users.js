const express = require('express');

const {signupUser, loginUser} = require('../controllers/userController');
//const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//router.use(requireAuth)

// SignUp
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);


module.exports = router;
