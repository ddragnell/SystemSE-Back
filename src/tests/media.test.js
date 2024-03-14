const MediaController = require('../controllers/media.controller');

test('poblacionNormalVarianzaConocida', async () => {
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      sigma: 10,
      n: 100,
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  await controller.poblacionNormalVarianzaConocida(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.04095106197679, U: 51.95904893802321 });
});

test('poblacionNormalVarianzaDesconocida', async () => {
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      s: 10,
      n: 100,
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  await controller.poblacionNormalVarianzaDesconocida(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.0159, U: 51.9841 });
});

test('poblacionCualquieraVarianzaDesconocida', async () => {
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      s: 10,
      n: 100,
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  await controller.poblacionCualquieraVarianzaDesconocida(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.04095106197679, U: 51.95904893802321 });
});

test('poblacionCualquieraVarianzaConocida', async () => {
  const req = {
    body: {
      X: 50,
      alpha: 0.05,
      sigma: 10,
      n: 100,
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new MediaController();
  await controller.poblacionCualquieraVarianzaConocida(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 48.04095106197679, U: 51.95904893802321 });
});