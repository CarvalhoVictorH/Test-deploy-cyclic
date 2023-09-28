const knex = require("../connection");

const listCars = async (req, res) => {
  try {
    const cars = await knex("carros");
    return res.json(cars);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ mensagem: "erro interno no servidor" });
  }
};

module.exports = { listCars };
