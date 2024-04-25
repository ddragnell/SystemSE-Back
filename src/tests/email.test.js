const EmailController = require('../controllers/email.controller');
const Contact = require('../models/Contact'); 
const httpMocks = require('node-mocks-http'); 
const { mockRequest, mockResponse } = httpMocks;

jest.mock('../models/Contact.js'); 

describe('EmailController', () => {
  describe('createEmail', () => {
    it('deberia crear un nuevo contacto y retornar status 200', async () => {
      // Crear un stub  para el método save del modelo Contact
      Contact.mockImplementation(() => {
        return {
          save: () => Promise.resolve({ nombre: 'Test', email: 'test@example.com' }),
        };
      });

      //Crear mocks para req y res
      const req = httpMocks.createRequest({
        body: { nombre: 'Test', email: 'test@example.com' },
      });
      const res =  httpMocks.createResponse();

      const emailController = new EmailController();
      await emailController.createEmail(req, res);

      // Verifica que el método status fue llamado con el código 200
      expect(res.statusCode).toBe(200);

      // Verifica que el método json del objeto res fue llamado con el contacto correcto
      expect(res._getJSONData()).toEqual({ nombre: 'Test', email: 'test@example.com' });
    });
  });
});