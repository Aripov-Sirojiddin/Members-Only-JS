const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: `${process.env.PSQL_USER}`,
  database: "members",
  password: `${encodeURIComponent(process.env.PSQL_PASS)}`,
  port: 5432,
});
