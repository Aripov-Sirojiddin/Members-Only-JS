const membersModel = require("../models/membersModel");

async function showForm(req, res) {
  res.render("pages/initiation", { wrong: false });
}
async function initiate(req, res) {
  if (!res.locals.currentUser) {
    res.redirect("/");
    return;
  }

  if (req.body.secret === process.env.SESSION_SECRET) {
    membersModel.addMember(res.locals.currentUser.id);
    res.redirect("/");
  } else {
    res.render("pages/initiation", { wrong: true });
  }
}

module.exports = {
  showForm,
  initiate,
};
