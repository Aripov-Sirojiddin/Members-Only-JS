const userModel = require("../models/usersModel.js");

async function getAllUsers(req, res) {
  res.render("pages/index");
}

module.exports = {
  getAllUsers,
};
