// TODO cambiar esto para que envie un error: false y data: data
module.exports = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};
