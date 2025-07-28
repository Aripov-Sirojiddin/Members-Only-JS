const db = require("../models/db.js");

async function login(req, res) {
  res.render("pages/login");
}

async function authenticateUser(req, res) {
  const incomingUserLoginInfo = {
    ...req.body,
  };
  const userWithSameUsername = await db.getUserByUsername(
    incomingUserLoginInfo.username
  );
  if (userWithSameUsername != null) {
  }
  res.redirect("/");
}

module.exports = {
  login,
  authenticateUser,
};
