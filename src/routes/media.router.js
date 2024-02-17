const express = require('express');
const mediaRouter = express.Router();
const MediaController = require('../controllers/media.controller');
const _mediaController = new MediaController();

mediaRouter.post('/poblacion-normal-varianza-conocida', _mediaController.poblacionNormalVarianzaConocida);
mediaRouter.post('/poblacion-normal-varianza-desconocida', _mediaController.poblacionNormalVarianzaDesconocida);
mediaRouter.post('/poblacion-cualquiera-varianza-desconocida', _mediaController.poblacionCualquieraVarianzaDesconocida);
mediaRouter.post('/poblacion-cualquiera-varianza-conocida', _mediaController.poblacionCualquieraVarianzaConocida);

module.exports = mediaRouter;