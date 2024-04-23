const utils = require('./utils');

class ProporcionController {

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionNormal(req, res) {
    try {
      const { p, alpha, n } = req.body;

      // Verificar que p, alpha y n son válidos
      if (p < 0 || alpha < 0 || alpha > 1 || n <= 0) {
        throw new Error('Los valores de p, alpha y n deben ser positivos, alpha debe estar entre 0 y 1, y n debe ser mayor que 0');
      }

      const Z = utils.calcularValorZ(alpha / 2); // Se pasa el complemento porque la función calcula a cola izquierda
      const L = p - Z * (((p * (1 - p)) / n) ** (1 / 2));
      const U = p + Z * (((p * (1 - p)) / n) ** (1 / 2));
      res.status(200).json({ L, U });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = ProporcionController;