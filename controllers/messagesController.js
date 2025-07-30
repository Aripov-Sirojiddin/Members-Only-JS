const messagesModel = require("../models/messagesModel");

async function newMessage(req, res) {
  if (!res.locals.currentUser) {
    res.redirect("/");
    return;
  }
  res.render("pages/newMessage");
}
async function createMessage(req, res) {
  if (!res.locals.currentUser) {
    res.redirect("/");
    return;
  }
  const messageData = {
    ...req.body,
    id: res.locals.currentUser.id,
  };

  await messagesModel.createMessage(messageData);
  res.redirect("/");
}
module.exports = {
  newMessage,
  createMessage,
};
