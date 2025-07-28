const { Router } = require("express");
const {
  getAllUsers,
  login,
  authenticateUser,
  createUser,
  signUp,
} = require("../controllers/indexController.js");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  getAllUsers(req, res);
});
indexRouter.get("/sign-up", signUp);
indexRouter.post("/sign-up", createUser);

indexRouter.get("/login", login);
indexRouter.post("/login", authenticateUser);

indexRouter.get("/new", getAllUsers);

module.exports = indexRouter;
