const { isMember } = require("../models/membersModel.js");
const { getAllMessages } = require("../models/messagesModel.js");

async function getMessages(req, res) {
  const userId = res.locals.currentUser ? res.locals.currentUser.id : -1;
  const status = await isMember(userId);

  const messages = await getAllMessages(status);
  res.render("pages/index", { isMember: status, messages: messages });
}

module.exports = {
  getMessages,
};
