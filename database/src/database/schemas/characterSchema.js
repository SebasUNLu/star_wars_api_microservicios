const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: {
    type: String,
    enum: ["male", "female", "unknown", "n/a", "hermaphrodite", "none"],
  },
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

characterSchema.statics.get = async function (_id) {
  return await this.findById(_id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

characterSchema.statics.update = async function (_id, update) {
  return await this.findOneAndUpdate({ _id }, update)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.delete = async function (_id) {
  return await this.deleteOne({ _id })
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

module.exports = characterSchema;
