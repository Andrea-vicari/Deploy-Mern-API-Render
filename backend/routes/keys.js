const express = require('express');

const {createNewKey, viewAllKeys, getSingleKey, deleteKey, updateKey} = require('../controllers/KeyController');

const router = express.Router();

router.get('/', viewAllKeys);

// Get Single
router.get('/:id', getSingleKey);

// POST a new track
router.post('/', createNewKey);

// DELETE Single
router.delete('/:id', deleteKey);

// UPDATE Single
router.patch('/:id', updateKey);

module.exports = router;
