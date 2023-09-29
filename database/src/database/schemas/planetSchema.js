const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  const { _id } = planet;
  if (typeof _id != "string") planet._id = uuidGenerator();
  return await this.create(planet);
};

planetSchema.statics.update = async function (_id, update) {
  return await this.findOneAndUpdate({ _id }, update)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.delete = async function (_id) {
  return await this.deleteOne({ _id })
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

module.exports = planetSchema;
