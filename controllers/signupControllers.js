const db = require("../models/db.js");
const bcrypt = require("bcrypt");

async function signUp(req, res) {
  res.render("pages/sign-up", { username: "", errors: [] });
}

async function createUser(req, res, next) {
  const userInfo = {
    ...req.body,
  };
  try {
    if (userInfo.password !== userInfo.confirm_password) {
      res.render("pages/sign-up", {
        username: userInfo.username,
        errors: ["Passwords don't match."],
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    userInfo.password = hashedPassword;
    await db.createUser(userInfo);

    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signUp,
  createUser,
};
