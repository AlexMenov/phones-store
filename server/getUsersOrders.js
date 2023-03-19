const { pool } = require("./connect");

const getUsersOrders = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const id = req.params.id;
    const sql = `SELECT * FROM orders WHERE user_id = ?`;
    const [rows, fields] = await connection.query(sql, [id]);
    res.status(200).send(rows);
    connection.release();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUsersOrders };
