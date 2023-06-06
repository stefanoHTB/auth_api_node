const express = require('express');
const router = express.Router();
const registerController = require('../controllers/authControllers');

router.post('/', registerController.handleNewUser);

module.exports = router;

