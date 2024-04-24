Feature: Cáculo del intervalo de confianza para la proporción poblacional
    
    Scenario: Cálculo de la proporción
        Given el usuario ha ingresado correctamente los datos para el cálculo de la proporción
        When el usuario da click en el botón calcular 
        Then el sistema válida los datos ingresados correctamente
        And muestra el resultado del cálculo del intervalo en pantalla 
    
    Scenario: Ingreso de datos incorrectos o campos vacíos
        Given el usuario ha ingresado datos incorrectos o faltantes para el cálculo de la proporción
        When el usuario da click en el botón calcular
        Then se muestra mensajes de error claros para el usuario

    Scenario: Manejo correcto de los diferentes niveles de confianza para la proporción
        Given el usuario ha ingresado un nivel de confianza para el cálculo
        When el usuario da click en el boton calcular
        Then se realiza el cálculo de la proporción correctamente con el nivel de confianza ingresado
        