const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deletedPlanet = await Planets.delete(id);
  return response(res, 200, deletedPlanet.data);
};
