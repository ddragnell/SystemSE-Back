const ProporcionController = require("../controllers/proporcion.controller");

test("poblacionNormal", async () => {
  //Arrange
  const req = {
    body: {
      p: 0.8,
      alpha: 0.05,
      n: 50,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new ProporcionController();
  //Act
  await controller.poblacionNormal(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 0.6891794568997989, U: 0.9108205431002012 });
});

test("poblacionNegativa", async () => {
  //Arrange
  const req = {
    body: {
      p: 0.8,
      alpha: 0.05,
      n: -50,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new ProporcionController();
  //Act
  await controller.poblacionNormal(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({error: 'Los valores de p, alpha y n deben ser positivos, alpha debe estar entre 0 y 1, y n debe ser mayor que 0'});
});

test("proporcionMayorAUno", async () => {
  //Arrange
  const req = {
    body: {
      p: 10,
      alpha: 5,
      n: 50,
    },
  };
  //Mock
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new ProporcionController();
  //Act
  await controller.poblacionNormal(req, res);
  //Assert
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({error: 'Los valores de p, alpha y n deben ser positivos, alpha debe estar entre 0 y 1, y n debe ser mayor que 0'});
});