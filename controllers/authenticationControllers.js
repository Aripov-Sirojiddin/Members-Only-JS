async function login(req, res) {
  res.render("pages/login");
}

async function logout(req, res) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = {
  login,
  logout,
};
