const express = require('express');

const {createNewTrack, viewAllTracks, getSingleTrack, deleteTrack, updateTrack} = require('../controllers/trackController');

const router = express.Router();

router.get('/', viewAllTracks);

// Get Single
router.get('/:id', getSingleTrack);

// POST a new track
router.post('/', createNewTrack);

// DELETE Single
router.delete('/:id', deleteTrack);

// UPDATE Single
router.patch('/:id', updateTrack);

module.exports = router;
