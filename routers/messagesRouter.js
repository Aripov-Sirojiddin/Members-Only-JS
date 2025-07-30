const { Router } = require("express");
const { ensureAuth, newMessage } = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/new", ensureAuth, newMessage);

module.exports = messagesRouter;
