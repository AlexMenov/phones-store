const { pool } = require("./connect");

const addPhoneModel = async (phoneModelData) => {
  const { photoAddress, name, description, price, category } = phoneModelData;
  const escapedCategory = pool.escapeId(category);

  try {
    const connection = await pool.getConnection();
    await connection.query(
      `INSERT INTO ${escapedCategory} (photo_address, name, description, price) VALUES (?, ?, ?, ?)`,
      [photoAddress, name, description, price]
    );
    connection.release();
    console.log(`Added ${phoneModelData.name} to ${category} table`);
  } catch (error) {
    console.error(
      `Error adding ${phoneModelData.name} to ${category} table:`,
      error
    );
  }
};

module.exports = { addPhoneModel };
