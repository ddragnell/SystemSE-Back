const express = require('express');
const varianzaRouter = express.Router();
const VarianzaController = require('../controllers/varianza.controller');
const _varianzaController = new VarianzaController();

varianzaRouter.post('/poblacion-normal', _varianzaController.poblacionNormal);

module.exports = varianzaRouter;