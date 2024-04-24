Feature: Inicio de sesión en la aplicación

    Scenario: Inicio de sesión exitoso
        Given el usuario introduce de forma correcta su correo y su contraseña, que están registrados previamente
        When el usuario da click al botón de iniciar sesión
        Then el usuario ingresa a la aplicación de forma correcta

    Scenario: Inicio de sesión con contraseña incorrecta
        Given el usuario introduce de forma correcta su correo y de forma incorrecta su contraseña
        When el usuario da click al botón de iniciar sesión
        Then se muestra un mensaje de error indicando que la contraseña es incorrecta

    Scenario: Inicio de sesión con correo inválido
        Given el usuario introduce de forma incorrecta su correo electrónico
        When el usuario da click al botón de iniciar sesión
        Then se muestra un mensaje de error indicando que el correo no es válido

