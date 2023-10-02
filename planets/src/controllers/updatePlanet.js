const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const planets = await Planets.update(id, data);
  return response(res, 200, planets.data);
};
