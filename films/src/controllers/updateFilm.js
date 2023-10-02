const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const films = await Films.update(id, data);
  return response(res, 200, films.data);
};
