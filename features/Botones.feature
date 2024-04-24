Feature: Operaciones de Botones 

    Scenario: Cálculo preciso con el botón "Calcular"
        Given el usuario ha ingresado correctamente los datos necesarios para la operación
        When el usuario hace click en el boton de calcular
        Then la aplicación realiza el cálculo de la operación correspondiente
        And se muestra un mensaje en pantalla con el resultado 

        Scenario: Limpieza de campos con el botón "Limpiar"
        Given el usuario ha ingresado datos en los campos de entrada de una operación
        When el usuario hace click en el botón de Limpiar
        Then todos los campos de entrada de datos vuelven a estar vacios
        And el usuario puede ingresar nuevos valores
