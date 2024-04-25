const express = require("express");
const router = express.Router();

const mediaRouter = require("./media.router");
const proporcionRouter = require("./proporcion.router");
const varianzaRouter = require("./varianza.router");
const emailRouter = require("./email.router");

router.use("/media", mediaRouter);
router.use("/proporcion", proporcionRouter);
router.use("/varianza", varianzaRouter);
router.use("/email", emailRouter);

module.exports = router;