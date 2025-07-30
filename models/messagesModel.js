const pool = require("./pool");

async function getAllMessages(showNames) {
  const { rows } = showNames
    ? await pool.query(
        "SELECT username, title, message FROM users INNER JOIN messages ON messages.member_id = users.id;"
      )
    : await pool.query("SELECT title, message FROM messages;");
  return rows;
}

async function createMessage(messageData) {
  await pool.query(
    "INSERT INTO messages (member_id, title, message) VALUES ($1, $2, $3);",
    [messageData.id, messageData.title, messageData.message]
  );
}

module.exports = {
  getAllMessages,
  createMessage,
};
