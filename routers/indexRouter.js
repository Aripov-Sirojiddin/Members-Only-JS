const { Router } = require("express");
const {
  getAllUsers,
} = require("../controllers/indexController.js");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  getAllUsers(req, res);
});

module.exports = indexRouter;
