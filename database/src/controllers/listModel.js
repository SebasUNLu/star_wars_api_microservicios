const { response } = require("../utils");
const store = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const listResponse = await store[model].list();
  return response(res, 200, listResponse)
}