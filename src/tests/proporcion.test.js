const ProporcionController = require("../controllers/proporcion.controller");

test("poblacionNormal", async () => {
  const req = {
    body: {
      p: 0.8,
      alpha: 0.05,
      n: 50,
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const controller = new ProporcionController();
  await controller.poblacionNormal(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ L: 0.6891794568997989, U: 0.9108205431002012 });
});