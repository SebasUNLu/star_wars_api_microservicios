const { ClientError } = require("../../utils/errors");

module.exports = (field) => {
  throw new ClientError(`Missing obligartory field: ${field}`, 400);
};
