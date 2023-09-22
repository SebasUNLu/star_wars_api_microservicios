//  Clase para errores personalizados, contará con un mensaje y un status code

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode;
  }
}

module.exports = {
  ClientError,
};
