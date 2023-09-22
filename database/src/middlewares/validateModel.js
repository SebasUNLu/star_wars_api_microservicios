module.exports = (req, res, next) => {
  const { model } = req.params;
  console.log("Model: ", model);
  if (["Character", "Film", "Planet"].includes(model)) {
    return next();
  }
  throw Error("Invalid Model");
};
