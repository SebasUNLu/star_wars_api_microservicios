const { response } = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const deletedModel = await store[model].delete(id);
  return response(res, 200, deletedModel)
};
