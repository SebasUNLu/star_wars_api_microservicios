const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const characters = await Characters.update(id, data);
  return response(res, 200, characters.data);
};
