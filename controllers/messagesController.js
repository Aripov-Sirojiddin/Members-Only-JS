async function ensureAuth(req, res) {
  if (!res.locals.currentUser) {
    res.redirect("/");
    return ;
  }
}
async function newMessage(req, res) {
  res.render("pages/newMessage");
}

module.exports = {
  ensureAuth,
  newMessage,
};
