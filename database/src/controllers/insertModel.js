const { response } = require("../utils");
const store = require("../database");

async (req, res) => {
  const { model } = req.params;
  const newModel = req.body;
  const newInsertResponse = await store[model].insert(newModel);
  return response(res, 200, newInsertResponse)
};
