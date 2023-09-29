const { response } = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const updateModel = req.body;
  const updateResponse = await store[model].update(id, updateModel);
  return response(res, 200, updateResponse)
};
