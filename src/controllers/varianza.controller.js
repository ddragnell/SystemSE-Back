const utils = require('./utils');

class VarianzaController {
  

  /**
  *
  * @param {import('express').Request} req
  * @param {import('express').Response} res
  */
  async poblacionNormal(req, res) {
    try {
      const { s, alpha, n } = req.body;
  
      // Verificar que los valores no sean negativos
      if (s < 0 || alpha < 0 || n < 0) {
        return res.status(400).json({ error: 'Los valores de s, alpha y n no pueden ser negativos' });
      }
  
      const X2L = utils.calcularvalorX2(alpha / 2, n - 1);
      const X2U = utils.calcularvalorX2(1 - (alpha / 2), n - 1);
      const L = ((n - 1) * s**2) / X2L;
      const U = ((n - 1) * s**2) / X2U;
      res.status(200).json({ L, U });
    } catch (error) {
      console.log(error);
      res.status(500).json(null);
    }
  }
}

module.exports = VarianzaController;