const express = require('express');
const proporcionRouter = express.Router();
const ProporcionController = require('../controllers/proporcion.controller');
const _proporcionController = new ProporcionController();

proporcionRouter.post('/poblacion-normal', _proporcionController.poblacionNormal);

module.exports = proporcionRouter;