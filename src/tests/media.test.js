const MediaController = require('../controllers/media.controller');

test('poblacionNormalVarianzaConocida', async () => {
  //Arrange
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      sigma: 10,
      n: 100,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  //Act
  await controller.poblacionNormalVarianzaConocida(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.04095106197679, U: 51.95904893802321 });
});

test('poblacionNormalVarianzaDesconocida', async () => {
  //Arrange
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      s: 10,
      n: 100,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const controller = new MediaController();
  //Act
  await controller.poblacionNormalVarianzaDesconocida(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.0159, U: 51.9841 });
});

test('poblacionCualquieraVarianzaDesconocida', async () => {
  //Arrange
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      s: 10,
      n: 100,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  //Act
  await controller.poblacionCualquieraVarianzaDesconocida(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.04095106197679, U: 51.95904893802321 });
});

test('poblacionCualquieraVarianzaConocida', async () => {
  //Arrange
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      sigma: 10,
      n: 100,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  //Act
  await controller.poblacionCualquieraVarianzaConocida(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.04095106197679, U: 51.95904893802321 });
});

test('poblacionNegativa', async () => {
  //Arrange
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      sigma: 10,
      n: -100,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  //Act
  await controller.poblacionCualquieraVarianzaConocida(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({error: 'Los valores de X, alpha, sigma y n no pueden ser negativos'});
});