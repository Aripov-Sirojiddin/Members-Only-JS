const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
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
