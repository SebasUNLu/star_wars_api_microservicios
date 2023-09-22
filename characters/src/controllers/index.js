const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  getCharacterByID: catchedAsync(require("./getCharacterByID")),
  createCharacter: catchedAsync(require("./createCharacter"))
}