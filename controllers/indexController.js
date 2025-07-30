const { isMember } = require("../models/membersModel.js");
const { getAllMessages } = require("../models/messagesModel.js");

async function getMessages(req, res) {
  const status = res.locals.currentUser ? await isMember(res.locals.currentUser.id) : false;

  const messages = await getAllMessages(status);
  res.render("pages/index", { isMember: status, messages: messages });
}

module.exports = {
  getMessages,
};
