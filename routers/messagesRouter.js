const { Router } = require("express");
const { newMessage, createMessage } = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/new", newMessage);
messagesRouter.post("/new", createMessage);

module.exports = messagesRouter;
