const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deletedFilm = await Films.delete(id);
  return response(res, 200, deletedFilm.data);
};
