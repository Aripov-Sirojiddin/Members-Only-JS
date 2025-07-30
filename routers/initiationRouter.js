const { Router } = require("express");
const { initiate, showForm } = require("../controllers/initiationController");
const initiationRouter = Router();

initiationRouter.get("/", showForm);
initiationRouter.post("/initiate", initiate);

module.exports = initiationRouter;
