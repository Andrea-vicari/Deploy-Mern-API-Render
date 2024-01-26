const express = require('express');

const {createNewUser, viewAllUsers, getSingleUser, deleteUser, updateUser} = require('../controllers/userController');

const router = express.Router();

router.get('/', viewAllUsers);

// Get Single
router.get('/:id', getSingleUser);

// POST a new track
router.post('/', createNewUser);

// DELETE Single
router.delete('/:id', deleteUser);

// UPDATE Single
router.patch('/:id', updateUser);

module.exports = router;
