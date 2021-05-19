const express = require("express");
const apiRouter = express.Router();

const {
  outbreakMyScrapper,
  decoder,
} = require("../controllers/scrapperController");

apiRouter.get("/outbreak-scrapper", async (req, res) => {
  res.send(await outbreakMyScrapper(req, res));
});

apiRouter.get("/decoder", async (req, res) => {
  res.send(await decoder(req, res));
});

module.exports = apiRouter;
