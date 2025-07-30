const { Router } = require("express");
const { newMessage } = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/new", newMessage);

module.exports = messagesRouter;
