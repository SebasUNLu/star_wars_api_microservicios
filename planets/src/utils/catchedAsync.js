module.exports = (fn) => {
  // Devuelve una función que al ejecutarla...
  return function(req, res, next){
    // ... ejecuta la función callback con .catch para atrapar algún error
    fn(req, res).catch((err) => {
      // En caso de error, saltará al manejador de errores de next
      next(err)
    })
  }
};
