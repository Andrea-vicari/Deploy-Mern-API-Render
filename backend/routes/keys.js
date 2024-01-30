const express = require('express');

const {createNewKey, viewAllKeys, getSingleKey, deleteKey, updateKey} = require('../controllers/KeyController');
//const requireAuth = require('../middleware/requireAuth')

const router = express.Router();
//router.use(requireAuth)

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
