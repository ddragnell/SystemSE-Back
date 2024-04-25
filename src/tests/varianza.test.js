const VarianzaController = require('../controllers/varianza.controller');

test('poblacionNormal', async () => {	
  //Arrange
  const req = {
    body: {
      s: 10,	// Change the value
      alpha: 0.05,	// Change the value
      n: 100,	
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new VarianzaController();
  //Act
  await controller.poblacionNormal(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 77.08958586229119, U: 134.94894062305667 });
});

test('alphaNegativa', async () => {	
  //Arrange
  const req = {
    body: {
      s: 10,	// Change the value
      alpha: -0.05,	// Change the value
      n: 100,	
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new VarianzaController();
  //Act
  await controller.poblacionNormal(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({error: 'Los valores de s, alpha y n no pueden ser negativos'  });
});