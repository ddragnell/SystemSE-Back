Feature: Cáculo del intervalo de confianza para la varianza poblacional
    
    Scenario: Cálculo de la varianza
        Given el usuario ha ingresado correctamente los datos para el cálculo de la varianza
        When el usuario da click en el botón calcular 
        Then el sistema válida los datos ingresados correctamente
        And muestra el resultado esperado del cálculo en pantalla 
    
    Scenario: Ingreso de datos incorrectos o campos vacíos
        Given el usuario ha ingresado datos incorrectos o faltantes para el cálculo de la varianza
        When el usuario da click en el botón calcular
        Then se muestra mensajes de error claros para el usuario

    Scenario: Manejo correcto de los diferentes niveles de confianza para la varianza
        Given el usuario ha ingresado un nivel de confianza para el cálculo
        When el usuario da click en el boton calcular
        Then se realiza el cálculo de la varianza correctamente con el nivel de confianza ingresado
        