const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const data = req.body;
  const newCharacter = await Characters.create(data);
  response(res, 201, newCharacter);
};
