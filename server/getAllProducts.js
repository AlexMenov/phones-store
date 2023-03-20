const { pool } = require("./connect");

const getAllProducts = async () => {
  const category = ["huawei", "iphones", "samsung"];
  let allProducts;
  try {
    let products = [];
    const connection = await pool.getConnection();
    for (let i = 0; i < category.length; i++) {
      const query = `SELECT * FROM ${category[i]}`;
      const item = await connection.query(query);
      products.push(item[0]);
    }
    allProducts = products.flat();
    connection.release();
  } catch (error) {
    console.error(error);
  }
  return allProducts;
};

module.exports = { getAllProducts };
