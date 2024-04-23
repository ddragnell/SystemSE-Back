const utils = require('./utils');

class MediaController {

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionNormalVarianzaConocida(req, res) {
    try {
      const { X, alpha, sigma, n } = req.body;
      // Verificar que los valores no sean negativos
      if (X < 0 || alpha < 0 || sigma < 0 || n < 0) {
        return res.status(400).json({ error: 'Los valores de X, alpha, sigma y n no pueden ser negativos' });
      }
      const Z = utils.calcularValorZ(alpha / 2); // Se pasa el complemento porque la función calcula a cola izquierda
      const L = X - Z * (sigma / (n ** (1 / 2)));
      const U = X + Z * (sigma / (n ** (1 / 2)));
      res.status(200).json({ L, U });
    } catch (error) {
      console.log(error);
      res.status(500).json(null);
    }
  }

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionNormalVarianzaDesconocida(req, res) {
    try {
      const { X, alpha, s, n } = req.body;
      const T = utils.calcularvalorT(alpha / 2, n - 1); // Se pasa el complemento porque la función calcula a cola izquierda
      const L = X - T * (s / (n ** (1 / 2)));
      const U = X + T * (s / (n ** (1 / 2)));
      res.status(200).json({ L, U });
    } catch (error) {
      res.status(500).json(null);
    }
  }

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionCualquieraVarianzaDesconocida(req, res) {
    try {
      const { X, alpha, s, n } = req.body;
      const Z = utils.calcularValorZ(alpha / 2); // Se pasa el complemento porque la función calcula a cola izquierda
      const L = X - Z * (s / (n ** (1 / 2)));
      const U = X + Z * (s / (n ** (1 / 2)));
      res.status(200).json({ L, U });
    } catch (error) {
      res.status(500).json(null);
    }
  }

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionCualquieraVarianzaConocida(req, res) {
    try {
      const { X, alpha, sigma, n } = req.body;
      if (X < 0 || alpha < 0 || sigma < 0 || n < 0) {
        return res.status(400).json({ error: 'Los valores de X, alpha, sigma y n no pueden ser negativos' });
      }
      const Z = utils.calcularValorZ(alpha / 2); // Se pasa el complemento porque la función calcula a cola izquierda
      const L = X - Z * (sigma / (n ** (1 / 2)));
      const U = X + Z * (sigma / (n ** (1 / 2)));
      res.status(200).json({ L, U });
    } catch (error) {
      res.status(500).json(null);
    }
  }
}

module.exports = MediaController;