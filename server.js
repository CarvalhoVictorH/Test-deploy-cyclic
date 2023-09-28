const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./src/router");

const port = process.env.PORT || 3333;
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
