const express = require("express");
const { listCars } = require("./controller/users.controller");
const router = express();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/carros", listCars);

module.exports = router;
