const express = require('express');
const emailRouter = express.Router();
const EmailController = require('../controllers/email.controller');
const _emailController = new EmailController();

emailRouter.post('/email', _emailController.createEmail);

module.exports = emailRouter;