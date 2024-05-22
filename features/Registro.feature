Feature: Registro de correo electrónico en la aplicación

  Scenario: Se verifica una dirección de correo válida    
  Given el usuario está en la página "https://system-se-front.vercel.app/suscribirse"
    When el usuario llena el campo de correo con "testexample.com"
    Then el sistema verifica que el campo de correo sea válido

  Scenario: Campos de ingreso nombre obligatorio vacío
    Given el usuario se encuentra en la página "https://system-se-front.vercel.app/suscribirse"
    When el usuario deja el campo nombre del registro sin completar
    Then se muestra un cuadro de texto de ingreso obligatorio para el campo nombre
