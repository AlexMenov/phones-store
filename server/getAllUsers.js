const { pool } = require("./connect");

const getAllUsers = async () => {
  let allUsers;
  try {
    const connection = await pool.getConnection();
    const users = await connection.query("SELECT * FROM users");
    allUsers = users[0];
    connection.release();
  } catch (e) {
    console.error(e);
  }
  return allUsers;
};

module.exports = { getAllUsers };
