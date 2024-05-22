Feature: Cálculo del intervalo de confianza para la proporción poblacional
    
    Scenario: Cálculo de la proporción
        Given el usuario está en la página "https://system-se-front.vercel.app/proporcion"
        When el usuario elige 95% en la confianza, "0.5" en la proporción muestral y "1000" en el tamaño de la muestra
        Then el usuario da click en el botón calcular
        And se muestra el resultado del cálculo del intervalo en pantalla 