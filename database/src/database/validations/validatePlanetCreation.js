const throwMissingFiled = require("./throwMissingFiled");

module.exports = (planet) => {
  const { name } = planet;
  if (typeof name !== "string") throwMissingFiled("name");
};