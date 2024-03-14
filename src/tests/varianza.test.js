const VarianzaController = require('../controllers/varianza.controller');

test('poblacionNormal', async () => {	
  const req = {
    body: {
      s: 10,	// Change the value
      alpha: 0.05,	// Change the value
      n: 100,	
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new VarianzaController();
  await controller.poblacionNormal(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 77.08958586229119, U: 134.94894062305667 });
});