const throwMissingFiled = require("./throwMissingFiled");

module.exports = (character) => {
  const { name } = character;
  if (typeof name !== "string") throwMissingFiled("name");
};
