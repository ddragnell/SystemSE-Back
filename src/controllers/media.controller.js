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