const utils = require('./utils');

class ProporcionController {
  constructor() { }

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionNormal(req, res) {
    try {
      const { p, alpha, n } = req.body;
      const Z = utils.calcularValorZ(alpha / 2); // Se pasa el complemento porque la función calcula a cola izquierda
      const L = p - Z * (((p * (1 - p)) / n) ** (1/2));
      const U = p + Z * (((p * (1 - p)) / n) ** (1/2));
      res.status(200).json({ L, U });
    } catch (error) {
      res.status(500).json(null);
    }
  }
}

module.exports = ProporcionController;