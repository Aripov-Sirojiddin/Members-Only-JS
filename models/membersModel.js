const pool = require("./pool");

async function addMember(memberId) {
  await pool.query("INSERT INTO members (member_id) VALUES ($1);", [memberId]);
}
async function isMember(userId) {
  const { rows } = await pool.query(
    "SELECT * FROM members WHERE member_id = $1;",
    [userId]
  );
  return rows.length > 0;
}

module.exports = {
  addMember,
  isMember,
};
