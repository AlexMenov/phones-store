const { pool } = require("./connect");

const createUser = async (userData) => {
  const {
    name: userName,
    email: userEmail,
    address: userAddress,
    phone: userPhone,
    id: userId,
  } = userData;
//   console.log("---------------------");
//   console.log(userName, userEmail, userAddress, userPhone, userId);
//   console.log("----------------------");
  try {
    const connection = await pool.getConnection();
    connection.query(
      `INSERT INTO users (user_id, user_mail, user_telefon, user_address, user_name, user_password) VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, userEmail, userPhone, userAddress, userName, "null"],
      function (error, results) {
        if (error) throw error;
        console.log("User created successfully");
      }
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createUser };
