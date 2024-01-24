const express = require('express');

const {viewAllTracks} = require('../controllers/trackController');

const router = express.Router();

router.get('/', viewAllTracks);

module.exports = router;
