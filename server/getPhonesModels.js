const { pool } = require("./connect");

const getPhoneModels = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const id = req.params.id;
    const sql = `SELECT * FROM ${id}`;
    const [rows, fields] = await connection.query(sql);
    res.status(200).send(rows);
    connection.release();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getPhoneModels };
