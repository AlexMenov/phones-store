const { addPhoneModel } = require("./addProduct");
const { getPhoneModels } = require("./getPhonesModels");

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

app.post("/api/products", async (req, res) => {
  try {
    await addPhoneModel(req.body);
    res.status(200).send("Phone model added successfully");
  } catch (error) {
    console.error("Error adding phone model:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
