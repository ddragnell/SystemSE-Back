const jsstats = require('js-stats');

module.exports = {
  calcularValorZ: (p) => {
    const distribucionNormalEstandar = new jsstats.NormalDistribution(0, 1);
    const Z = distribucionNormalEstandar.invCumulativeProbability(1 - p); // Esta función calcula la acumulada (cola izquierda)
    return Z;
  },

  calcularvalorT: (p, v) => {
    const distribucionT = new jsstats.TDistribution(v);
    const T = distribucionT.invCumulativeProbability(1 - p); // Esta función calcula la acumulada (cola izquierda)
    return T;
  },

  calcularvalorX2: (p, v) => {
    // La librería no contiene como tal una forma de calcular el valor X2 a partir de una probabilidad dada,
    // entonces se implementa una forma de hallarlo, con una tolerancia de 0.00001, calculando la probabilidad hasta
    // que el error con respecto a la probabilidad dada sea menor a la tolerancia. Los grados de libertad se van
    // aumentando o disminuyendo dependiendo de si se está acercando al valor real o no.
    const distribucionChiCuadrado = new jsstats.ChiSquareDistribution(v);
    let P = distribucionChiCuadrado.cumulativeProbability(v);

    while ((Math.abs(P - (1 - p)) / (1 - p)) * 100 > 0.00001) {
      if (P > (1 - p)) {
        v = v - v * (P - (1 - p));
      } else {
        v = v + v * Math.abs(P - (1 - p));
      }
      P = distribucionChiCuadrado.cumulativeProbability(v);
    }
    return v;
  }
}