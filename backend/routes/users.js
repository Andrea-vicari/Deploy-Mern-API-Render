const express = require('express');
const {createNewUser, viewAllUsers} = require('../controllers/userController');
const router = express.Router();



router.post("/", createNewUser);



module.exports = router;
