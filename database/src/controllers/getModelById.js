const { response } = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const modelResponse = await store[model].get(id);
  return response(res, 201, modelResponse)
}