const throwMissingFiled = require("./throwMissingFiled");

module.exports = (film) => {
  const { title } = film;
  if (typeof title !== "string") throwMissingFiled("title");
};