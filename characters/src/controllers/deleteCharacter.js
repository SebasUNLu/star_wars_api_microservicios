const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deletedCharacter = await Characters.delete(id);
  return response(res, 200, deletedCharacter.data);
};
