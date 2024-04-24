Feature: Registro de usuario en la aplicación

    Scenario: Verificación de dirección de correo válida
        Given el usuario introduce una dirección de correo en el campo correspondiente
        When el usuario da click en el botón de registrar
        Then se verifica que la dirección de correo contenga un "@" y termine en ".com"

    Scenario: Campos de ingreso obligatorio vacíos
        Given el usuario deja un campo del formulario de registro sin completar
        When el usuario da click en el botón de registrar
        Then se muestra un cuadro de texto de ingreso obligatorio para el campo correspondiente

    Scenario: Registro exitoso del usuario en la base de datos
        Given el usuario llenó todos los campos del formulario correctamente
        When el usuario da click en el botón de registrar
        Then el usuario se registra correctamente en la base de datos
        And el usuario recibe una confirmación de que se ha registrado correctamente

    
