const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  // gender: ["male", "female", "unknown", "n/a", "hermaphrodite", "none"],
  gender: "String",
  // Clasves foráneas
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});
// Métodos

// No puede ser una arrow function por un tema del contexto de this
characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character)
};

module.exports = characterSchema;
