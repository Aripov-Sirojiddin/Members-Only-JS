const { Router } = require("express");
const {
  getMessages,
} = require("../controllers/indexController.js");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  getMessages(req, res);
});

module.exports = indexRouter;
