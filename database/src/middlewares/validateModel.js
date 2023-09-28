module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    return next();
  }
  // TODO cambiar apra que sea CLientError, mas personalizado
  throw Error("Invalid Model");
};
