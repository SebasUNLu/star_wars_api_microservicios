const { catchedAsync } = require("../utils");

module.exports = {
  listModel: catchedAsync(require("./listModel")),
  getModelById: catchedAsync(require("./getModelById")),
  insertModel: catchedAsync(require("./insertModel")),
  updateModel: catchedAsync(require("./updateModel")),
  deleteModel: catchedAsync(require("./deleteModel")),
};
