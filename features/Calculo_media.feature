Feature: Cáculo del intervalo de confianza para la media poblacional
    
    Scenario: Cálculo de la media
        Given el usuario ha ingresado correctamente los datos para el cálculo de la media
        When el usuario da click en el botón calcular 
        Then se válida los datos ingresados correctamente
        And muestra el resultado del cálculo en pantalla 
    
    Scenario: Ingreso de datos incorrectos o campos vacíos
        Given el usuario ha ingresado datos incorrectos o faltantes para el cálculo de la media
        When el usuario da click en el botón calcular
        Then se muestra al usuario mensajes de error claros

    Scenario: Manejo correcto de los diferentes niveles de confianza para la media
        Given el usuario ha ingresado un nivel de confianza para el cálculo
        When el usuario da click en el boton calcular
        Then se realiza el cálculo de la media correctamente con el nivel de confianza ingresado

    
