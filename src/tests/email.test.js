const EmailController = require("../controllers/email.controller");
const Contact = require("../models/Contact");
const httpMocks = require("node-mocks-http");
const { mockRequest, mockResponse } = httpMocks;

//Mock: Un mock es un objeto que simula el comportamiento de un objeto real en un entorno controlado. En esta prueba, sea usa un mock para el modelo Contact:
jest.mock("../models/Contact.js");

//Esto reemplaza el modelo Contact con una versión simulada que se puede controlar para evitar
//llamados reales a la BD.

describe("EmailController", () => {
  describe("createEmail", () => {
    it("deberia crear un nuevo contacto y retornar status 200", async () => {
      //Stub: Un stub es un tipo de mock que no sólo simula un objeto, sino que también define el comportamiento del objeto en ciertas situaciones, aqui, se esta creando un stub para el método save del modelo Contact. Este stub retorna una promesa que se resuelve con un objeto que contiene el nombre y el email del contacto creado.

      //Los stub y mock se usa para simular el comportamiento de un método o un objeto en una prueba unitaria.
      Contact.mockImplementation(() => {
        return {
          save: () =>
            Promise.resolve({ nombre: "Test", email: "test@example.com" }),
        };
      });

      //Crear mocks para req y res
      //Arrange
      const req = httpMocks.createRequest({
        body: { nombre: "Test", email: "test@example.com" },
      });
      const res = httpMocks.createResponse();
      
      //Act
      const emailController = new EmailController();
      await emailController.createEmail(req, res);

      // Verifica que el método status fue llamado con el código 200
      expect(res.statusCode).toBe(200);
      //Asserts
      // Verifica que el método json del objeto res fue llamado con el contacto correcto
      expect(res._getJSONData()).toEqual({
        nombre: "Test",
        email: "test@example.com",
      });
    });
  });
});
