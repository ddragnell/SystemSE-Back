module.exports = {
    // Indica qué directorios Jest debe usar para buscar pruebas
    roots: [
      "<rootDir>/src/tests"
    ],
  
    // Indica qué archivos Jest debe considerar para la cobertura de pruebas
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/",
      "!<rootDir>/path/to/dir/"
    ],
  
    // Indica el formato del informe de cobertura
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "clover"
    ],
  
    // Indica el entorno de prueba
    testEnvironment: "node",
  };