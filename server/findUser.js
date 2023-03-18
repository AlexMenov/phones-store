const { pool } = require("./connect");

const findUser = async (userData) => {
  const { email: userEmail, phone: userPhone } = userData;
  let addUserToDatabase = true;
  let user = false;
  try {
    const connection = await pool.getConnection();
    const results = await connection.query(
      "SELECT * FROM users WHERE user_mail = ? OR user_telefon = ?",
      [userEmail, userPhone]
    );
    if (results[0].length > 0) {
      console.log("User exists");
      addUserToDatabase = false;
      user = results[0];
    } else {
      console.log("User does not exist");
    }
    connection.release();
  } catch (error) {
    console.error(error);
  }
  return { addUserToDatabase, user };
};

module.exports = { findUser };
