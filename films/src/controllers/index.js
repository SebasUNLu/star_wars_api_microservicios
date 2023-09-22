const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  getFilmByID: catchedAsync(require("./getFilmById")),
  createFilm: catchedAsync(require("./createFilm"))
}