const pool = require("./pool");

async function createUser(userInfo) {

  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    userInfo.username,
    userInfo.password,
  ]);
}

async function getUserByUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );
  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

module.exports = {
  createUser,
  getUserByUsername,
  getUserById,
};
