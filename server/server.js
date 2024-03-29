const { addPhoneModel } = require("./addProduct");
const { getPhoneModels } = require("./getPhonesModels");
const { sendmail } = require("./sendermail");
const { createUser } = require("./createUser");
const { findUser } = require("./findUser");
const { createOrder, addOrderItems } = require("./addOrder");
const { getUsersOrders } = require("./getUsersOrders");
const { getAllProducts } = require("./getAllProducts");
const { getAllUsers } = require("./getAllUsers");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/phones/:id", async (req, res) => {
  try {
    await getPhoneModels(req, res);
  } catch (error) {
    console.error("Phone model request error:", error);
    res.status(500).send("Internal server error");
  }
});

app.get("/api/orders/:id", async (req, res) => {
  try {
    await getUsersOrders(req, res);
  } catch (error) {
    console.error("Orders request error:", error);
    res.status(500).send("Internal server error");
  }
});

app.get("/api/getallproducts", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).send(products);
  } catch (error) {
    console.error("Orders request error:", error);
    res.status(500).send("Internal server error");
  }
});

app.get("/api/getallusers", async (req, res) => {
  console.log(process)
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (e) {
    console.error(e);
    res.status(500).send("Ошибка запроса пользователей", e);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await findUser(req.body);
    if (user.addUserToDatabase) {
      await createUser(req.body.user);
    }
    if (user.user[0]["user_id"]) {
      res.status(200).send(user.user[0]);
    } else {
      res.status(500).send("User not found");
    }
  } catch (error) {
    console.error("User request error:", error);
    res.status(500).send("Internal server error");
  }
});

app.post("/api/products", async (req, res) => {
  try {
    await addPhoneModel(req.body);
    res.status(200).send("Phone model added successfully");
  } catch (error) {
    console.error("Error adding phone model:", error);
    res.status(500).send("Internal server error");
  }
});

app.post("/api/order", async (req, res) => {
  try {
    const needToCreatedUser = await findUser(req.body.user);
    let userId = needToCreatedUser.user[0].user_id
      ? needToCreatedUser.user[0].user_id
      : "";
    if (needToCreatedUser.addUserToDatabase) {
      userId = await createUser(req.body.user);
    }
    const orderId = await createOrder(
      userId,
      req.body.orderId,
      req.body.date,
      req.body.price,
      req.body.orderStatus
    );
    await addOrderItems(orderId, req.body.order);
    sendmail(
      req.body.user.email,
      req.body.orderId,
      req.body.date,
      req.body.paymentMethod,
      req.body.order,
      req.body.price
    );
    res.status(200).send("Заказ выполнен успешно");
  } catch (error) {
    console.error("Ошибка выполнения заказа:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
