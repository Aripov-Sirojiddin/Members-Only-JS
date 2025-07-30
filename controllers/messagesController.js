const messagesModel = require("../models/messagesModel");
const { isMember } = require("../models/membersModel.js");

async function newMessage(req, res) {
  if (!res.locals.currentUser) {
    res.redirect("/");
    return;
  }
  const status = res.locals.currentUser
    ? await isMember(res.locals.currentUser.id)
    : false;
  res.render("pages/newMessage", { isMember: status });
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
