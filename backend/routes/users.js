const express = require('express');

const {loginUser, signupUser} = require('../controllers/userController');

const router = express.Router();

router.post('/', loginUser);
router.post('/', signupUser);
module.exports = router;
