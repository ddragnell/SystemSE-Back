Feature: Guia de uso al iniciar sesión
    
    Scenario: Proporciona información suficiente al usuario
        Given el usuario inicia la aplicación por primera vez
        Then se muestra una guía de uso para la aplicación
        And la guía proporciona suficiente información para que el usuario comprenda los conceptos básicos y cada funcionalidad

    Scenario: Guia de inicio con una presentación agradable y accesible
        Given el usuario inicia la aplicación
        Then la guía de uso es fácilmente accesible desde la página de inicio
        And se presentqa de manera ordenada y agradable 
