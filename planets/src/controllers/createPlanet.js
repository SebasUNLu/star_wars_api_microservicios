const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const data = req.body;
  const newPlanet = await Planets.create(data)
  response(res, 201, newPlanet)
};
