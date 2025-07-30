async function newMessage(req, res) {
  if (!res.locals.currentUser) {
    res.redirect("/");
    return;
  }
  res.render("pages/newMessage");
}

module.exports = {
  newMessage,
};
