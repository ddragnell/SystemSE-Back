module.exports = {
  // Indica si se debe recoger la cobertura de código
  collectCoverage: true,

  // Un array de patrones de glob que indica un conjunto de archivos para los cuales se debe recoger la cobertura de código
  // Si no se especifica nada, todos los archivos serán incluidos en la cobertura
  collectCoverageFrom: ["**/*.{js,jsx}"],

  // El directorio donde Jest debería generar los informes de cobertura de código
  coverageDirectory: "coverage",

  // Un array de regexp pattern strings que se utilizan para excluir archivos de la cobertura de código
  coveragePathIgnorePatterns: ["/node_modules/"],

  // Un array de patrones de reporter que Jest usa al escribir los informes de cobertura
  coverageReporters: ["lcov"],

  // El procesador de resultados de pruebas que Jest debería usar para generar los informes de pruebas
  testResultsProcessor: "jest-sonar-reporter",

  // Un array de patrones de glob que se utilizan para detectar los archivos de prueba
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // Un array de regexp pattern strings que se utilizan para excluir archivos de las pruebas
  testPathIgnorePatterns: ["/node_modules/"],
};
