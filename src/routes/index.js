const express = require("express");
const router = express.Router();

const mediaRouter = require("./media.router");
const proporcionRouter = require("./proporcion.router");
const varianzaRouter = require("./varianza.router");

router.use("/media", mediaRouter);
router.use("/proporcion", proporcionRouter);
router.use("/varianza", varianzaRouter);

module.exports = router;