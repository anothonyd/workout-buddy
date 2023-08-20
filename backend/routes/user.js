const express = require('express');

// controller funcions
const { signupUser, loginUser } = require('../controllers/userController');

const router = express.Router()

// login route
router.post('/login', loginUser)

// signuop route
router.post('/signup', signupUser)

module.exports = router