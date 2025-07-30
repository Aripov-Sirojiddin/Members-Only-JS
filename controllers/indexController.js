const { isMember } = require("../models/membersModel.js");

async function getMessages(req, res) {
  const userId = res.locals.currentUser ? res.locals.currentUser.id : -1;
  const status = await isMember(userId);
  res.render("pages/index", { isMember: status });
}

module.exports = {
  getMessages,
};
