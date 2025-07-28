const pool = require("./pool");

function getAllUsers() {
  return users;
}

async function createUser(userInfo) {
  await pool.query("INSERT INTO members (username, password) VALUES($1, $2)", [
    userInfo.username,
    userInfo.password,
  ]);
}

async function getUserByUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM members WHERE username = $1",
    [username]
  );
  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM members WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

module.exports = {
  getAllUsers,
  createUser,
  getUserByUsername,
  getUserById,
};
