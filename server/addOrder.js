const { pool } = require("./connect");

const createOrder = async (
  userId,
  orderId,
  orderDate,
  orderPrice,
  orderStatus
) => {
  try {
    const connection = await pool.getConnection();
    const query =
      "INSERT INTO orders (orders_id, user_id, order_date, order_price, orders_status) VALUES (?, ?, ?, ?, ?)";
    const values = [orderId, userId, orderDate, orderPrice, orderStatus];
    await connection.query(query, values);
    connection.release();
  } catch (error) {
    console.error(error);
  }
  return orderId;
};

const addOrderItems = async (orderId, items) => {
  try {
    const connection = await pool.getConnection();
    for (const item of items) {
      const query =
        "INSERT INTO order_items (order_id, product_id, quantity, product_name, product_price) VALUES (?, ?, ?, ?, ?)";
      const values = [orderId, item.id, item.quantity, item.name, item.price];
      await connection.query(query, values);
    }
    connection.release();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createOrder, addOrderItems };
